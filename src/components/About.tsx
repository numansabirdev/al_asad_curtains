import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  Users, 
  Clock, 
  Award, 
  Palette, 
  Wrench,
  ArrowRight
} from "lucide-react";
import luxuryCurtainsImage from "@/assets/luxury-curtains.jpg";
import installationImage from "@/assets/installation-service.jpg";

const About = () => {
  const achievements = [
    {
      icon: <Calendar className="w-8 h-8" />,
      value: "25+",
      label: "Years Experience",
      description: "Established in 1999"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "5000+",
      label: "Happy Clients",
      description: "Residential & Commercial"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: "48hrs",
      label: "Installation Time",
      description: "Express Service"
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "100%",
      label: "Satisfaction",
      description: "Quality Guaranteed"
    }
  ];

  const values = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Craftsmanship Excellence",
      description: "Every project reflects our commitment to quality and attention to detail."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Express Service",
      description: "Same-day appointments and 48-hour installation for your convenience."
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Custom Solutions",
      description: "Tailored designs that perfectly match your space and preferences."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Al Asad Curtains?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Since 1999, we've been Abu Dhabi's trusted partner for premium curtains, blinds, and interior solutions.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="elegant-hover text-center bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="w-16 h-16 luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-luxury-foreground">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-luxury mb-2">
                  {achievement.value}
                </div>
                <div className="font-semibold text-foreground mb-1">
                  {achievement.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Story Content */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Our Story & Heritage
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 1999 in the heart of Khalidiya, Abu Dhabi, Al Asad Curtains began as a family business 
                with a simple mission: to transform spaces with premium quality curtains and blinds.
              </p>
              <p>
                Over 25 years, we've evolved into Abu Dhabi's leading interior solutions provider, serving thousands 
                of satisfied customers across residential and commercial projects. Our commitment to craftsmanship, 
                express service, and customer satisfaction has made us the preferred choice for discerning clients.
              </p>
              <p>
                Today, we continue to honor our heritage while embracing modern techniques and materials, ensuring 
                every project meets our exacting standards of quality and elegance.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 text-accent-foreground">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-lg curtain-shadow">
              <img
                src={luxuryCurtainsImage}
                alt="Luxury curtains in elegant living room"
                className="w-full h-64 object-cover elegant-hover"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg curtain-shadow">
              <img
                src={installationImage}
                alt="Professional curtain installation service"
                className="w-full h-64 object-cover elegant-hover"
              />
            </div>
          </div>
        </div>

        {/* Express Service Highlight */}
        <Card className="luxury-gradient text-center p-8 curtain-shadow">
          <CardContent className="p-0">
            <h3 className="text-2xl md:text-3xl font-bold text-luxury-foreground mb-4">
              Express Service Promise
            </h3>
            <p className="text-lg text-luxury-foreground/90 mb-6 max-w-2xl mx-auto">
              Experience the Al Asad advantage: Same-day appointments, 48-hour installation, 
              and unlimited customization options for your perfect space.
            </p>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
              <a href="#contact">
                Schedule Your Consultation
                <ArrowRight size={20} />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
