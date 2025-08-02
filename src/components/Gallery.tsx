import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Eye } from "lucide-react";

const Gallery = () => {
  // Placeholder gallery items - in a real implementation, these would come from a CMS or API
  const galleryItems = [
    {
      id: 1,
      title: "Luxury Living Room Curtains",
      category: "Curtains",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&q=80",
      description: "Elegant ivory curtains with gold accents"
    },
    {
      id: 2,
      title: "Modern Office Blinds",
      category: "Blinds",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=800&q=80",
      description: "Sleek vertical blinds for commercial spaces"
    },
    {
      id: 3,
      title: "Premium Wooden Flooring",
      category: "Flooring",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80",
      description: "Rich wooden parquet installation"
    },
    {
      id: 4,
      title: "Designer Wallpaper Installation",
      category: "Wallpaper",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&q=80",
      description: "Textured wallpaper with elegant patterns"
    },
    {
      id: 5,
      title: "Custom Blackout Curtains",
      category: "Curtains",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      description: "Perfect light control for bedrooms"
    },
    {
      id: 6,
      title: "Commercial Space Transformation",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80",
      description: "Complete office interior makeover"
    }
  ];

  const categories = ["All", "Curtains", "Blinds", "Flooring", "Wallpaper", "Commercial"];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Work Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of completed projects showcasing premium curtains, blinds, 
            flooring, and interior solutions across Abu Dhabi.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "luxury" : "elegant"}
              size="sm"
              className="text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {galleryItems.map((item) => (
            <Card key={item.id} className="group elegant-hover overflow-hidden bg-card/80 backdrop-blur-sm border-border/50">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 smooth-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 smooth-transition"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 smooth-transition">
                  <Button variant="hero" size="sm">
                    <Eye size={16} />
                    View Details
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-accent/90 backdrop-blur-sm">
                    {item.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-foreground text-center mb-8">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Ahmed",
                location: "Khalidiya, Abu Dhabi",
                rating: 5,
                comment: "Exceptional service! They installed beautiful curtains in just 48 hours as promised. The quality is outstanding and the team was very professional.",
                service: "Curtains & Blinds"
              },
              {
                name: "Mohamed Al Rashid",
                location: "Marina, Abu Dhabi",
                rating: 5,
                comment: "Al Asad Curtains transformed our office space completely. The wooden flooring and blinds look amazing. Highly recommend their commercial services!",
                service: "Commercial Flooring"
              },
              {
                name: "Fatima Hassan",
                location: "Corniche, Abu Dhabi",
                rating: 5,
                comment: "25 years of experience really shows! Same-day consultation and perfect installation. Our home looks luxurious now with their custom curtains.",
                service: "Custom Curtains"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="elegant-hover bg-card/80 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-luxury rounded-full"></div>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.comment}"</p>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {testimonial.service}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="luxury-gradient p-8 curtain-shadow">
            <CardContent className="p-0">
              <h3 className="text-2xl md:text-3xl font-bold text-luxury-foreground mb-4">
                Ready to Transform Your Space?
              </h3>
              <p className="text-lg text-luxury-foreground/90 mb-6">
                Join thousands of satisfied customers who chose Al Asad Curtains for their interior needs.
              </p>
              <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
                <a href="#contact">
                  Start Your Project
                  <ArrowRight size={20} />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Gallery;