import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Lightbulb, Wrench, Figma } from "lucide-react";
import ProjectLightbox from "./ProjectLightbox";

const Projects = () => {
  const designProjects = [
    {
      title: "Oakora – Brand Identity",
      category: "Design",
      description: "A furniture brand specializing in contemporary living solutions, featuring comprehensive brand identity, website design, and product showcasing with nature-inspired elements.",
      fullDescription: "A furniture brand specializing in contemporary living solutions, featuring comprehensive brand identity, website design, and product showcasing with nature-inspired elements.",
      image: "/lovable-uploads/2591ca4c-3d30-447c-8e09-59b42b7af761.png",
      images: [
        "/lovable-uploads/2591ca4c-3d30-447c-8e09-59b42b7af761.png",
        "/lovable-uploads/50e42d77-4501-4b4b-b62d-0c96ea49c7ea.png",
        "/lovable-uploads/cad79a4a-54fb-45a6-90aa-b4508485b990.png",
        "/lovable-uploads/ce40523a-855f-40bb-aeeb-e9f63344b125.png",
        "/lovable-uploads/e6f24201-0d50-48e9-86d6-8dcac2b6045d.png"
      ],
      tech: ["Adobe Illustrator", "Adobe Photoshop", "Web Design", "UI/UX"],
      challenges: "Creating a cohesive brand identity that works across digital platforms and reflects the contemporary furniture aesthetic.",
      techniques: "Developed nature-inspired logo variations, modern website interface, and consistent visual elements that emphasize clean design and sustainability.",
      demo: "https://www.behance.net/gallery/207992099/oakora",
      figma: "https://www.figma.com/design/lB1hrfWJeqjgdJnFeWNpey/Furniture?node-id=0-1&t=lA9Zcvj0BgKFdQ8Y-1",
      code: "#"
    },
    {
      title: "AuraGlow – Brand Identity",
      category: "Design",
      description: "A cosmetics brand identity specializing in blush products, featuring elegant packaging design, product compacts, and promotional materials with a warm, feminine color palette.",
      fullDescription: "A cosmetics brand identity specializing in blush products, featuring elegant packaging design, product compacts, and promotional materials with a warm, feminine color palette.",
      image: "/lovable-uploads/f6e60c11-23eb-42c0-bf36-b5ddc33c2f9d.png",
      images: [
        "/lovable-uploads/f6e60c11-23eb-42c0-bf36-b5ddc33c2f9d.png",
        "/lovable-uploads/a8293ace-695f-49ae-bab1-eeef2ebf3df9.png",
        "/lovable-uploads/e6177607-be38-4171-b3b8-ba42db4aa585.png",
        "/lovable-uploads/c6e0139c-f827-4c99-a9ec-1c871a2adc47.png",
        "/lovable-uploads/d2f52a27-0a4b-41b5-8ebf-6511f2adcd9f.png",
        "/lovable-uploads/4673df7f-3b12-4f8e-ac65-f662519a9e18.png"
      ],
      tech: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
      challenges: "Creating a cohesive brand identity for cosmetics that conveys quality and elegance while appealing to the target demographic.",
      techniques: "Developed a warm color palette, elegant typography, and consistent packaging design across all product lines and promotional materials.",
      demo: "https://www.behance.net/gallery/207842173/AuraGlow",
      code: "#"
    },
    {
      title: "StrideX – Footwear Brand Identity",
      category: "Design",
      description: "A contemporary footwear brand offering a diverse range of sneakers, including athletic, orthopedic, and fashion-forward designs, encompassing logo design, packaging, and promotional materials.",
      fullDescription: "A contemporary footwear brand offering a diverse range of sneakers, including athletic, orthopedic, and fashion-forward designs, encompassing logo design, packaging, and promotional materials.",
      image: "/lovable-uploads/7a86a6ae-70b6-4032-aa8c-d27e261c2833.png",
      images: [
        "/lovable-uploads/7a86a6ae-70b6-4032-aa8c-d27e261c2833.png",
        "/lovable-uploads/2856ab68-436f-44ea-9f46-e777d2a4f020.png",
        "/lovable-uploads/e4de3753-3c13-460a-ae61-67536848bdf3.png",
        "/lovable-uploads/b600f6e5-3c43-4afd-b670-06c0df9b2950.png",
        "/lovable-uploads/8252f2d6-f686-4594-9f2f-ee5e89a61d22.png",
        "/lovable-uploads/03f67193-3b1f-439b-9684-aa5c66c5ac26.png",
        "/lovable-uploads/56d91cb3-a353-4da6-b617-eb08ee02c8d4.png",
        "/lovable-uploads/5c1a0eb0-04df-4a28-8bb9-af4f2e142d6e.png",
        "/lovable-uploads/4b63a0eb-fdf9-4cdd-8946-9625a5b263d1.png"
      ],
      tech: ["Adobe Illustrator", "Photoshop", "After Effects"],
      challenges: "Designing a versatile brand identity that works across packaging and promotional visuals while staying modern and dynamic.",
      techniques: "Developed modular logo variations, mockups for sneakers, and motion graphics to showcase the brand digitally.",
      demo: "https://www.behance.net/gallery/208155957/StrideX",
      code: "#"
    },
    {
      title: "Mahali – Brand Identity",
      category: "Design",
      description: "An online marketplace platform for local Jordanian shops, featuring comprehensive e-commerce functionality, brand identity, and user-friendly interface design.",
      fullDescription: "An online marketplace platform for local Jordanian shops, featuring comprehensive e-commerce functionality, brand identity, and user-friendly interface design.",
      image: "/lovable-uploads/f4b5b3ba-3c86-493a-9f42-fcf2bc0fb8cb.png",
      images: [
        "/lovable-uploads/f4b5b3ba-3c86-493a-9f42-fcf2bc0fb8cb.png",
        "/lovable-uploads/1dbb980b-57ca-4d9b-b726-b8de3085162e.png",
        "/lovable-uploads/4c4bacf0-d481-4a29-b194-4d3b336d1587.png",
        "/lovable-uploads/d95fa327-23ec-4e20-a241-85853ef68334.png",
        "/lovable-uploads/1b6dd230-b137-444c-9ab1-66f1441e8124.png"
      ],
      tech: ["UI/UX Design", "Adobe Illustrator", "Figma", "Web Design"],
      challenges: "Creating a platform that connects local Jordanian shops with customers while maintaining cultural authenticity and modern usability.",
      techniques: "Developed Arabic-English bilingual interface, integrated Jordanian flag symbolism, and created intuitive shopping flow with customer/shop owner differentiation.",
      demo: "https://www.behance.net/gallery/207992465/Mahali",
      figma: "https://www.figma.com/design/EDGS0eBDhBY98ZSu0XL0ln/Mahali?node-id=0-1&t=Hjy7QvswYzAiA6dJ-1",
      code: "#"
    }
  ];

  const developmentProjects = [
    {
      title: "PythonGame",
      category: "Development",
      description: "A collection of interactive games developed using Python, showcasing programming skills and creativity in game design.",
      fullDescription: "A collection of interactive games developed using Python, showcasing programming skills and creativity in game design.",
      image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1556438064-2d7646166914?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&h=400&fit=crop"
      ],
      tech: ["Python", "Pygame"],
      challenges: "Implementing game logic, collision detection, and scoring systems effectively.",
      techniques: "Designed modular game classes for scalability and reusable mechanics.",
      demo: "#",
      code: "https://github.com/ghada901999/PythonGame"
    },
    {
      title: "SnipperGame",
      category: "Development",
      description: "A strategic shooting game developed with Python, demonstrating proficiency in game mechanics and UI design.",
      fullDescription: "A strategic shooting game developed with Python, demonstrating proficiency in game mechanics and UI design.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop"
      ],
      tech: ["Python", "Pygame"],
      challenges: "Managing projectile physics, player input responsiveness, and smooth UI updates.",
      techniques: "Implemented real-time player controls and modular game levels for replayability.",
      demo: "#",
      code: "https://github.com/ghada901999/SnipperGame"
    },
    {
      title: "Toys Online Shopping",
      category: "Development",
      description: "An e-commerce platform for online toy shopping, featuring product listings, shopping cart, and checkout system.",
      fullDescription: "An e-commerce platform for online toy shopping, featuring product listings, shopping cart, and checkout system.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop"
      ],
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Firebase"],
      challenges: "Ensuring responsive, user-friendly design with functional shopping cart and checkout system.",
      techniques: "Created reusable product card components and dynamic cart updating with JavaScript.",
      demo: "#",
      code: "https://github.com/ghada901999/Toys-online-shopping"
    },
    {
      title: "Disaster Management Application (DMA)",
      category: "Development",
      description: "A web-based application designed to manage disaster response efforts, including real-time updates, resource allocation, and communication tools.",
      fullDescription: "A web-based application designed to manage disaster response efforts, including real-time updates, resource allocation, and communication tools.",
      image: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
      ],
      tech: ["HTML", "CSS", "JavaScript", "Firebase", "SQL", "API Integration"],
      challenges: "Providing real-time data updates and user-friendly dashboards.",
      techniques: "Integrated live data feeds, interactive maps, and role-based access for admins and responders.",
      demo: "#",
      code: "https://github.com/ghada901999/Disaster-Management-Application-DMA-"
    },
  ];

  const allProjects = [...designProjects, ...developmentProjects];

  return (
    <section id="projects" className="py-20 px-6 bg-background-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6 animate-fade-in">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Explore my design and development projects that showcase creativity, technical expertise, and innovative problem-solving across brand identity and software development.
          </p>
        </div>

        {/* Design Projects Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-serif font-bold text-primary mb-8 text-center animate-fade-in">
            🎨 Design Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProjects.map((project, index) => (
              <ProjectLightbox key={`design-${index}`} project={project}>
                <Card 
                  className="glass-card border-0 overflow-hidden group cursor-pointer hover:shadow-card-hover transition-all duration-500 animate-fade-in hover:scale-105 hover:-translate-y-2 transform"
                  style={{ animationDelay: `${0.4 + index * 0.2}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Lightbulb className="h-8 w-8 mx-auto mb-2 animate-pulse" />
                        <p className="font-serif font-medium">Click to explore</p>
                      </div>
                    </div>
                    
                    {/* Animated project indicators */}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
                      <div className="w-2 h-2 bg-secondary rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                      <div className="w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
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
                        <span className="font-body">Design</span>
                      </div>
                      <div className="flex items-center">
                        <Lightbulb className="h-3 w-3 mr-1 text-secondary" />
                        <span className="font-body">Branding</span>
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

        {/* Development Projects Section */}
        <div>
          <h3 className="text-3xl font-serif font-bold text-primary mb-8 text-center animate-fade-in">
            💻 Development Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProjects.map((project, index) => (
              <ProjectLightbox key={`dev-${index}`} project={project}>
                <Card 
                  className="glass-card border-0 overflow-hidden group cursor-pointer hover:shadow-card-hover transition-all duration-500 animate-fade-in hover:scale-105 hover:-translate-y-2 transform"
                  style={{ animationDelay: `${0.4 + index * 0.2}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Lightbulb className="h-8 w-8 mx-auto mb-2 animate-pulse" />
                        <p className="font-serif font-medium">Click to explore</p>
                      </div>
                    </div>
                    
                    {/* Animated project indicators */}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
                      <div className="w-2 h-2 bg-secondary rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                      <div className="w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
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
                        <span className="font-body">Development</span>
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
      </div>
    </section>
  );
};

export default Projects;