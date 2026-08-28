import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const businessName = "پرس شیلنگ مسافر";

const description =
  "پرس شیلنگ مسافر در ارومیه؛ ارائه خدمات تخصصی هیدرولیک، پنوماتیک، شیلنگ غذایی و اسیدی، صنعتی و کشاورزی، تأمین اتصالات و خدمات تخصصی شیلنگ.";

export const metadata: Metadata = {
  title: "پرس شیلنگ مسافر | خدمات هیدرولیک و پنوماتیک در ارومیه",

  description,

  keywords: [
    "پرس شیلنگ ارومیه",
    "پرس شیلنگ هیدرولیک",
    "پرس شیلنگ پنوماتیک",
    "شیلنگ هیدرولیک ارومیه",
    "هیدرولیک ارومیه",
    "پنوماتیک ارومیه",
    "شیلنگ غذایی",
    "شیلنگ اسیدی",
    "شیلنگ صنعتی",
    "شیلنگ کشاورزی",
    "اتصالات هیدرولیک",
    "پرس شیلنگ مسافر",
  ],

  authors: [
    {
      name: businessName,
    },
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "پرس شیلنگ مسافر | خدمات هیدرولیک و پنوماتیک",
    description,
    type: "website",
    locale: "fa_IR",
    siteName: businessName,
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",

  name: businessName,

  description,

  telephone: "+984432382448",

  address: {
    "@type": "PostalAddress",
    streetAddress: "کوی یکطرفه، خیابان پزشکیان، طبقه همکف",
    addressLocality: "ارومیه",
    addressRegion: "آذربایجان غربی",
    addressCountry: "IR",
  },

  areaServed: {
    "@type": "City",
    name: "ارومیه",
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
  ],

  sameAs: ["https://maps.app.goo.gl/w1cCio1QEbvx73Mj9"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Script
          id="business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema),
          }}
        />

        {children}
      </body>
    </html>
  );
}