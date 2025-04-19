import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      include: "**/*.svg?react",
      exportAsDefault: true,
      svgrOptions: {
        svgProps: { fill: "currentColor" },
        icon: true,
        replaceAttrValues: {
          black: "currentColor",
        },
      },
    }),
  ],
});
