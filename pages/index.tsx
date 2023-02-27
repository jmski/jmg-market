import { NavBar } from "@/components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jon Creative Marketing</title>
        <meta name="description" content="Get good" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="app">
        <NavBar />
      </main>
    </>
  );
}
