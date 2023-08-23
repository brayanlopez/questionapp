import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { MAIN_ROUTE } from "./src/utils/routes";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: MAIN_ROUTE,
});
