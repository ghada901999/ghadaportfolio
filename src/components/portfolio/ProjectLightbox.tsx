import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, Figma } from "lucide-react";

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  tech: string[];
  challenges: string;
  techniques: string;
  demo: string;
  code: string;
  figma?: string;
  category?: string;
}

interface ProjectLightboxProps {
  project: Project;
  children: React.ReactNode;
}

const ProjectLightbox = ({ project, children }: ProjectLightboxProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-background border-primary/20">
        <div className="grid lg:grid-cols-2 gap-8 p-6">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative group">
              <img 
                src={project.images[currentImageIndex]} 
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-80 object-cover rounded-lg"
              />
              
              {project.images.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 border-white/20 text-white hover:bg-black/70"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 border-white/20 text-white hover:bg-black/70"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-primary' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Thumbnail Strip */}
            {project.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} thumbnail ${index + 1}`}
                    className={`w-16 h-16 object-cover rounded cursor-pointer transition-opacity ${
                      index === currentImageIndex ? 'opacity-100 ring-2 ring-primary' : 'opacity-60 hover:opacity-80'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-serif font-bold gradient-text mb-4">
                {project.title}
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-serif font-semibold mb-3 text-primary">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-sm bg-gradient-primary text-white rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-serif font-semibold mb-3 text-primary">
                Challenges Solved
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {project.challenges}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-serif font-semibold mb-3 text-primary">
                Special Techniques
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {project.techniques}
              </p>
            </div>

            <div className="flex flex-col space-y-3 pt-4">
              {project.category === "Design" ? (
                <>
                  <Button 
                    className="bg-gradient-primary hover:opacity-90 w-full"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View on Behance
                  </Button>
                  {project.figma && (
                    <Button 
                      variant="outline" 
                      className="border-primary/30 text-foreground hover:bg-primary/10 w-full"
                      onClick={() => window.open(project.figma, '_blank')}
                    >
                      <Figma className="h-4 w-4 mr-2" />
                      View on Figma
                    </Button>
                  )}
                </>
              ) : (
                <Button 
                  variant="outline" 
                  className="border-primary/30 text-foreground hover:bg-primary/10 w-full"
                  onClick={() => window.open(project.code, '_blank')}
                >
                  <Github className="h-4 w-4 mr-2" />
                  Source Code
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectLightbox;