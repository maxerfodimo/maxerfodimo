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
              // Define dataLayer and the gtag function.
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              
              // Set default consent for specific regions according to your requirements
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'regions':[]
              });
              
              // Set default consent for all other regions according to your requirements
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied'
              });
              
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