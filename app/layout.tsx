import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import { Poppins } from "next/font/google";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};


const poppins = Poppins({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  variable: "--font-poppins",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={`min-h-screen bg-background font-sans antialiased ${poppins.className}`}>
        <div className="relative flex flex-col">
          <Navbar />
          <main>
            {children}
          </main>
          <Footer/>
        </div>

      </body>
    </html>
  );
}
