import { defineConfig, loadEnv } from "vite";
import process from 'node:process';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: env.VERCEL ? "/" : "/AniVerse/",
  }
});
