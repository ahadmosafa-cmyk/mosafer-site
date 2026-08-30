
import type { Metadata } from "next";
import "./globals.css";

const businessName = "پرس شیلنگ مسافر";
const siteUrl = "https://mosaferhose.ir";

const description =
  "پرس شیلنگ مسافر در ارومیه؛ خدمات تخصصی پرس، ساخت، تعویض و تعمیر شیلنگ هیدرولیک و پنوماتیک، تأمین شیلنگ و اتصالات و خدمات مرتبط با ماشین‌آلات صنعتی، کشاورزی و راه‌سازی.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "پرس شیلنگ مسافر | پرس شیلنگ در ارومیه",

  description,

  keywords: [
    "پرس شیلنگ ارومیه",
    "پرس شیلنگ در ارومیه",
    "پرس شیلنگ هیدرولیک ارومیه",
    "پرس شیلنگ پنوماتیک ارومیه",
    "شیلنگ هیدرولیک ارومیه",
    "شیلنگ پنوماتیک ارومیه",
    "اتصالات هیدرولیک ارومیه",
    "ساخت شیلنگ هیدرولیک",
    "تعویض شیلنگ هیدرولیک",
    "تعمیر شیلنگ هیدرولیک",
    "پرس شیلنگ مسافر",
  ],

  authors: [
    {
      name: businessName,
    },
  ],

  creator: businessName,
  publisher: businessName,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  icons: {
    icon: "/images/logo.jpg",
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },

  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: siteUrl,
    siteName: businessName,
    title: "پرس شیلنگ مسافر | پرس شیلنگ در ارومیه",
    description,
    images: [
      {
        url: "/images/logo.jpg",
        width: 512,
        height: 512,
        alt: businessName,
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "پرس شیلنگ مسافر | پرس شیلنگ در ارومیه",
    description,
    images: ["/images/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}