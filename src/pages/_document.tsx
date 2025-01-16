import Document, { Head, Html, Main, NextScript } from "next/document";
import { DefaultSeo } from "next-seo";

export default class Blog extends Document {
  render() {
    return (
      <Html>
        <Head />
        <DefaultSeo
          title={"Abba Sali"}
          description={"Abba Sali Aboubakar Mamate"}
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
