import { Camera, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display text-2xl font-bold">
                <span className="text-primary">IKON</span>
                <span className="text-foreground"> Image Studio</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Professional photography studio in Hyderabad, specializing in weddings,
              portraits, events, and product photography. Capturing your moments with
              artistic excellence.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "Gallery", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  Budhanagar, Road No.01,
                  <br />
                  Opp Uppal Depot, Hyderabad
                </span>
              </li>
              <li>
                <a
                  href="tel:+919885663003"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  098856 63003
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} IKON Image Studio. All rights reserved.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-muted-foreground">
            <span>Developed by Sonaksh Nandan</span>
            <span>|</span>
            <a href="https://sonakshnandan.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              sonakshnandan.com
            </a>
            <span>|</span>
            <a href="tel:+917601020093" className="hover:text-primary">
              +91 76010 20093
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
