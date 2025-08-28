import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "john.doe@example.com",
      href: "mailto:john.doe@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="glass-card p-8 border-0">
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    type="text" 
                    placeholder="Your name"
                    className="bg-background/50 border-border/50"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com"
                    className="bg-background/50 border-border/50"
                    required 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input 
                  type="text" 
                  placeholder="Project discussion"
                  className="bg-background/50 border-border/50"
                  required 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="bg-background/50 border-border/50 resize-none"
                  required 
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you have a question about my work, want to discuss a potential 
                project, or just want to say hello, I'm always open to connecting with 
                fellow creators and innovators.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.href}
                  className="flex items-center p-4 glass-card rounded-lg hover:scale-105 transition-transform duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    <div className="font-medium">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <Card className="glass-card p-6 border-0">
              <h4 className="font-semibold mb-3">Response Time</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I typically respond to messages within 24 hours. For urgent inquiries, 
                feel free to reach out via phone or connect with me on LinkedIn.
              </p>
            </Card>

            <Card className="glass-card p-6 border-0">
              <h4 className="font-semibold mb-3">Availability</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Currently available for freelance projects and full-time opportunities. 
                Open to both remote work and local collaborations in the San Francisco Bay Area.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;