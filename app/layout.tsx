import type { Metadata } from "next";
import { Archivo, Archivo_Black, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Script from "next/script";

const display = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const sans = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Michael Schoengold Beatty | National Security & Defense Technology Strategist",
  description: "Michael Schoengold Beatty works at the intersection of national security and technology. Currently at Palantir Technologies working on defense solutions. Former DoD Chief of Staff, NSC Director, and State Department official with 15+ years in national security, defense policy, and government operations.",
  keywords: [
    "Michael Schoengold Beatty",
    "Mike Schoengold Beatty",
    "Schoengold Beatty",
    "National Security",
    "Defense Technology",
    "Palantir Technologies",
    "DoD Chief of Staff",
    "NSC Director",
    "White House National Security Council",
    "Department of Defense",
    "State Department",
    "Defense Policy",
    "National Security Strategy",
    "Afghanistan",
    "Special Operations",
    "Georgetown MSFS",
    "Georgetown MBA",
    "Council on Foreign Relations",
    "Defense Innovation",
    "Government Technology",
    "Counterterrorism",
    "Foreign Policy",
    "National Security Professional"
  ],
  authors: [{ name: "Michael Schoengold Beatty" }],
  creator: "Michael Schoengold Beatty",
  publisher: "Michael Schoengold Beatty",
  metadataBase: new URL('https://mschoengoldbeatty.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Michael Schoengold Beatty | National Security & Defense Technology",
    description: "National security professional at Palantir Technologies. Former DoD Chief of Staff and NSC Director with 15+ years experience in defense, diplomacy, and technology.",
    url: 'https://mschoengoldbeatty.com',
    siteName: 'Michael Schoengold Beatty',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Michael Schoengold Beatty',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Michael Schoengold Beatty | National Security & Defense Technology",
    description: "National security professional at Palantir Technologies. Former DoD Chief of Staff and NSC Director.",
    creator: '@MSchoengold',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Michael Schoengold Beatty',
    alternateName: 'Mike Schoengold Beatty',
    url: 'https://mschoengoldbeatty.com',
    image: 'https://mschoengoldbeatty.com/images/og-image.png',
    jobTitle: 'Business Operations Lead',
    worksFor: {
      '@type': 'Organization',
      name: 'Palantir Technologies',
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Georgetown University',
        department: 'Walsh School of Foreign Service',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Georgetown University',
        department: 'McDonough School of Business',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Northwestern University',
      },
    ],
    memberOf: {
      '@type': 'Organization',
      name: 'Council on Foreign Relations',
    },
    description: 'National security professional with 15+ years of experience spanning the U.S. government and private sector. Currently at Palantir Technologies working on defense solutions.',
    sameAs: [
      'https://www.linkedin.com/in/mschoengold/',
      'https://x.com/MSchoengold',
      'https://github.com/mschoengold',
    ],
    knowsAbout: [
      'National Security',
      'Defense Policy',
      'Defense Technology',
      'Government Operations',
      'Foreign Policy',
      'Counterterrorism',
      'Business Operations',
      'Strategic Planning',
    ],
  };

  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        {children}

        {/* GoatCounter: privacy-friendly visit counting. */}
        <Script
          id="goatcounter"
          strategy="afterInteractive"
          src="https://gc.zgo.at/count.js"
          data-goatcounter="https://mschoengoldbeatty.goatcounter.com/count"
        />
      </body>
    </html>
  );
}
