import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Footer} from "@/components/Footer";
import { getEvenements, getCompetitions, getContact } from "@/lib/api";
import { cookies } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "USCS Athlétisme",
  description: "Club d'athlétisme de Saucats",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const auth = cookieStore.get("coach_auth");
  const isCoach = auth?.value === "ok";
  const evenements = await getEvenements();
  const competitions = await getCompetitions();
  const contact = await getContact();

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <div className="min-h-screen flex flex-col">
          <main className="grow">
            <Header evenements={evenements} competitions={competitions} isCoach={isCoach} />
            {children}
          </main>
          <Footer contact={contact} />
        </div>
      </body>
    </html>
  );
}
