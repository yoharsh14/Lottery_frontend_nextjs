//import works our front end
//require does not
// nodejs !=ecmajs
import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import LotteryEntrace from "components/LotteryEntrance";
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Smart Contract Lottery</title>
        <meta name="description" content="Our Smart Contract Lottery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <LotteryEntrace />
    </>
  );
}
