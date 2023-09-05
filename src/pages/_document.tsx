import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link href="https://fonts.googleapis.com/css?family=Inter&display=swap" rel="stylesheet" />
          <link rel="preload" href="/fonts/Inter-Regular.ttf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Inter-Bold.ttf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Inter-SemiBold.ttf" as="font" crossOrigin="" /> */}
        <link rel="icon" href="/favicon.ico" />
        <title>ДРУСБА</title>
        <meta
          name="description"
          content="СЛУЖБА ДОСТАВКИ АБСУРДА"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
