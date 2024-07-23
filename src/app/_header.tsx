"use client";

import { Navbar } from "@/components/navbar";

export default function Header() {
  return (
    <header className="flex flex-col items-center">
      <h1 className="text-8xl font-bold">
        TrivIA<span className="text-4xl">.js</span>
      </h1>
      <Navbar />
    </header>
  );
}
