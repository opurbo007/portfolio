import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/provider/theme-provider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import AnimatedFavicon from "@/components/AnimatedFav";
import BackToTop from "@/components/BackToTop";
import ChatBot from "@/components/ChatBot";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const siteUrl = "https://opupal.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Opu Pal | Full-Stack Developer",
    template: "%s | Opu Pal",
  },
  description:
    "Portfolio of Opu Pal — a passionate full-stack web developer based in Nottingham, UK, specializing in the MERN stack, Next.js, React, TypeScript, and Node.js.",
  keywords: [
    "Opu Pal",
    "full-stack developer",
    "MERN stack",
    "Next.js developer",
    "React developer",
    "web developer Nottingham",
    "TypeScript",
    "Node.js",
    "portfolio",
  ],
  authors: [{ name: "Opu Pal" }],
  creator: "Opu Pal",
  publisher: "Opu Pal",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Opu Pal | Full-Stack Developer",
    description:
      "Portfolio of Opu Pal — a passionate full-stack web developer specializing in the MERN stack and Next.js.",
    url: siteUrl,
    siteName: "Opu Pal Portfolio",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/avatar.jpg",
        width: 800,
        height: 800,
        alt: "Opu Pal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Opu Pal | Full-Stack Developer",
    description:
      "Portfolio of Opu Pal — a passionate full-stack web developer specializing in the MERN stack and Next.js.",
    images: ["/avatar.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <AnimatedFavicon />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Opu Pal",
              url: siteUrl,
              image: `${siteUrl}/avatar.jpg`,
              jobTitle: "Full-Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Techy's World Ltd",
              },
              sameAs: [
                "https://github.com/opurbo007",
                "https://www.linkedin.com/in/opu-pal/",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "Node.js",
                "MongoDB",
                "TypeScript",
                "Tailwind CSS",
              ],
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Toaster position="top-center" />
          {children}
          <Footer />
        </ThemeProvider>
        <BackToTop />
        <ChatBot />
      </body>
    </html>
  );
}