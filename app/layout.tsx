import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nguyễn Thị Lan Hương | Blog Giáo viên Tiểu học & Trò chơi Giáo dục",
  description: "Trang web cá nhân của cô giáo Nguyễn Thị Lan Hương. Chia sẻ tài liệu học tập, kinh nghiệm giảng dạy tiểu học và các trò chơi giáo dục tương tác thú vị.",
  keywords: ["Nguyễn Thị Lan Hương", "giáo viên tiểu học", "blog giáo dục", "trò chơi học tập", "tài liệu tiểu học", "Tiếng Việt tiểu học"],
  authors: [{ name: "Nguyễn Thị Lan Hương" }],
  creator: "Nguyễn Thị Lan Hương",
  openGraph: {
    title: "Nguyễn Thị Lan Hương | Blog Giáo viên Tiểu học",
    description: "Khám phá thế giới giáo dục tiểu học đầy màu sắc cùng cô giáo Lan Hương.",
    type: "website",
    locale: "vi_VN",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
