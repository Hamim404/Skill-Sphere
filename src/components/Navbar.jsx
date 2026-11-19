"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/my-profile", label: "My Profile" },
];

// TODO: replace with your real auth session.
// Set to { name: "Test", photo: "" } to preview the logged-in design.
const user = null;

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/70 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5">
        <Logo />

        {/* Desktop links */}
        <nav className="hidden items-center gap-2 sm:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive(l.href)
                  ? "bg-white/10 text-white"
                  : "text-mist hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right side: logged in / logged out */}
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <div className="grid size-9 place-items-center overflow-hidden rounded-full bg-ink-3 text-sm font-bold ring-2 ring-mint">
                {user.photo ? (
                  <img
                    src={user.photo}
                    alt={user.name}
                    className="size-full object-cover"
                  />
                ) : (
                  user.name[0]
                )}
              </div>
              <button className="rounded-xl border border-white/20 px-4 py-2 text-sm font-medium transition hover:bg-white/10">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="hidden rounded-xl px-4 py-2 text-sm font-medium text-mist transition hover:text-white sm:block"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className="rounded-xl bg-orbit px-4 py-2 text-sm font-semibold text-white shadow-[0_0_24px_rgba(123,92,255,0.5)] transition hover:bg-orbit-soft"
              >
                Register
              </Link>
            </>
          )}

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-xl border border-white/15 sm:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="border-t border-white/10 bg-ink/95 px-5 py-4 sm:hidden"
          aria-label="Mobile"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block py-2.5 text-lg ${isActive(l.href) ? "text-orbit-soft" : "text-white"}`}
            >
              {l.label}
            </Link>
          ))}
          {!user && (
            <Link
              href="/auth/login"
              onClick={() => setOpen(false)}
              className="block py-2.5 text-lg text-white"
            >
              Login
            </Link>
          )}
        </nav>
      )}
    </header>
  );
}
