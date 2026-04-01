import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { label: t("nav.home"), path: "/" },
    { label: t("nav.achievements"), path: "/category/achievements" },
    { label: t("nav.events"), path: "/category/events" },
    { label: t("nav.announcements"), path: "/category/announcements" },
    { label: t("nav.submitPost"), path: "/submit" },
    { label: t("nav.contact"), path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 royal-gradient border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Rajput Samaj" width={40} height={40} className="rounded-full" />
            <span className="font-heading text-lg font-bold text-primary-foreground tracking-wide">
              {t("hero.title")}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-gold/20 text-gold"
                    : "text-primary-foreground/80 hover:text-gold hover:bg-gold/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <LanguageToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle />
            <button
              onClick={() => setOpen(!open)}
              className="text-primary-foreground p-2"
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-gold/20 text-gold"
                    : "text-primary-foreground/80 hover:text-gold hover:bg-gold/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
