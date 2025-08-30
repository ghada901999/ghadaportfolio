import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "UX/UI Designer (Remote)",
      company: "Dealers Auto Center",
      location: "Texas, USA",
      duration: "July 2024 – May 2025",
      type: "Remote",
      responsibilities: [
        "Collaborated remotely with cross-functional teams to deliver frontend solutions",
        "Designed and implemented user-friendly UI components and improved responsiveness",
        "Enhanced UX through design improvements and frontend optimizations",
        "Applied modern technologies to support innovative automotive software projects"
      ]
    },
    {
      title: "Customer Service Representative",
      company: "Extensya",
      location: "Jordan",
      duration: "July 2024 – August 2024",
      type: "Full-time",
      responsibilities: [
        "Delivered professional customer support in English for diverse clients",
        "Resolved inquiries and complaints efficiently, ensuring high satisfaction rates"
      ]
    },
    {
      title: "React Native Frontend Intern",
      company: "Jo Vision",
      location: "Jordan",
      duration: "February 2024 – June 2024",
      type: "Internship",
      responsibilities: [
        "Developed and maintained frontend interfaces using React Native",
        "Integrated applications with backend APIs via ASP.NET",
        "Participated in agile sprints to enhance real-time user engagement"
      ]
    },
    {
      title: "UI/UX Designer Intern",
      company: "The Hope International",
      location: "Jordan",
      duration: "July 2023 – September 2023",
      type: "Internship",
      responsibilities: [
        "Conducted user research and created wireframes and prototypes using Figma",
        "Collaborated with developers to design intuitive and user-friendly web and mobile interfaces"
      ]
    },
    {
      title: "Graphic Designer Intern",
      company: "ABE Academy",
      location: "Jordan",
      duration: "February 2024 – April 2024",
      type: "Internship",
      responsibilities: [
        "Applied design principles in creating visual content for various projects",
        "Enhanced creative problem-solving skills while utilizing Adobe Creative Suite tools"
      ]
    },
    {
      title: "Team Leader",
      company: "Softwarian Team",
      location: "JUST University",
      duration: "February 2022 – July 2024",
      type: "Leadership",
      responsibilities: [
        "Organized academic events and provided peer mentoring to university students",
        "Designed educational resources and guided team members effectively",
        "Led a team of 10 students, organizing 3+ academic events with 100 participants"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-background-secondary/40">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6 animate-fade-in">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body animate-fade-in" style={{ animationDelay: '0.2s' }}>
            A journey through diverse roles that have shaped my expertise in software engineering, design, and leadership.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="glass-card p-6 border-0 hover:shadow-card-hover transition-all duration-500 group animate-fade-in"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span className="text-sm font-body font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-primary mb-2 group-hover:text-primary-light transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-lg font-body font-medium text-foreground mb-1">{exp.company}</p>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="font-body">{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    <span className="font-body">{exp.duration}</span>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground font-body leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;