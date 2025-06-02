import Script from "next/script";

const GA_ID   = process.env.NEXT_PUBLIC_GA_ID;    //  G-XXXX
const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID;  //  AW-17145768392

// ... dentro do <head>:
<>
  {/* carrega gtag.js apenas 1 vez */}
  {(GA_ID || GADS_ID) && (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID || GADS_ID}`}
      strategy="afterInteractive"
    />
  )}

  {/* inicializa e registra ambos IDs */}
  {(GA_ID || GADS_ID) && (
    <Script id="gtag-init" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        ${GA_ID   ? `gtag('config', '${GA_ID}',   { page_path: window.location.pathname });` : ""}
        ${GADS_ID ? `gtag('config', '${GADS_ID}');` : ""}
      `}
    </Script>
  )}
</>
