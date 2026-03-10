import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import PageTransition from "@/components/PageTransition";
import BackgroundVideo from "@/components/BackgroundVideo";
import LiveChatBotLazy from "@/components/LiveChatBotLazy";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: "/logo-icon.svg",
  },
  keywords: ["full-stack developer", "technical strategist", "web development", "e-commerce", "Shopify", "technical consulting", "high-ticket"],
  authors: [{ name: site.name }],
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

const themeScript = `
(function() {
  var t = localStorage.getItem('theme') || 'dark';
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(t);
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans`}>
        <ThemeProvider>
          <BackgroundVideo />
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <LiveChatBotLazy />
        </ThemeProvider>
      </body>
    </html>
  );
}
