import type { NextPage } from "next";
import Head from "next/head";
import { PartnerApplicationForm } from "@/deprecated/PartnerProgram";

const PartnerApplication: NextPage = () => {
  return (
    <>
      <Head>
        <title>Partner Application - fn7</title>
        <meta name="description" content="Apply to become an fn7 partner - Incubator, Influencer, or Mentor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white">
        <PartnerApplicationForm />
      </main>
    </>
  );
};

export default PartnerApplication;
