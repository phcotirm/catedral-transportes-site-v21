import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";               // (já existe)

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Catedral Transportes",
  description: "Transporte de veículos com segurança e confiança",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_ID   = process.env.NEXT_PUBLIC_GA_ID;     // GA4
  const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID;   // ▼ novo Ads

  return (
    <html lang="pt-BR">
      <head>
        {/* ---------- GA4 (já estava) ---------- */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}

        {/* ---------- Google Ads tag ---------- */}
        {GADS_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GADS_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gads-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GADS_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
