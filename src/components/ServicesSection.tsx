import { Button } from "@/components/ui/button";
import { 
  Monitor, 
  Code, 
  Cloud, 
  Headphones, 
  Database, 
  Smartphone,
  ArrowRight 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: "IT Consulting",
      description: "Strategic technology planning and digital transformation guidance to optimize your business operations.",
      features: ["Technology Audits", "Digital Strategy", "System Integration", "Process Optimization"]
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom web and mobile applications built with modern technologies to meet your specific business needs.",
      features: ["Custom Web Apps", "Mobile Development", "API Integration", "Database Design"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Secure, scalable cloud infrastructure and migration services to enhance performance and reduce costs.",
      features: ["Cloud Migration", "Infrastructure Setup", "Security Implementation", "Performance Optimization"]
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "24/7 technical support and maintenance services to keep your systems running smoothly.",
      features: ["24/7 Monitoring", "Help Desk Support", "System Maintenance", "Emergency Response"]
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Comprehensive data solutions including backup, analytics, and business intelligence systems.",
      features: ["Data Backup", "Analytics Setup", "Reporting Tools", "Data Security"]
    },
    {
      icon: Smartphone,
      title: "Digital Services",
      description: "Complete digital marketing and online presence solutions to grow your business reach.",
      features: ["Website Development", "SEO Optimization", "Digital Marketing", "E-commerce Solutions"]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth 
            and enhance operational efficiency.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-card rounded-2xl shadow-card p-8 hover:shadow-elegant transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                <service.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button variant="ghost" className="text-primary hover:text-primary-light group p-0">
                Learn More 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-gradient-subtle rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every business is unique. Let's discuss how we can create a tailored 
            technology solution that fits your specific requirements and budget.
          </p>
          <Button size="lg" variant="gradient" className="px-8">
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;