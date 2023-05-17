import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";


export default function Home() {
  return (
    <div className="text-black ">
      <Head>
        <title>TVBS 2023實習生計畫</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
    </div>
  );
}
