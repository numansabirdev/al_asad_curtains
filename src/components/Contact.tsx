import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram,
  Facebook,
  Send
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Numbers",
      details: [
        { label: "Landline", value: "+971 2 665 9769" },
        { label: "WhatsApp", value: "+971 50 582 2836" },
        { label: "Mobile", value: "+971 55 788 4782" }
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: [
        { label: "General Inquiries", value: "alasad.curtain11@gmail.com" }
      ]
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: [
        { label: "Address", value: "Khalidiya, Abu Dhabi, UAE" }
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: [
        { label: "Saturday - Thursday", value: "9:00 AM - 9:00 PM" },
        { label: "Friday", value: "2:00 PM - 9:00 PM" }
      ]
    }
  ];

  const socialLinks = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      name: "WhatsApp",
      url: "https://wa.me/971505822836",
      color: "text-green-600"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "@alasad-curtains",
      url: "https://instagram.com/alasad-curtains",
      color: "text-pink-600"
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      name: "Al Asad curtains",
      url: "https://facebook.com/alasadcurtains",
      color: "text-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-elegant-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your space? Contact us for a free consultation and experience 
            our express service with same-day appointments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <Card className="bg-card/80 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Request Your Free Consultation
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours to schedule your appointment.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input placeholder="Your first name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input placeholder="Your last name" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Phone Number
                </label>
                <Input placeholder="+971 XX XXX XXXX" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email Address
                </label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Service Interested In
                </label>
                <Input placeholder="e.g., Curtains, Blinds, Flooring" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your project, preferred appointment time, or any specific requirements..."
                  rows={4}
                />
              </div>
              
              <Button variant="luxury" size="lg" className="w-full text-lg py-3">
                <Send size={20} />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            
            {/* Contact Details */}
            {contactInfo.map((info, index) => (
              <Card key={index} className="elegant-hover bg-card/80 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 text-accent-foreground">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="mb-1">
                          <span className="text-sm text-muted-foreground">{detail.label}: </span>
                          <span className="text-sm text-foreground font-medium">{detail.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Social Media */}
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-accent smooth-transition"
                    >
                      <div className={`${social.color}`}>
                        {social.icon}
                      </div>
                      <span className="text-foreground font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Google Map */}
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Visit Our Showroom</h3>
                <p className="text-muted-foreground mb-4">
                  Experience our premium collection firsthand at our Khalidiya showroom.
                </p>
                <Button variant="elegant" className="w-full" asChild>
                  <a 
                    href="https://maps.app.goo.gl/JcKbGNHrB2umvzdMA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MapPin size={16} />
                    Get Directions
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Express Service CTA */}
        <div className="mt-16">
          <Card className="luxury-gradient text-center p-8 curtain-shadow">
            <CardContent className="p-0">
              <h3 className="text-2xl md:text-3xl font-bold text-luxury-foreground mb-4">
                Need Immediate Assistance?
              </h3>
              <p className="text-lg text-luxury-foreground/90 mb-6">
                Call us now for same-day appointments or instant support via WhatsApp
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
                  <a href="tel:+97126659769">
                    <Phone size={20} />
                    Call +971 2 665 9769
                  </a>
                </Button>
                <Button variant="elegant" size="lg" className="text-lg px-8 py-4" asChild>
                  <a href="https://wa.me/971505822836" target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={20} />
                    WhatsApp Now
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
