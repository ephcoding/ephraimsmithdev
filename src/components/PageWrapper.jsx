import Head from "next/head";
import { Header } from "components";

export const PageWrapper = ({ title, children }) => {
  return (
    <div className="bg-black text-slate-100 min-h-screen">
      <Head>
        <meta
          name="keywords"
          content="Ephraim Smith, coding, software development, React Native, React, mobile development, mobile apps, mobile software, web development"
        />
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="ephraimsmith.dev" />
        <meta property="og:url" content="https://www.ephraimsmith.dev" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@ephcoding" />
        <title>{title}</title>
      </Head>

      <Header />

      <main className="container px-4 mx-auto">{children}</main>
    </div>
  );
};
