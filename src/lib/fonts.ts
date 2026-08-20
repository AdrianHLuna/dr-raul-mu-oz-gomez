import localFont from "next/font/local";

export const metropolis = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/metropolis/files/metropolis-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/metropolis/files/metropolis-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/metropolis/files/metropolis-latin-900-normal.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-metropolis",
  display: "swap",
});
