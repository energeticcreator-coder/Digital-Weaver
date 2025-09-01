import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    services: [
      { name: "IT Consulting", href: "#services" },
      { name: "Software Development", href: "#services" },
      { name: "Cloud Solutions", href: "#services" },
      { name: "Technical Support", href: "#services" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "#blog" }
    ],
    resources: [
      { name: "Case Studies", href: "#portfolio" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "FAQ", href: "#faq" },
      { name: "Documentation", href: "#docs" }
    ]
  };
  
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "Github" },
    { icon: Facebook, href: "#", label: "Facebook" }
  ];

  return (
    <footer className="bg-gradient-hero text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-4">Digital Weave Lab</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Empowering businesses with innovative technology solutions 
                that drive growth and enhance operational efficiency.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-white/60" />
                  <span className="text-white/80 text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-white/60" />
                  <span className="text-white/80 text-sm">hello@digitalweavelab.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-white/60 mt-0.5" />
                  <span className="text-white/80 text-sm">
                    123 Tech Street<br />
                    San Francisco, CA 94105
                  </span>
                </div>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Resources & Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-3 mb-6">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Newsletter Signup */}
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <h5 className="font-medium mb-2">Stay Updated</h5>
                <p className="text-white/70 text-sm mb-3">
                  Get tech insights and updates
                </p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-white/20 border border-white/30 rounded text-sm placeholder:text-white/60 focus:outline-none focus:border-white/50"
                  />
                  <Button size="sm" variant="secondary" className="px-3">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-white/70 text-sm">
              © {currentYear} Digital Weave Lab. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <social.icon className="h-5 w-5 text-white/70" />
                </a>
              ))}
            </div>
            
            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <a href="#privacy" className="text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-white/70 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;