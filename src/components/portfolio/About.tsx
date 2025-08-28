import { Card } from "@/components/ui/card";
import { Code, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Experienced in React Native, HTML, CSS, JavaScript, and modern web frameworks."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating wireframes and prototypes using Figma and Adobe XD for intuitive user experiences."
    },
    {
      icon: Rocket,
      title: "Full-Stack Skills",
      description: "Proficient in ASP.NET API, MVC, Python, Java, and database management."
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Team leadership experience with strong collaboration and mentoring skills."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6 animate-fade-in">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-body animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Hi! I'm Ghada, a passionate software engineer who loves turning creative ideas into 
            beautiful digital experiences. With a fresh perspective from my recent graduation and hands-on 
            experience through multiple internships, I bring both technical expertise and creative flair to every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-serif font-semibold text-primary">My Creative Journey</h3>
            <p className="text-muted-foreground leading-relaxed font-body">
              As a recent graduate from Jordan University of Science & Technology with a 
              Bachelor's in Software Engineering, I've discovered my passion lies at the intersection 
              of technology and creativity. Through diverse internships in React Native development, 
              UI/UX design, and graphic design, I've cultivated a unique blend of technical precision 
              and artistic vision.
            </p>
            <p className="text-muted-foreground leading-relaxed font-body">
              What drives me is the challenge of transforming complex problems into elegant, 
              user-friendly solutions. From building multiplayer games in C# to crafting 
              intuitive interfaces in Figma and Adobe XD, I approach every project with 
              curiosity, creativity, and a commitment to excellence. I thrive in collaborative 
              environments and have a natural inclination for leadership and mentorship.
            </p>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="glass-card p-8 rounded-2xl shadow-warm hover:shadow-card-hover transition-all duration-500 group">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="group-hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-serif font-bold gradient-text">2024</div>
                  <div className="text-muted-foreground font-body">Graduate</div>
                </div>
                <div className="group-hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-serif font-bold gradient-text">4+</div>
                  <div className="text-muted-foreground font-body">Internships</div>
                </div>
                <div className="group-hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-serif font-bold gradient-text">15+</div>
                  <div className="text-muted-foreground font-body">Projects</div>
                </div>
                <div className="group-hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-serif font-bold gradient-text">∞</div>
                  <div className="text-muted-foreground font-body">Creativity</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-card p-6 text-center border-0 hover:shadow-card-hover transition-all duration-500 group animate-fade-in"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-serif font-semibold mb-2 text-primary">{feature.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;