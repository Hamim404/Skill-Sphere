"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navbar as HNavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button, Avatar } from "@heroui/react";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/my-profile", label: "My Profile" },
];

// TODO: replace with your real auth session. Layout shows both states below.
const user = null;

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <HNavbar
      maxWidth="xl"
      height="4.5rem"
      isMenuOpen={open}
      onMenuOpenChange={setOpen}
      className="border-b border-white/5 bg-ink/70 backdrop-blur-xl"
      classNames={{ wrapper: "px-5" }}
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle aria-label="Toggle menu" className="sm:hidden" />
        <NavbarBrand><Logo /></NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-2 sm:flex" justify="center">
        {links.map((l) => (
          <NavbarItem key={l.href} isActive={active(l.href)}>
            <Link
              href={l.href}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${active(l.href) ? "bg-white/10 text-white" : "text-mist hover:text-white"}`}
            >
              {l.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="gap-2">
        {user ? (
          <>
            <Avatar src={user.photo} name={user.name} size="sm" isBordered color="secondary" />
            <Button variant="bordered" size="sm" className="border-white/20">Logout</Button>
          </>
        ) : (
          <>
            <NavbarItem className="hidden sm:flex">
              <Button as={Link} href="/login" variant="light" size="sm">Login</Button>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} href="/register" color="primary" size="sm" className="font-semibold shadow-[0_0_24px_rgba(123,92,255,0.5)]">Register</Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      <NavbarMenu className="bg-ink/95 pt-6">
        {links.map((l) => (
          <NavbarMenuItem key={l.href}>
            <Link href={l.href} onClick={() => setOpen(false)} className={`block py-2 text-lg ${active(l.href) ? "text-orbit-soft" : "text-white"}`}>{l.label}</Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Link href="/login" onClick={() => setOpen(false)} className="block py-2 text-lg text-white">Login</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </HNavbar>
  );
}

