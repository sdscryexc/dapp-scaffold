import type { NextPage } from "next";
import Head from "next/head";
import { DashFlip } from "../views";

const Basics: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Scaffold</title>
        <meta
          name="description"
          content="Basic Functionality"
        />
      </Head>
      <DashFlip />
    </div>
  );
};

export default DashFlip;
