import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { MAIN_ROUTE } from "./src/utils/routes";

// https://vitejs.dev/config/
export default defineConfig({ base: MAIN_ROUTE, plugins: [react()] });
