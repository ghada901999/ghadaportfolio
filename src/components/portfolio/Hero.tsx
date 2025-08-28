import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
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
      {/* Navigation */}
      <nav className="w-full px-6 py-4 relative z-20">
        <div className="container mx-auto flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-body">About</a>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors font-body">Projects</a>
            <a href="#skills" className="text-foreground hover:text-primary transition-colors font-body">Skills</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-body">Contact</a>
            <Button 
              variant="outline" 
              size="sm"
              className="border-primary/30 text-foreground hover:bg-primary/10"
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-background"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-accent/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="flex-1 flex items-center justify-center px-6 relative z-10">
        <div className="container mx-auto">
          <div className="text-center space-y-8">
            {/* Main heading */}
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-serif font-bold gradient-text animate-glow">
                Ghada Musallam
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-body">
                Creative Software Engineer & Frontend Developer
              </h2>
            </div>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-body animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Passionate about crafting beautiful, intuitive digital experiences through innovative design and clean code. 
              Specializing in creating impactful solutions that bridge creativity and technology.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button 
                size="lg" 
                onClick={scrollToProjects}
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-glow hover:shadow-card-hover font-serif font-medium"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToContact}
                className="border-primary/30 text-foreground hover:bg-primary/10 transition-all duration-300 font-serif font-medium"
              >
                Work With Me
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <a 
                href="https://github.com/ghada991999" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full hover:scale-110 hover:shadow-warm transition-all duration-300 group"
              >
                <Github className="h-6 w-6 group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://linkedin.com/in/ghada-zaid-33a079262/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full hover:scale-110 hover:shadow-warm transition-all duration-300 group"
              >
                <Linkedin className="h-6 w-6 group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="mailto:ghadamsallam17@gmail.com" 
                className="p-3 glass-card rounded-full hover:scale-110 hover:shadow-warm transition-all duration-300 group"
              >
                <Mail className="h-6 w-6 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <button 
          onClick={scrollToProjects}
          className="p-2 rounded-full hover:bg-primary/10 transition-colors group"
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
        </button>
      </div>
    </section>
  );
};

export default Hero;