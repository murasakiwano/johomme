import { dev } from "$app/environment";

export const title = "JoHome";
export const description = "My personal website and blog";
export const url = new URL(dev ? "http://localhost:5173/" : "https://johom.me/");
