import "@/styles/globals.css";

import { cn } from "@/lib/utils/tailwind";
import { GeistSans } from "geist/font/sans";
import Header from "./_header";
import { Transition } from "@/components/transition";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-sans antialiased p-5 flex flex-col min-h-screen",
          GeistSans.variable
        )}
      >
        <Header />
        <Transition>{children}</Transition>
      </body>
    </html>
  );
}
