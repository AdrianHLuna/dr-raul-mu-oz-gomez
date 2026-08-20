import type { Metadata } from "next";
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
      <body className="antialiased flex flex-col min-h-screen bg-brand-carbon">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
