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
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate software engineer and recent graduate with experience in 
            frontend development, UI/UX design, and full-stack development. I specialize 
            in creating innovative digital solutions that drive impactful results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Fresh graduate from Jordan University of Science & Technology with a 
              Bachelor's in Software Engineering. I've gained valuable experience 
              through internships in React Native development, UI/UX design, and 
              graphic design, building both technical and creative skills.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My experience spans from developing multiplayer games in C# to creating 
              intuitive user interfaces with Figma and Adobe XD. I'm passionate about 
              leadership and teamwork, having led academic teams and mentored peers.
            </p>
          </div>
          
          <div className="relative">
            <div className="glass-card p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold gradient-text">2024</div>
                  <div className="text-muted-foreground">Graduate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">4+</div>
                  <div className="text-muted-foreground">Internships</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">2</div>
                  <div className="text-muted-foreground">Languages</div>
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