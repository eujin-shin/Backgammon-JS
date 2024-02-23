import { Comfortaa, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const comfortaa = Comfortaa({ subsets: ["latin"], display: "swap" });

export default function MyApp({ Component, pageProps }) {}
