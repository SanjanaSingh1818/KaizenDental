import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Specialists', href: '/specialists' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const services = [
    { name: 'Dental Implants', href: '/services/dental-implants' },
    { name: 'Root Canal Treatment', href: '/services/root-canal' },
    { name: 'Teeth Aligners & Braces', href: '/services/aligners-braces' },
    { name: 'Teeth Whitening', href: '/services/teeth-whitening' },
    { name: 'Oral Surgery', href: '/services/oral-surgery' },
    { name: 'Preventive Care', href: '/services/preventive-care' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/src/assets/logo-placeholder.png" 
                alt="DentalCare+ Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-playfair font-bold">DentalCare+</span>
            </div>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
              Providing exceptional dental care with advanced technology and personalized treatment plans for over 15 years in Noida.
            </p>
            
            {/* Social Media */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-secondary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-accent">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href}
                    className="text-secondary-foreground/80 hover:text-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-accent">Contact Info</h3>
            <div className="space-y-4">
              {/* Location 1 */}
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Clinic 1</p>
                    <p className="text-sm text-secondary-foreground/80">
                      C-98 Plot-26 1st and 2nd Floor<br />
                      Sector 41 Noida UP.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-8">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-sm text-secondary-foreground/80">Mon-Sun: 10am - 8pm</span>
                </div>
              </div>

              {/* Location 2 */}
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Clinic 2</p>
                    <p className="text-sm text-secondary-foreground/80">
                      I-109, Sector 27<br />
                      Noida 201301.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-8">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-sm text-secondary-foreground/80">Tue-Sun: 11am - 8pm</span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="font-medium">(+91) 9650780998</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="font-medium">info@dentalcareplus.com</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              className="bg-accent hover:bg-accent-hover text-accent-foreground rounded-full px-6 py-3 mt-6 w-full"
              asChild
            >
              <Link to="/contact">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-secondary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-secondary-foreground/80 text-center md:text-left">
              © {currentYear} DentalCare+. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;