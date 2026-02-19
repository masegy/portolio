import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Augyeris Lioga Seandrio — DevOps Engineer",
  description:
    "DevOps Engineer dengan fondasi kuat di frontend development, berpengalaman dalam otomatisasi dan optimasi pipeline CI/CD, deployment infrastruktur, dan observabilitas aplikasi.",
  keywords: ["DevOps Engineer", "CI/CD", "Jenkins", "Docker", "OpenShift", "React", "Next.js", "Tailwind CSS"],
  authors: [{ name: "Augyeris Lioga Seandrio" }],
  openGraph: {
    title: "Augyeris Lioga Seandrio — DevOps Engineer",
    description:
      "DevOps Engineer berpengalaman dalam otomatisasi CI/CD, containerization, dan observabilitas aplikasi.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
