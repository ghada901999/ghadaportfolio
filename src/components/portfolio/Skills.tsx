import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React Native", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Java", level: 80 },
        { name: "Python", level: 85 }
      ]
    },
    {
      title: "Backend & Frameworks",
      skills: [
        { name: "ASP.NET API", level: 80 },
        { name: "MVC", level: 80 },
        { name: "C#", level: 85 },
        { name: "Game Development", level: 80 },
        { name: "Database Management", level: 75 }
      ]
    },
    {
      title: "Design & Tools",
      skills: [
        { name: "Figma", level: 90 },
        { name: "Adobe XD", level: 85 },
        { name: "Visual Studio", level: 85 },
        { name: "WordPress", level: 80 },
        { name: "UI/UX Design", level: 88 }
      ]
    }
  ];

  const certifications = [
    {
      title: "Bachelor of Software Engineering",
      issuer: "Jordan University of Science & Technology",
      year: "2024"
    },
    {
      title: "React Native Development",
      issuer: "Jo Vision Internship",
      year: "2024"
    },
    {
      title: "UI/UX Design",
      issuer: "The Hope International",
      year: "2023"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life and solve complex problems.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card p-6 border-0">
              <h3 className="text-xl font-semibold mb-6 text-center gradient-text">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted/30"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold gradient-text mb-8">
            Certifications & Learning
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="glass-card p-6 border-0 text-center">
                <h4 className="font-semibold mb-2">{cert.title}</h4>
                <p className="text-muted-foreground text-sm mb-1">{cert.issuer}</p>
                <p className="text-primary text-sm">{cert.year}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Card className="glass-card p-8 border-0 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold gradient-text mb-4">
              Continuous Growth
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              As a recent graduate, I'm eager to continue learning and growing in the tech industry. 
              My experience in leadership, teamwork, and time management, combined with my technical 
              skills, positions me well for contributing to innovative projects and forward-thinking 
              organizations.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;