import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { doctor } from "@/data/doctor";
import { metropolis } from "@/lib/fonts";

export const metadata: Metadata = {
  title: `${doctor.title} ${doctor.name} | ${doctor.specialistTitle}`,
  description: doctor.bio.substring(0, 160) + "...",
  keywords: [
    `Traumatólogo en Tuxtla Gutiérrez`,
    `Ortopedista Tuxtla Gutiérrez Chiapas`,
    `Artroscopia de rodilla Chiapas`,
    `Artroscopia de hombro Tuxtla Gutiérrez`,
    `Prótesis de cadera y rodilla Chiapas`,
    `Cirugía endoscópica de columna UBE Tuxtla`
  ],
  openGraph: {
    title: `${doctor.title} ${doctor.name} | ${doctor.specialistTitle}`,
    description: doctor.bio.substring(0, 160) + "...",
    siteName: `${doctor.title} ${doctor.name}`,
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`scroll-smooth ${metropolis.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WRQDM8MQ');`,
          }}
        />

        {/* Google Ads (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-328089695"
          strategy="afterInteractive"
        />
        <Script
          id="google-ads"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-328089695');
            `,
          }}
        />

        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NCKVZCK8N6"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-NCKVZCK8N6');
            `,
          }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen bg-brand-carbon">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WRQDM8MQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
