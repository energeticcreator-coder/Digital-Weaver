import { Target, Users, Award, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Empowering businesses through innovative technology solutions that drive growth and efficiency."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Building lasting partnerships with personalized service and dedicated support for every client."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Delivering premium solutions with meticulous attention to detail and industry best practices."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Staying ahead of technology trends to provide cutting-edge solutions for modern challenges."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Digital Weave Lab
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a passionate team of tech professionals dedicated to helping small businesses 
            leverage technology for sustainable growth and competitive advantage.
          </p>
        </div>
        
        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-semibold text-foreground mb-6">
              Your Technology Partner for Success
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Founded with the vision of making enterprise-level technology accessible to small 
              businesses, Digital Weave Lab combines technical expertise with deep understanding 
              of business needs.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our team brings together years of experience in software development, IT consulting, 
              and digital transformation to deliver solutions that not only meet today's needs 
              but also scale for tomorrow's opportunities.
            </p>
            <div className="flex items-center gap-8">
              <div>
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Industry Certifications</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-card p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span className="text-muted-foreground">Custom Software Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Cloud Infrastructure Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-innovation rounded-full"></div>
                  <span className="text-muted-foreground">24/7 Technical Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span className="text-muted-foreground">Digital Transformation Consulting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={value.title} 
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                <value.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h4>
              <p className="text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;