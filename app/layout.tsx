import React from "react"
import Analytics from '../components/Analytics'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <head>
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-T9FFFPPG');
              `,
            }}
          />
          {/* End Google Tag Manager */}
          
          {/* Google tag (gtag.js) */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZYMWHJ9XWQ" />
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
        </head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe 
              src="https://www.googletagmanager.com/ns.html?id=GTM-T9FFFPPG"
              height="0" 
              width="0" 
              style={{display:'none',visibility:'hidden'}}
            />
          </noscript>
          {/* End Google Tag Manager (noscript) */}
          
          {children}
          <Analytics />
        </body>
      </html>
    )
  }