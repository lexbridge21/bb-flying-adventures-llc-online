import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      crypto: "crypto-browserify",
      stream: "stream-browserify",
      assert: "assert",
      buffer: "buffer",
      util: "util",
      process: "process/browser",
    },
  },
  define: {
    global: "globalThis",
  },
});
