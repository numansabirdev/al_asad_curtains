import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold luxury-text">Al Asad Curtains</h1>
            <p className="text-xs text-muted-foreground">Since 1998</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-luxury smooth-transition font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Contact Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+97126659769">
              <Button variant="elegant" size="sm">
                <Phone size={16} />
                Call Now
              </Button>
            </a>
            <a 
              href="https://wa.me/971505822836" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="luxury" size="sm">
                <MessageCircle size={16} />
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-foreground hover:text-luxury smooth-transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col space-y-2 px-3 pt-2">
              <a href="tel:+97126659769">
                <Button variant="elegant" size="sm" className="w-full">
                  <Phone size={16} />
                  Call Now
                </Button>
              </a>
              <a 
                href="https://wa.me/971505822836" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="luxury" size="sm" className="w-full">
                  <MessageCircle size={16} />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;