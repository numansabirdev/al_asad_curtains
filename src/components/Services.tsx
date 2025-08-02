import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Home, 
  Building2, 
  Palette, 
  Sofa, 
  TreePine,
  Layers,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Curtains & Blinds",
      description: "Custom curtains, roller blinds, vertical blinds, and blackout solutions for every space.",
      features: ["Blackout Curtains", "Roller Blinds", "Vertical Blinds", "Custom Fabrics"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Wallpaper Installation",
      description: "Professional wallpaper installation with premium materials and flawless finishing.",
      features: ["Designer Wallpapers", "Textured Options", "Professional Install", "Pattern Matching"]
    },
    {
      icon: <Sofa className="w-8 h-8" />,
      title: "Upholstery Work",
      description: "Expert furniture upholstery and reupholstery services for homes and offices.",
      features: ["Furniture Repair", "Custom Covers", "Fabric Selection", "Professional Finish"]
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Wooden Parquet",
      description: "Premium wooden flooring installation with quality materials and expert craftsmanship.",
      features: ["Solid Wood", "Engineered Wood", "Installation", "Maintenance"]
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "SPC Flooring",
      description: "Durable SPC parquet flooring solutions perfect for modern spaces.",
      features: ["Water Resistant", "Easy Maintenance", "Modern Designs", "Quick Install"]
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Carpets",
      description: "Wide selection of carpets for residential and commercial spaces.",
      features: ["Persian Carpets", "Modern Designs", "Commercial Grade", "Custom Sizes"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-elegant-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From elegant curtains to premium flooring, we provide comprehensive interior solutions 
            for homes and commercial spaces throughout Abu Dhabi.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="elegant-hover bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="w-16 h-16 luxury-gradient rounded-lg flex items-center justify-center mb-4 text-luxury-foreground">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-luxury rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="elegant-hover bg-card/80 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground">
                <Home className="w-6 h-6 text-luxury" />
                Residential Services
              </CardTitle>
              <CardDescription>
                Transform your home with our premium interior solutions designed for comfort and elegance.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="elegant-hover bg-card/80 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground">
                <Building2 className="w-6 h-6 text-luxury" />
                Commercial Services
              </CardTitle>
              <CardDescription>
                Professional interior solutions for offices, hotels, and commercial spaces across Abu Dhabi.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="luxury" size="lg" className="text-lg px-8 py-4" asChild>
            <a href="#contact">
              Get Your Free Quote
              <ArrowRight size={20} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;