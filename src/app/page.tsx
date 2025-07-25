import Image from "next/image";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "./components/Header";

export default function Home() {
  return (
    <div
      className="
    relative 
    h-screen 
    bg-gradient-to-b
    from-gray-900/10
    to-[#010511]
    lg:h-[140vh]"
    >
      <Head>
        <title>Home - Netflix Clone</title>
      </Head>
      <Header />
      <main></main>
    </div>
  );
}
