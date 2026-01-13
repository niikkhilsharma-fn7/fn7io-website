import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrganizationSchema from "@/components/metadata/OrganizationSchema";
import { Sora, Poppins } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Scout AI - Turn Social Conversations Into Traffic | fn7",
  description:
    "Scout finds real people asking for help with problems your product solves on Reddit, LinkedIn & X. Turn conversations into traffic without paid ads.",
  keywords: [
    "Scout AI",
    "Social Media Monitoring",
    "Conversation Marketing",
    "Reddit Marketing",
    "LinkedIn Engagement",
    "Twitter Marketing",
    "Organic Traffic",
  ],
  creator: "fn7",
  icons: {
    icon: "/fn7_nav_logo.svg",
  },
  openGraph: {
    title: "Scout AI - Turn Social Conversations Into Traffic | fn7",
    description:
      "Scout finds real people asking for help with problems your product solves on Reddit, LinkedIn & X. Turn conversations into traffic without paid ads.",
    images: ["https://www.fn7.io/fn7_logo.jpeg"],
    url: "https://www.fn7.io",
    type: "website",
    siteName: "fn7",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scout AI - Turn Social Conversations Into Traffic | fn7",
    description:
      "Scout finds real people asking for help with problems your product solves on Reddit, LinkedIn & X. Turn conversations into traffic without paid ads.",
    images: ["https://www.fn7.io/fn7_logo.jpeg"],
    site: "@fn7io",
  },

  alternates: {
    canonical: "https://www.fn7.io",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
      notranslate: true,
    },
  },
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL("https://www.fn7.io"),
  category: "technology",
  applicationName: "fn7",
  authors: [{ name: "fn7", url: "https://www.fn7.io" }],
};

const sora = Sora({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.className} ${poppins.variable} antialiased`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <OrganizationSchema />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
