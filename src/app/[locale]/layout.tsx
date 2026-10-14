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
  title: "Abu Hosain — Software Engineer, Branding & AI Automation | NeexG & Oregent",
  description:
    "Bangladesh-based full-stack engineer, founder of NeexG and co-founder of Oregent. Web & SaaS development, branding, n8n/Zapier AI automation and video editing. IWC & I3C gold medalist.",
  keywords: [
    "Abu Hosain",
    "Abu Hosain NeexG",
    "Abu Hosain Oregent",
    "Abu Hosain software engineer",
    "Software Engineer Bangladesh",
    "full-stack developer Bogura",
    "web developer Bangladesh",
    "branding Bangladesh",
    "brand identity design Bangladesh",
    "AI automation Bangladesh",
    "n8n automation expert",
    "Zapier automation",
    "workflow automation",
    "video editing",
    "startup founder Bangladesh",
    "NeexG founder",
    "Oregent co-founder",
  ],
  authors: [{ name: "Abu Hosain", url: "https://abuhosain.dev" }],
  creator: "Abu Hosain",
  alternates: {
    canonical: "https://abuhosain.dev",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abuhosain.dev",
    title: "Abu Hosain — Software Engineer, Branding & AI Automation | NeexG & Oregent",
    description:
      "Bangladesh-based full-stack engineer, founder of NeexG and co-founder of Oregent. Web & SaaS development, branding, n8n/Zapier AI automation and video editing. IWC & I3C gold medalist.",
    siteName: "Abu Hosain Portfolio",
    images: [
      {
        url: "https://abuhosain.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abu Hosain — Software Engineer, Branding & AI Automation | NeexG & Oregent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abu Hosain — Software Engineer, Branding & AI Automation | NeexG & Oregent",
    description:
      "Bangladesh-based full-stack engineer, founder of NeexG and co-founder of Oregent. Web & SaaS development, branding, n8n/Zapier AI automation and video editing.",
    images: ["https://abuhosain.dev/og-image.png"],
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
