import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { GeistSans } from "geist/font/sans";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={GeistSans.className}>
      <Component {...pageProps} />
    </main>
  );
}