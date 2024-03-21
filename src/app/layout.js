import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          backgroundImage:
            "url(https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2018/11/dark-wallpapers.jpg)",
          cover: "no-repeat",
        }}
      >
        <div className="max-w-3xl mx-auto p-4">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
