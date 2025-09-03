import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download, Palette } from "lucide-react";
import Logo from "./Logo";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Navigation with professional backdrop */}
      <nav className="w-full px-6 py-6 relative z-20 backdrop-blur-md bg-background/80 border-b border-primary/10">
        <div className="container mx-auto flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link text-foreground hover:text-primary transition-colors font-medium">About</a>
            <a href="#experience" className="nav-link text-foreground hover:text-primary transition-colors font-medium">Experience</a>
            <a href="#projects" className="nav-link text-foreground hover:text-primary transition-colors font-medium">Projects</a>
            <a href="#skills" className="nav-link text-foreground hover:text-primary transition-colors font-medium">Skills</a>
            <a href="#contact" className="nav-link text-foreground hover:text-primary transition-colors font-medium">Contact</a>
            <a 
              href="https://www.behance.net/suga2002" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                size="sm"
                className="border-primary/20 text-foreground hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 backdrop-blur-sm"
              >
                <Palette className="h-4 w-4 mr-2" />
                Behance
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Background effects with more animation */}
      <div className="absolute inset-0 bg-gradient-background"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-accent/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      {/* Animated particles */}
      <div className="absolute top-1/3 left-1/6 w-4 h-4 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-2/3 right-1/6 w-3 h-3 bg-secondary/40 rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-accent/50 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      
      <div className="flex-1 flex items-center justify-center px-6 relative z-10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden glass-card border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-500 animate-float">
                  <img 
                    src="/lovable-uploads/4d9d5d79-77f6-49c8-9e74-92a6cea16769.png" 
                    alt="Ghada Musallam - Software Engineer & UX/UI Designer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left space-y-8">
              {/* Main heading */}
              <div className="space-y-4 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-serif font-bold gradient-text animate-glow">
                  Ghada Musallam
                </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-body animate-slide-up" style={{ animationDelay: '0.3s' }}>
                  Creative Software Engineer & UX/UI Designer
                </h2>
              </div>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-body animate-fade-in" style={{ animationDelay: '0.6s' }}>
                Passionate about crafting beautiful, intuitive digital experiences through innovative design and clean code. 
                Specializing in creating impactful solutions that bridge creativity and technology.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
                <Button 
                  size="lg" 
                  onClick={scrollToProjects}
                  className="btn-primary bg-gradient-primary hover:opacity-90 transition-all duration-500 shadow-glow hover:shadow-card-hover font-serif font-medium hover:scale-105 transform relative overflow-hidden"
                >
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={scrollToContact}
                  className="border-primary/20 text-foreground hover:bg-primary/5 hover:border-primary/40 transition-all duration-500 font-serif font-medium hover:scale-105 transform backdrop-blur-sm"
                >
                  Work With Me
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6 pt-8 animate-fade-in" style={{ animationDelay: '1.2s' }}>
                <a 
                  href="https://github.com/ghada991999" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-card rounded-full hover:scale-110 hover:shadow-warm transition-all duration-300 group hover:rotate-12 transform"
                >
                  <Github className="h-6 w-6 group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ghada-msallam-33a079262/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-card rounded-full hover:scale-110 hover:shadow-warm transition-all duration-300 group hover:rotate-12 transform"
                >
                  <Linkedin className="h-6 w-6 group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="mailto:ghadamsallam17@gmail.com" 
                  className="p-3 glass-card rounded-full hover:scale-110 hover:shadow-warm transition-all duration-300 group hover:rotate-12 transform"
                >
                  <Mail className="h-6 w-6 group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <button 
          onClick={scrollToProjects}
          className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300 group hover:scale-110 transform"
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors animate-pulse" />
        </button>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-primary opacity-30 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;