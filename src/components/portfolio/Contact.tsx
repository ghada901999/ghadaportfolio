import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download, MessageCircle, Coffee } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6 animate-fade-in">
            Let's Create Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Ready to transform your vision into reality? I'm excited to discuss your project and explore 
            how we can create something amazing together. Let's start the conversation!
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-glow font-serif font-medium"
              onClick={() => window.open('mailto:ghadamsallam17@gmail.com', '_blank')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Hire Me
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-secondary/30 text-foreground hover:bg-secondary/10 font-serif font-medium"
              onClick={() => window.open('https://www.linkedin.com/in/ghada-msallam-33a079262/', '_blank')}
            >
              <Coffee className="mr-2 h-5 w-5" />
              Let's Chat
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <Card className="glass-card p-6 border-0 hover:shadow-card-hover transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl font-serif font-semibold mb-6 gradient-text">
              Let's Connect
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body">Email</p>
                  <p className="font-serif font-medium">ghadamsallam17@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body">Phone</p>
                  <p className="font-serif font-medium">+962 79 999 1999</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body">Location</p>
                  <p className="font-serif font-medium">Amman, Jordan</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body">Availability</p>
                  <p className="font-serif font-medium text-primary">Open to opportunities</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-border/50 mt-6">
              <h4 className="font-serif font-semibold mb-4 text-primary">Connect With Me</h4>
              <div className="flex space-x-3">
                <a 
                  href="https://github.com/ghada991999" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:scale-110 hover:shadow-warm transition-all duration-300 group"
                >
                  <Github className="h-5 w-5 group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ghada-msallam-33a079262/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:scale-110 hover:shadow-warm transition-all duration-300 group"
                >
                  <Linkedin className="h-5 w-5 group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="mailto:ghadamsallam17@gmail.com" 
                  className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:scale-110 hover:shadow-warm transition-all duration-300 group"
                >
                  <Mail className="h-5 w-5 group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </Card>

          {/* Contact Form */}
          <Card className="glass-card p-6 border-0 lg:col-span-2 hover:shadow-card-hover transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-xl font-serif font-semibold mb-6 gradient-text">
              Start a Project
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/50 border-primary/20 focus:border-primary font-body"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50 border-primary/20 focus:border-primary font-body"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Input
                  type="text"
                  placeholder="Project Type (Web App, Design, etc.)"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-background/50 border-primary/20 focus:border-primary font-body"
                  required
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Tell me about your project, goals, and timeline... *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/50 border-primary/20 focus:border-primary min-h-[120px] font-body"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-glow font-serif font-medium"
                disabled={isSubmitting}
              >
                <Send className="mr-2 h-4 w-4" />
                {isSubmitting ? 'Sending Message...' : 'Let\'s Start Creating'}
              </Button>

              <p className="text-xs text-muted-foreground text-center font-body mt-2">
                I typically respond within 24 hours. Looking forward to collaborating with you!
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;