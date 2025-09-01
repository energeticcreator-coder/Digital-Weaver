import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with inventory management, payment processing, and analytics dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      results: "40% increase in online sales",
      image: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      title: "Cloud Infrastructure Migration",
      category: "Cloud Solutions",
      description: "Complete migration of legacy systems to AWS cloud infrastructure with enhanced security and scalability.",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      results: "60% reduction in hosting costs",
      image: "bg-gradient-to-br from-green-500 to-blue-600"
    },
    {
      title: "Mobile CRM Application",
      category: "Mobile Development",
      description: "Custom CRM mobile app with offline capabilities, real-time sync, and advanced reporting features.",
      technologies: ["React Native", "Firebase", "MongoDB", "GraphQL"],
      results: "50% improvement in sales team efficiency",
      image: "bg-gradient-to-br from-purple-500 to-pink-600"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      category: "Data Solutions",
      description: "Business intelligence dashboard with machine learning insights and predictive analytics capabilities.",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      results: "35% better decision-making accuracy",
      image: "bg-gradient-to-br from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real projects, real results. See how we've helped businesses transform 
            their operations and achieve remarkable growth through technology.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-card rounded-2xl shadow-card overflow-hidden hover:shadow-elegant transition-all duration-300 group"
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 ${project.image} flex items-center justify-center`}>
                <div className="text-white font-semibold text-lg bg-black/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                  {project.category}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Results */}
                <div className="bg-success/10 text-success px-4 py-2 rounded-lg mb-6 text-sm font-medium">
                  📈 {project.results}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    <span onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Case Study
                    </span>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <div className="text-3xl font-bold text-success mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <div className="text-3xl font-bold text-innovation mb-2">5+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;