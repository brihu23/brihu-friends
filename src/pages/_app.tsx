import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/contexts/theme-provider";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    <main className={GeistSans.className}>
      <Component {...pageProps} />
    </main>
    </ThemeProvider>
  );
}
