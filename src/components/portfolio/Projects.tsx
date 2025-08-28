import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Multiplayer Shooting Game",
      description: "Designed and built a multiplayer shooting game using C# showcasing game logic, UI design, and real-time gameplay mechanics developed as part of academic coursework.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
      tech: ["C#", "Game Development", "UI Design", "Multiplayer"],
      demo: "#",
      code: "https://github.com/ghada991999"
    },
    {
      title: "Python 2D Game",
      description: "Created an interactive 2D game using Pygame, demonstrating Python programming expertise and game development principles with engaging gameplay mechanics.",
      image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=600&h=400&fit=crop",
      tech: ["Python", "Pygame", "2D Graphics", "Game Logic"],
      demo: "#",
      code: "https://github.com/ghada991999"
    },
    {
      title: "HCI Toy Game Interface",
      description: "Developed a toy game interface using Adobe XD, emphasizing UX design principles and human-computer interaction with intuitive user-friendly designs.",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&h=400&fit=crop",
      tech: ["Adobe XD", "UX Design", "HCI", "Interface Design"],
      demo: "#",
      code: "#"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic projects showcasing my skills in software engineering, game development, and UI/UX design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass-card border-0 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;