import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

// Dev runs on 127.0.0.1:5173 (Vite's default). Ports 8080 and 8090 are taken
// by other software on the office machine.
export default defineConfig(({ command, isPreview }) => ({
  server: {
    host: "127.0.0.1",
    port: 5173,
    strictPort: true,
  },
  resolve: { tsconfigPaths: true },
  plugins: [
    tailwindcss(),
    tanstackStart(),
    ...(command === "build" || isPreview
      ? [
          nitro({
            // The site runs on Railway as a plain Node server that binds $PORT.
            // NITRO_PRESET overrides it.
            preset: process.env.NITRO_PRESET || "node-server",
            // Brotli and gzip copies of the JS, CSS and other text assets, made
            // once at build time at full strength and served by the Node
            // server. Without them every asset left the server uncompressed.
            compressPublicAssets: { brotli: true, gzip: true },
            // Photos were going out with a 4-hour lifetime, so a returning
            // parent re-downloaded every one. Thirty days, not immutable: the
            // filenames carry no hash, and a replaced photo should show up.
            routeRules: {
              "/images/**": { headers: { "cache-control": "public, max-age=2592000" } },
              // The font files never change in place (a new weight is a new
              // file), so a year is safe; they were also on four hours.
              "/fonts/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } },
            },
          }),
        ]
      : []),
    viteReact(),
  ],
}));
