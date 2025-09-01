import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO, TechStart Inc.",
      content: "Digital Weave Lab transformed our entire IT infrastructure. Their expertise in cloud migration saved us 60% on hosting costs while improving our system performance dramatically.",
      rating: 5,
      company: "TechStart Inc."
    },
    {
      name: "Michael Chen",
      title: "Operations Manager, GrowthCo",
      content: "The custom CRM solution they built for us increased our sales team efficiency by 50%. The ongoing support has been exceptional - they're always available when we need them.",
      rating: 5,
      company: "GrowthCo"
    },
    {
      name: "Emily Rodriguez",
      title: "Founder, Digital Solutions",
      content: "Working with Digital Weave Lab was a game-changer. Their innovative approach to our e-commerce platform resulted in a 40% increase in online sales within the first quarter.",
      rating: 5,
      company: "Digital Solutions"
    },
    {
      name: "David Thompson",
      title: "CTO, InnovateTech",
      content: "Their team's technical expertise and business understanding is impressive. They delivered a complex data analytics solution on time and under budget, exceeding all our expectations.",
      rating: 5,
      company: "InnovateTech"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business leaders are saying 
            about their experience working with Digital Weave Lab.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-card rounded-2xl shadow-card p-8 hover:shadow-elegant transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote className="h-8 w-8" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-5 w-5 fill-yellow-400 text-yellow-400" 
                  />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="bg-gradient-subtle rounded-3xl p-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Trusted by Leading Companies
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="bg-muted/50 rounded-lg p-6 h-16 flex items-center justify-center">
              <span className="text-muted-foreground font-semibold">TechStart</span>
            </div>
            <div className="bg-muted/50 rounded-lg p-6 h-16 flex items-center justify-center">
              <span className="text-muted-foreground font-semibold">GrowthCo</span>
            </div>
            <div className="bg-muted/50 rounded-lg p-6 h-16 flex items-center justify-center">
              <span className="text-muted-foreground font-semibold">InnovateTech</span>
            </div>
            <div className="bg-muted/50 rounded-lg p-6 h-16 flex items-center justify-center">
              <span className="text-muted-foreground font-semibold">Digital Solutions</span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mt-12 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Retention Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-success mb-2">4.9/5</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-innovation mb-2">48h</div>
              <div className="text-muted-foreground">Average Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;