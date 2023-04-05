import React from "react";
import "@/styles/globals.scss";

import { Layout } from "@/components/";
import { StateContext } from "@/context/StateContext";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
