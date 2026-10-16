import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "@/app/globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Toaster } from "sonner";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { StructuredData } from "@/components/seo/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#090A0F",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://abuhosain.dev"),
  title: "Abu Hosain | Software Engineer, Founder & Brand Builder",
  description:
    "Abu Hosain is a Software Engineer, Startup Founder and Brand Builder. Explore his projects, technology expertise and digital innovations.",
  keywords: [
    "Abu Hosain",
    "Abu Hosain Software Engineer",
    "Abu Hosain Developer",
    "Abu Hosain Portfolio",
    "Abu Hosain Founder",
    "Abu Hosain NeexG",
    "Abu Hosain Oregent",
    "Software Engineer Bangladesh",
    "Full-Stack Developer",
    "Startup Founder Bangladesh",
    "AI Automation Engineer",
    "Brand Builder",
    "NeexG Founder",
    "Oregent Co-Founder",
  ],
  authors: [{ name: "Abu Hosain", url: "https://abuhosain.dev" }],
  creator: "Abu Hosain",
  publisher: "Abu Hosain",
  alternates: {
    canonical: "https://abuhosain.dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abuhosain.dev",
    title: "Abu Hosain | Software Engineer, Founder & Brand Builder",
    description:
      "Abu Hosain is a Software Engineer, Startup Founder and Brand Builder. Explore his projects, technology expertise and digital innovations.",
    siteName: "Abu Hosain",
    images: [
      {
        url: "https://abuhosain.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abu Hosain | Software Engineer, Founder & Brand Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abu Hosain | Software Engineer, Founder & Brand Builder",
    description:
      "Abu Hosain is a Software Engineer, Startup Founder and Brand Builder. Explore his projects, technology expertise and digital innovations.",
    images: ["https://abuhosain.dev/og-image.png"],
    creator: "@abuhosain25",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} className="dark" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans bg-[#090A0F] text-[#EDEDEF] antialiased selection:bg-accent/20 selection:text-accent`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <SmoothScroll>
              <CommandPalette />
              {children}
              <Toaster
                theme="dark"
                position="top-right"
                toastOptions={{
                  style: {
                    background: "#12131A",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#FFFFFF",
                  },
                }}
              />
            </SmoothScroll>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
