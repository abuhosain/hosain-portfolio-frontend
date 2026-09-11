import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Toaster } from "sonner";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { CursorSparkle } from "@/components/3d/CursorSparkle";
import { CyberHUD } from "@/components/layout/CyberHUD";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0D",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Abu Hosain — Software Engineer & Product Builder",
  description:
    "Abu Hosain is a software engineer and product builder from Bangladesh building modern web applications, digital products, and technology-driven solutions.",
  keywords: [
    "Abu Hosain",
    "Software Engineer",
    "Full-Stack Developer",
    "Product Builder",
    "Founder",
    "Next.js",
    "TypeScript",
    "IoT",
    "Robotics",
    "ESP32",
    "SystomeX",
  ],
  authors: [{ name: "Abu Hosain" }],
  creator: "Abu Hosain",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abu-hosain.dev",
    title: "Abu Hosain — Software Engineer & Product Builder",
    description:
      "Abu Hosain is a software engineer and product builder from Bangladesh building modern web applications, digital products, and technology-driven solutions.",
    siteName: "Abu Hosain Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abu Hosain — Software Engineer & Product Builder",
    description:
      "Software Engineer, Full-Stack Developer & Founder. Building products from idea to scale.",
    creator: "@abuhosain",
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
      <body className={`${inter.variable} bg-[#0A0A0D] text-[#EDEDEF] antialiased selection:bg-accent/20 selection:text-accent`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <SmoothScroll>
              <CustomCursor />
              <CursorSparkle />
              <CommandPalette />
              <CyberHUD />
              {children}
              <Toaster
                theme="dark"
                position="top-right"
                toastOptions={{
                  style: {
                    background: "#111118",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "#EDEDEF",
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
