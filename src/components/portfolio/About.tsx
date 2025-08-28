import { Card } from "@/components/ui/card";
import { Code, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices and modern standards."
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful, intuitive interfaces that users love to interact with."
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and user experience."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams to deliver projects on time and within scope."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with 5+ years of experience creating 
            digital solutions that make a difference. I love turning complex problems 
            into simple, beautiful, and intuitive solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Started as a self-taught developer, I've worked with startups and 
              established companies, building everything from simple websites to 
              complex web applications. My approach combines technical expertise 
              with creative problem-solving.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open source projects, or sharing knowledge with 
              the developer community.
            </p>
          </div>
          
          <div className="relative">
            <div className="glass-card p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold gradient-text">50+</div>
                  <div className="text-muted-foreground">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">5+</div>
                  <div className="text-muted-foreground">Years Exp</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">20+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">100%</div>
                  <div className="text-muted-foreground">Dedication</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-card p-6 text-center border-0"
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
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