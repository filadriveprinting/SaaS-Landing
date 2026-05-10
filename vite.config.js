import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { readdirSync } from "node:fs";
import { resolve, join } from "node:path";

/**
 * Plugin dev: sirve /api/<file>.js como function serverless usando el MISMO
 * handler que se desplegará en Vercel. Así no hace falta `vercel dev` ni
 * un servidor Express paralelo durante el desarrollo.
 *
 * En producción (Vercel), los archivos de /api se despliegan automáticamente
 * como funciones serverless y este plugin no se ejecuta.
 */
function apiDevPlugin() {
  return {
    name: "api-dev-handler",
    apply: "serve",
    configureServer(server) {
      const apiDir = resolve(server.config.root, "api");
      let routes;
      try {
        routes = readdirSync(apiDir)
          .filter((f) => f.endsWith(".js") || f.endsWith(".mjs"))
          .map((f) => ({
            path: "/api/" + f.replace(/\.(m?js)$/, ""),
            file: join(apiDir, f),
          }));
      } catch {
        routes = [];
      }

      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split("?")[0];
        const route = routes.find((r) => r.path === url);
        if (!route) return next();

        // Body parsing JSON.
        let body = null;
        if (["POST", "PUT", "PATCH"].includes(req.method || "")) {
          try {
            const chunks = [];
            for await (const chunk of req) chunks.push(chunk);
            const raw = Buffer.concat(chunks).toString("utf8");
            body = raw ? JSON.parse(raw) : {};
          } catch {
            res.statusCode = 400;
            return res.end(JSON.stringify({ error: "invalid_json" }));
          }
        }

        // Shim de respuesta estilo Vercel/Next.
        const shim = res;
        shim.status = (code) => {
          res.statusCode = code;
          return shim;
        };
        shim.json = (data) => {
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(data));
          return shim;
        };

        // Vercel parsea el body por defecto. Inyectamos req.body.
        req.body = body;

        try {
          const mod = await server.ssrLoadModule(route.file);
          const handler = mod.default || mod.handler;
          if (typeof handler !== "function") {
            res.statusCode = 500;
            return res.end(JSON.stringify({ error: "no_default_export" }));
          }
          await handler(req, shim);
        } catch (err) {
          console.error("[api-dev]", err);
          res.statusCode = 500;
          res.end(JSON.stringify({ error: "handler_threw", message: err.message }));
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  // Carga .env y vuelca las claves NO-VITE_ a process.env para los handlers.
  const env = loadEnv(mode, process.cwd(), "");
  for (const key of Object.keys(env)) {
    if (!process.env[key]) process.env[key] = env[key];
  }

  return {
    plugins: [react(), apiDevPlugin()],
  };
});
