import { Button } from "@/components/ui/button";
import { Calendar, Clock, Award, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-showroom.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Al Asad Curtains Elegant Showroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Award size={20} className="text-luxury" />
            <span className="text-accent-foreground font-medium">Established 1999 • 25+ Years of Excellence</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Premium Curtains & Blinds in 
            <span className="block luxury-text">Abu Dhabi</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Transform your space with our expert craftsmanship. Same-day consultation, 
            48-hour installation, and unlimited customization for homes and offices.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2 bg-background/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Calendar className="text-luxury" size={20} />
              <span className="text-primary-foreground font-medium">Same-Day Appointments</span>
            </div>
            <div className="flex items-center gap-2 bg-background/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Clock className="text-luxury" size={20} />
              <span className="text-primary-foreground font-medium">48-Hour Installation</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="luxury" 
              size="lg" 
              className="text-lg px-8 py-4"
              asChild
            >
              <a href="#contact">Book Free Consultation</a>
            </Button>
            <Button 
              variant="elegant" 
              size="lg" 
              className="text-lg px-8 py-4"
              asChild
            >
              <a href="https://wa.me/971505822836" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} />
                WhatsApp Us Now
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-primary-foreground/80">
            <p className="text-sm">
              📍 Khalidiya, Abu Dhabi | 📞 +971 2 665 9769 | 📱 +971 50 582 2836
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
