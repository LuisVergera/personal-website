import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Background from "@/components/particlesBackground";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Luis Vergera</title>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <h1>Luis Santiago Vergera</h1>
        <div className="w-full h-full">
          <Background />
        </div>
      </main>
    </div>
  );
}
