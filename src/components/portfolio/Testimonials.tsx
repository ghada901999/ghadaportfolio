import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      company: "Design Studio Co.",
      rating: 5,
      text: "Ghada's attention to detail and creative vision exceeded our expectations. Her technical skills combined with artistic flair made our project a huge success.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c829b0c0?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "Tech Innovations",
      rating: 5,
      text: "Working with Ghada was a game-changer. She brought fresh ideas and delivered exceptional results on time. Her professionalism is outstanding.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Lead",
      company: "Brand Makers",
      rating: 5,
      text: "Ghada's UI/UX design skills transformed our user experience. The interface she created is both beautiful and highly functional.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            What clients say about working with me and the results we've achieved together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="glass-card p-6 border-0 relative overflow-hidden group hover:shadow-card-hover transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20 group-hover:text-primary/40 transition-colors duration-300" />
              
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-primary/20"
                />
                <div>
                  <h4 className="font-serif font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground font-body">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground leading-relaxed font-body italic">
                "{testimonial.text}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;