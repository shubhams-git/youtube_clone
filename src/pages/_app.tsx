// src/pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Force dark mode by adding the class directly to the <html> tag
    if (typeof window !== "undefined") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return <Component {...pageProps} />;
}
