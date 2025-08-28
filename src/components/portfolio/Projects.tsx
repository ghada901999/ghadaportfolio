import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Lightbulb, Wrench } from "lucide-react";
import ProjectLightbox from "./ProjectLightbox";

const Projects = () => {
  const projects = [
    {
      title: "Multiplayer Shooting Game",
      description: "A competitive multiplayer shooting game featuring real-time gameplay mechanics and strategic elements.",
      fullDescription: "Designed and built a comprehensive multiplayer shooting game using C# as part of my academic coursework. This project showcases advanced game logic implementation, intuitive UI design, and real-time networking capabilities that support multiple players simultaneously.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1556438064-2d7646166914?w=600&h=400&fit=crop"
      ],
      tech: ["C#", "Unity", "Multiplayer Networking", "UI Design", "Game Logic"],
      challenges: "The main challenge was implementing real-time multiplayer synchronization while maintaining smooth gameplay performance. I had to optimize network communication and handle latency issues effectively.",
      techniques: "Utilized Unity's networking system with custom interpolation algorithms, implemented object pooling for performance optimization, and created a modular UI system for scalability.",
      demo: "#",
      code: "https://github.com/ghada991999"
    },
    {
      title: "Python 2D Game",
      description: "An engaging 2D adventure game built with Pygame featuring dynamic gameplay mechanics.",
      fullDescription: "Created an interactive 2D game using Pygame that demonstrates comprehensive Python programming skills and game development principles. The game features engaging mechanics, smooth animations, and an intuitive control system designed for optimal player experience.",
      image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1556438064-2d7646166914?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&h=400&fit=crop"
      ],
      tech: ["Python", "Pygame", "2D Graphics", "Animation", "Sound Design"],
      challenges: "Implementing smooth sprite animations and collision detection while maintaining 60fps gameplay. Also had to create an efficient level loading system for multiple game stages.",
      techniques: "Developed a custom sprite animation system, implemented quadtree spatial partitioning for collision optimization, and created a data-driven level design system using JSON configuration files.",
      demo: "#",
      code: "https://github.com/ghada991999"
    },
    {
      title: "HCI Toy Game Interface",
      description: "A user-centered interface design for an educational toy game emphasizing accessibility and engagement.",
      fullDescription: "Developed a comprehensive toy game interface using Adobe XD, focusing on human-computer interaction principles and user experience design. This project emphasizes creating intuitive, accessible, and engaging interfaces for young users while maintaining educational value.",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop"
      ],
      tech: ["Adobe XD", "UX Research", "Prototyping", "User Testing", "Accessibility Design"],
      challenges: "Balancing engaging visual design with accessibility requirements for diverse age groups. Needed to ensure the interface was intuitive for children while providing adequate feedback for parents and educators.",
      techniques: "Conducted user research with target demographics, implemented color-blind friendly palettes, used large touch targets for mobile accessibility, and created interactive prototypes for usability testing.",
      demo: "#",
      code: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-background-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6 animate-fade-in">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Explore my academic and personal projects that showcase innovation, technical expertise, and creative problem-solving in software engineering and design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectLightbox key={index} project={project}>
              <Card 
                className="glass-card border-0 overflow-hidden group cursor-pointer hover:shadow-card-hover transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${0.4 + index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Lightbulb className="h-8 w-8 mx-auto mb-2 animate-pulse" />
                      <p className="font-serif font-medium">Click to explore</p>
                    </div>
                  </div>
                  
                  {/* Project indicators */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-primary group-hover:text-primary-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed font-body">
                    {project.description}
                  </p>
                  
                  {/* Quick preview of challenges/techniques */}
                  <div className="flex items-center space-x-4 mb-4 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Wrench className="h-3 w-3 mr-1 text-accent" />
                      <span className="font-body">Technical</span>
                    </div>
                    <div className="flex items-center">
                      <Lightbulb className="h-3 w-3 mr-1 text-secondary" />
                      <span className="font-body">Creative</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-gradient-primary text-white rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 text-xs bg-muted/30 text-muted-foreground rounded-full font-medium">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            </ProjectLightbox>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;