import Link from "next/link";
import { FaXTwitter, FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa6";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

const socials = [
  { icon: FaXTwitter, label: "X" },
  { icon: FaLinkedinIn, label: "LinkedIn" },
  { icon: FaGithub, label: "GitHub" },
  { icon: FaYoutube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/10 bg-ink-2/60">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-orbit/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-mist">Practical, expert-led courses in development, design, marketing and data. Learn at your pace, ship real work.</p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ icon: Icon, label }) => (
              <a key={label} href="#" aria-label={label} className="grid size-10 place-items-center rounded-full border border-white/15 text-mist transition hover:border-orbit hover:bg-orbit hover:text-white">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <nav aria-label="Explore">
          <h4 className="mb-4 font-semibold">Explore</h4>
          <ul className="space-y-2.5 text-sm text-mist">
            <li><Link className="hover:text-white" href="/">Home</Link></li>
            <li><Link className="hover:text-white" href="/courses">Courses</Link></li>
            <li><Link className="hover:text-white" href="/my-profile">My Profile</Link></li>
            <li><Link className="hover:text-white" href="/faq">FAQ</Link></li>
          </ul>
        </nav>
        <nav aria-label="Legal">
          <h4 className="mb-4 font-semibold">Legal</h4>
          <ul className="space-y-2.5 text-sm text-mist">
            <li><Link className="hover:text-white" href="/terms">Terms &amp; Conditions</Link></li>
            <li><Link className="hover:text-white" href="/privacy">Privacy Policy</Link></li>
          </ul>
        </nav>
        <div>
          <h4 className="mb-4 font-semibold">Contact</h4>
          <ul className="space-y-3 text-sm text-mist">
            <li className="flex items-center gap-2.5"><Mail size={16} className="text-mint" />hello@skillsphere.com</li>
            <li className="flex items-center gap-2.5"><Phone size={16} className="text-mint" />+880 1700 000 000</li>
            <li className="flex items-center gap-2.5"><MapPin size={16} className="text-mint" />Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10 py-5 text-center text-xs text-mist">© {new Date().getFullYear()} SkillSphere. All rights reserved.</div>
    </footer>
  );
}
