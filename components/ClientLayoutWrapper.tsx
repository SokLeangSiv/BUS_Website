"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SweetRain } from "@/components/SweetRain";
import { GeminiChatWidget } from "@/components/GeminiChatWidget";

export const ClientLayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sweetRainEnabled, setSweetRainEnabled] = useState(true);

  return (
    <>
      <Navbar
        sweetRainEnabled={sweetRainEnabled}
        onToggleSweetRain={() => setSweetRainEnabled(!sweetRainEnabled)}
      />
      <main className="flex-grow">{children}</main>
      <SweetRain enabled={sweetRainEnabled} />
      <GeminiChatWidget />
      <Footer />
    </>
  );
};
