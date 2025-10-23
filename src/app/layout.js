/* eslint-disable perfectionist/sort-imports */
import "src/global.css";

import Script from "next/script";

import PropTypes from "prop-types";

import ThemeProvider from "src/theme";
import { primaryFont } from "src/theme/typography";

import ProgressBar from "src/components/progress-bar";
import { MotionLazy } from "src/components/animate/motion-lazy";
import SnackbarProvider from "src/components/snackbar/snackbar-provider";

// ----------------------------------------------------------------------

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  title: "Lakshay Mehla | Full Stack Developer | Portfolio",
  description:
    "Portfolio of Lakshay Mehla - Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Explore my projects and skills.",
  keywords: "",
  manifest: "/manifest.json",
  icons: [
    { rel: "icon", url: "/favicon/favicon.ico" },
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon/favicon-16x16.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon/favicon-32x32.png" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/favicon/apple-touch-icon.png" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <>
      <Script strategy="afterInteractive">
        {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "jgigsyev5c");
      `}
      </Script>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-GZYLVY8RJS"
        strategy="afterInteractive"
      />

      <Script strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-GZYLVY8RJS');
      `}
      </Script>

      <Script type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Lakshay Mehla",
          url: "https://lakshaymehla.com/",
          jobTitle: "Lead Full Stack Developer",
          description: "Lead Full Stack Developer with 2.5+ years delivering B2B travel platforms end-to-end",
          sameAs: [
            "https://shorturl.at/xoPOi",
          ],
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+918053538873",
              contactType: "professional",
              email: "mehlalakshay@gmail.com",
              areaServed: "IN",
              availableLanguage: "en",
            },
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Gurugram",
            addressRegion: "Haryana",
            addressCountry: "IN",
          },
        })}
      </Script>

      <html lang="en" className={primaryFont.className}>
        <body>
          <ThemeProvider>
            <MotionLazy>
              <SnackbarProvider>
                <ProgressBar />
                {children}
              </SnackbarProvider>
            </MotionLazy>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node,
};
