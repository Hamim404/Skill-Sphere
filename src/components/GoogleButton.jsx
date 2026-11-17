"use client";
import { Button } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";

export default function GoogleButton({ children }) {
  return (
    <Button variant="bordered" size="lg" className="w-full border-white/20 font-medium" startContent={<FcGoogle size={20} />}>
      {children}
    </Button>
  );
}
