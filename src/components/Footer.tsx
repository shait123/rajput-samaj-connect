import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="royal-gradient text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-xl font-bold text-gold mb-4">Rajput Samaj</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              A community platform celebrating the pride, heritage, and achievements of the Rajput community.
              United in tradition, growing with progress.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Achievements", "Events", "Announcements", "Contact"].map((link) => (
                <li key={link}>
                  <a href={link === "Home" ? "/" : `/${link.toLowerCase()}`} className="text-primary-foreground/70 hover:text-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-gold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-gold" />
                <span>info@rajputsamaj.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-gold" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gold" />
                <span>Rajasthan, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-8 pt-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Rajput Samaj. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
