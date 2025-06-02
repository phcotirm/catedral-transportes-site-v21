import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

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
  const GA_ID   = process.env.NEXT_PUBLIC_GA_ID;    // ex.: G-XXXX
  const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID;  // ex.: AW-17145768392

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {/* ─── GTAG SCRIPTS ─────────────────────────────────────── */}
        {(GA_ID || GADS_ID) && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID || GADS_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                ${GA_ID   ? `gtag('config', '${GA_ID}',   { page_path: window.location.pathname });` : ""}
                ${GADS_ID ? `gtag('config', '${GADS_ID}');` : ""}
              `}
            </Script>
          </>
        )}
        {/* ─── CONTEÚDO DO SITE ───────────────────────────────── */}
        {children}
      </body>
    </html>
  );
}
