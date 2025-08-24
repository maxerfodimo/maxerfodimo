import React from "react";
import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
      <Head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZYMWHJ9XWQ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZYMWHJ9XWQ');
            `,
          }}
        />
        
        {/* PASTE YOUR COOKIEHUB CMP CODE SNIPPET HERE */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}