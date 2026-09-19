import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { LanguageProvider } from "../components/LanguageProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://augyeris.vercel.app"),
  title: "Augyeris Lioga Seandrio — DevOps & Platform Automation Engineer",
  description:
    "DevOps Engineer at WONDR by BNI specializing in CI/CD pipeline automation, OpenShift container orchestration, Elastic APM observability, and cloud infrastructure.",
  keywords: [
    "DevOps Engineer",
    "Platform Engineer",
    "CI/CD Automation",
    "Jenkins",
    "Fastlane",
    "OpenShift",
    "Kubernetes",
    "Docker",
    "Elastic APM",
    "Kafka",
    "WONDR by BNI",
    "React",
    "Single-Spa",
    "Next.js"
  ],
  authors: [{ name: "Augyeris Lioga Seandrio" }],
  openGraph: {
    title: "Augyeris Lioga Seandrio — DevOps & Platform Automation Engineer",
    description:
      "Enterprise CI/CD automation, OpenShift orchestration, and distributed observability at banking scale.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Augyeris Lioga Seandrio — DevOps & Platform Automation Engineer",
    description:
      "Enterprise CI/CD automation, OpenShift orchestration, and distributed observability at banking scale.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased selection:bg-accent-500/20 selection:text-accent-400`}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
