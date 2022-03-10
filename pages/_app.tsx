import React from "react";
import type { AppProps } from "next/app";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
