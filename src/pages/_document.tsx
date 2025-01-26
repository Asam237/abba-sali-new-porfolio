import Document, { Head, Html, Main, NextScript } from "next/document";
import { DefaultSeo } from "next-seo";

export default class Blog extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <DefaultSeo
          title={"Abba Sali Aboubakar Mamate"}
          description={
            "Abba Sali Aboubakar Mamate | Passionate Software Engineer"
          }
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
