import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export const metadata = {
  metadataBase: new URL("https://spcatering.in"),
  title: "Best Catering Services in Chennai | SP Catering Services",
  description:
    "SP Catering offers high-quality catering services in Chennai with a wide variety of delicious veg dishes for all occasions. Over 40+ years of experience.",
  keywords: [
    "catering",
    "best catering",
    "best catering in Chennai",
    "Chennai",
    "wedding catering Chennai",
    "vegetarian catering",
    "SP Catering Services",
    "Upanayanam catering Chennai",
    "Brahmin catering Chennai",
  ],
  authors: [{ name: "SP Catering Services" }],
  creator: "SP Catering Services",
  publisher: "SP Catering Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "https://ik.imagekit.io/nknso76xld/SP%20Catering%20Services/logo.jpg",
    apple: "https://ik.imagekit.io/nknso76xld/SP%20Catering%20Services/logo.jpg",
  },
  openGraph: {
    title: "Best Catering Services in Chennai | SP Catering Services",
    description:
      "SP Catering offers high-quality catering services for all occasions with over 40+ years of culinary experience in Chennai.",
    url: "https://spcatering.in",
    siteName: "SP Catering Services",
    images: [
      {
        url: "https://ik.imagekit.io/nknso76xld/SP%20Catering%20Services/logo.jpg",
        width: 800,
        height: 800,
        alt: "SP Catering Services Official Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Catering Services in Chennai | SP Catering Services",
    description:
      "SP Catering offers high-quality catering services for all occasions with over 40+ years of culinary experience in Chennai.",
    images: ["https://ik.imagekit.io/nknso76xld/SP%20Catering%20Services/logo.jpg"],
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "SP Catering Services",
  image: "https://ik.imagekit.io/nknso76xld/SP%20Catering%20Services/logo.jpg",
  telephone: "+91 9840317167",
  email: "spcateringspcatering@gmail.com",
  url: "https://spcatering.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No: 5, (Old No: 3), Nambuliar Street, Kondithope",
    addressLocality: "Chennai",
    postalCode: "600079",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.094324,
    longitude: 80.273859,
  },
  servesCuisine: "South Indian Vegetarian",
  priceRange: "₹₹",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "50",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#F9F6EE] text-[#4A2E1B]">{children}</body>
    </html>
  );
}
