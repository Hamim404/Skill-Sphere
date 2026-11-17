"use client";
import { HeroUIProvider, ToastProvider } from "@heroui/react";

export default function Providers({ children }) {
  return (
    <HeroUIProvider>
      <ToastProvider placement="top-right" />
      {children}
    </HeroUIProvider>
  );
}
