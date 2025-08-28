import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "TailwindCSS", level: 95 },
        { name: "Three.js", level: 75 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "GraphQL", level: 80 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Figma", level: 85 },
        { name: "Testing", level: 80 }
      ]
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2023"
    },
    {
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      year: "2022"
    },
    {
      title: "React Advanced Patterns",
      issuer: "Frontend Masters",
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
              Always Learning
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Technology evolves rapidly, and I'm committed to staying current with the latest trends, 
              frameworks, and best practices. I regularly participate in online courses, attend tech 
              conferences, and contribute to open-source projects to keep my skills sharp and expand 
              my knowledge base.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;