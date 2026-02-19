import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Augyeris Lioga Seandrio — Frontend Developer",
  description:
    "Pengembang web frontend yang terampil menciptakan pengalaman web yang menarik dan ramah pengguna. Terbiasa berkoordinasi dengan tim, desainer UI/UX, dan backend developer.",
  keywords: ["Frontend Developer", "React", "Next.js", "Tailwind CSS", "Microfrontend"],
  authors: [{ name: "Augyeris Lioga Seandrio." }],
  openGraph: {
    title: "Augyeris Lioga Seandrio — Frontend Developer",
    description:
      "Pengembang web frontend yang terampil menciptakan pengalaman web yang menarik dan ramah pengguna.",
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
