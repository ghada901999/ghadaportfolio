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
        { name: "ASP.NET API", level: 40 },
        { name: "MVC", level: 45 },
        { name: "C#", level: 34 },
        { name: "Game Development", level: 25 },
        { name: "Database Management", level: 56 }
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
    <section id="skills" className="py-20 px-6 bg-background-secondary/40">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6 animate-fade-in">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body animate-fade-in" style={{ animationDelay: '0.2s' }}>
            A comprehensive toolkit of technologies, creative tools, and methodologies I leverage to transform ideas into impactful digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="glass-card p-6 border-0 hover:shadow-card-hover transition-all duration-500 group animate-fade-in"
              style={{ animationDelay: `${0.4 + index * 0.2}s` }}
            >
              <h3 className="text-xl font-serif font-semibold mb-6 text-center gradient-text group-hover:scale-105 transition-transform duration-300">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-body font-medium">{skill.name}</span>
                      <span className="text-muted-foreground font-body">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted/30 [&>div]:bg-gradient-primary"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-serif font-semibold gradient-text mb-8 animate-fade-in" style={{ animationDelay: '1s' }}>
            Education & Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="glass-card p-6 border-0 text-center hover:shadow-warm transition-all duration-500 group animate-fade-in"
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                <h4 className="font-serif font-semibold mb-2 text-primary group-hover:text-primary-light transition-colors">{cert.title}</h4>
                <p className="text-muted-foreground text-sm mb-1 font-body">{cert.issuer}</p>
                <p className="text-secondary text-sm font-body font-medium">{cert.year}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Card className="glass-card p-8 border-0 max-w-3xl mx-auto hover:shadow-card-hover transition-all duration-500 animate-fade-in" style={{ animationDelay: '1.5s' }}>
            <h3 className="text-2xl font-serif font-semibold gradient-text mb-4">
              Philosophy & Growth Mindset
            </h3>
            <p className="text-muted-foreground leading-relaxed font-body">
              I believe that the best solutions emerge from the intersection of technical excellence and creative thinking. 
              As a lifelong learner, I'm constantly exploring new technologies, design trends, and methodologies. 
              My collaborative approach, combined with strong leadership and problem-solving skills, allows me to contribute 
              meaningfully to innovative projects while fostering positive team dynamics.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;