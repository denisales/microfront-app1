import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5001
  },
  plugins: [
    react(),
    federation({
      filename: "microfront-app1-entry.js",
      name: "microfront-app1",
      shared: ["react", "react-dom", "react-router-dom"],
      exposes: {
        "./app": "./src/App.tsx",
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
