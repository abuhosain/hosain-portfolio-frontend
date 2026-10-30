import type { Metadata, Viewport } from "next";
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
        />
        <StructuredData />
      </head>
      <body
        className="font-sans bg-[#090A0F] text-[#EDEDEF] antialiased selection:bg-accent/20 selection:text-accent"
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
