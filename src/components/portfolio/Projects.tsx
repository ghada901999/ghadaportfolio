import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Lightbulb, Wrench } from "lucide-react";
import ProjectLightbox from "./ProjectLightbox";

const Projects = () => {
  const designProjects = [
    {
      title: "Oakora – Brand Identity",
      category: "Design",
      description: "A minimalist brand identity inspired by nature's elegance, featuring a clean, earthy design system with logo, typography, and color palette.",
      fullDescription: "A minimalist brand identity inspired by nature's elegance, featuring a clean, earthy design system with logo, typography, and color palette.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
      ],
      tech: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
      challenges: "Ensuring a cohesive visual system that maintains simplicity while conveying elegance and connection to nature.",
      techniques: "Used consistent earthy tones, geometric patterns, and modular typography to create a harmonious and versatile design system.",
      demo: "https://www.behance.net/gallery/207992099/oakora",
      code: "#"
    },
    {
      title: "AuraGlow – Brand Identity",
      category: "Design",
      description: "A nature-inspired, elegant brand identity blending modern aesthetics with organic elements, showcasing a cohesive visual system including logo, typography, and social media templates.",
      fullDescription: "A nature-inspired, elegant brand identity blending modern aesthetics with organic elements, showcasing a cohesive visual system including logo, typography, and social media templates.",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
      ],
      tech: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
      challenges: "Creating a brand identity that balances organic shapes with modern design elements.",
      techniques: "Applied soft gradients, natural textures, and modular social media templates to maintain visual consistency.",
      demo: "https://www.behance.net/gallery/207842173/AuraGlow",
      code: "#"
    },
    {
      title: "StrideX – Footwear Brand Identity",
      category: "Design",
      description: "A contemporary footwear brand offering a diverse range of sneakers, including athletic, orthopedic, and fashion-forward designs, encompassing logo design, packaging, and promotional materials.",
      fullDescription: "A contemporary footwear brand offering a diverse range of sneakers, including athletic, orthopedic, and fashion-forward designs, encompassing logo design, packaging, and promotional materials.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop"
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
      description: "A vibrant and culturally rich brand identity reflecting the essence of traditional craftsmanship, featuring intricate patterns and earthy tones.",
      fullDescription: "A vibrant and culturally rich brand identity reflecting the essence of traditional craftsmanship, featuring intricate patterns and earthy tones.",
      image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop"
      ],
      tech: ["Adobe Illustrator", "Adobe Photoshop", "Procreate"],
      challenges: "Incorporating traditional patterns without making the design feel outdated or cluttered.",
      techniques: "Created custom patterns inspired by local crafts, paired with earthy, complementary colors for a modern-traditional fusion.",
      demo: "https://www.behance.net/gallery/207992465/Mahali",
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
    {
      title: "Upcycled Food System (UCFS)",
      category: "Development",
      description: "An innovative system aimed at reducing food waste by upcycling surplus food into new products, with a user-friendly interface for tracking and managing items.",
      fullDescription: "An innovative system aimed at reducing food waste by upcycling surplus food into new products, with a user-friendly interface for tracking and managing items.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&h=400&fit=crop"
      ],
      tech: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
      challenges: "Designing a system to track inventory efficiently while keeping the interface intuitive.",
      techniques: "Implemented dynamic inventory updates, filtering options, and dashboards for producers and consumers.",
      demo: "#",
      code: "https://github.com/ghada901999/Upcycled-Food-System-UCFS-"
    }
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