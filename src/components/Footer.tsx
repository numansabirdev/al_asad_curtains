import { Button } from "@/components/ui/button";
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Instagram,
  Facebook,
  Clock,
  Award
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Curtains & Blinds",
    "Wallpaper Installation", 
    "Upholstery Work",
    "Wooden Parquet",
    "SPC Flooring",
    "Carpets"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold luxury-text mb-2">Al Asad Curtains</h3>
              <div className="flex items-center gap-2 text-primary-foreground/80 mb-4">
                <Award size={16} />
                <span className="text-sm">Established 1999</span>
              </div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Premium curtains, blinds, and interior solutions in Abu Dhabi. 
                25+ years of excellence with same-day appointments and 48-hour installation.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10" asChild>
                <a href="https://wa.me/971505822836" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={20} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10" asChild>
                <a href="https://instagram.com/alasad-curtains" target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10" asChild>
                <a href="https://facebook.com/alasadcurtains" target="_blank" rel="noopener noreferrer">
                  <Facebook size={20} />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-luxury mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-luxury smooth-transition text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-luxury mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-luxury mb-4">Contact Us</h4>
            <div className="space-y-3">
              
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-luxury mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <div className="text-primary-foreground/80">Landline:</div>
                  <a href="tel:+97126659769" className="text-primary-foreground hover:text-luxury smooth-transition">
                    +971 2 665 9769
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle size={16} className="text-luxury mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <div className="text-primary-foreground/80">WhatsApp:</div>
                  <a href="https://wa.me/971505822836" className="text-primary-foreground hover:text-luxury smooth-transition">
                    +971 50 582 2836
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={16} className="text-luxury mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <div className="text-primary-foreground/80">Email:</div>
                  <a href="mailto:alasad.curtain11@gmail.com" className="text-primary-foreground hover:text-luxury smooth-transition">
                    alasad.curtain11@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-luxury mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <div className="text-primary-foreground/80">Location:</div>
                  <span className="text-primary-foreground">Khalidiya, Abu Dhabi</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={16} className="text-luxury mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <div className="text-primary-foreground/80">Hours:</div>
                  <div className="text-primary-foreground">
                    <div>Sat-Thu: 9AM-9PM</div>
                    <div>Fri: 2PM-9PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Express Service Banner */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-luxury mb-2">
              🏃‍♂️ Express Service Available
            </h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Same-day appointments • 48-hour installation • Custom solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" className="border-luxury text-luxury hover:bg-luxury hover:text-luxury-foreground" asChild>
                <a href="tel:+97126659769">
                  Call for Immediate Service
                </a>
              </Button>
              <Button variant="outline" className="border-luxury text-luxury hover:bg-luxury hover:text-luxury-foreground" asChild>
                <a href="https://wa.me/971505822836" target="_blank" rel="noopener noreferrer">
                  WhatsApp Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © 2024 Al Asad Curtains. All rights reserved. Serving Abu Dhabi since 1999.
            </p>
            <div className="flex items-center gap-4 text-primary-foreground/60 text-sm">
              <span>Made with ❤️ for premium interiors</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
