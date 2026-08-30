
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const businessName = "پرس شیلنگ مسافر";

const description =
  "پرس شیلنگ مسافر در ارومیه؛ ارائه خدمات تخصصی پرس، ساخت، تعویض و تعمیر شیلنگ هیدرولیک و پنوماتیک، تأمین شیلنگ و اتصالات و خدمات مرتبط با ماشین‌آلات صنعتی، کشاورزی و راه‌سازی.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mosaferhose.ir"),

  title: "پرس شیلنگ مسافر | پرس شیلنگ در ارومیه",

  description,

  icons: {
    icon: "/icon.jpg",
    shortcut: "/icon.jpg",
    apple: "/icon.jpg",
  },

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

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "پرس شیلنگ مسافر | پرس شیلنگ در ارومیه",
    description,
    url: "https://mosaferhose.ir",
    siteName: businessName,
    locale: "fa_IR",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "پرس شیلنگ مسافر | پرس شیلنگ در ارومیه",
    description,
  },
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
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: businessName,
              description,
              url: "https://mosaferhose.ir",
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
              sameAs: [
                "https://maps.app.goo.gl/w1cCio1QEbvx73Mj9",
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
