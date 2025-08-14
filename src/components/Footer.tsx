import { MapPin, Phone, Clock, Facebook, Mail, Instagram, Linkedin, Youtube } from 'lucide-react';
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
                src="/public/Logo_Kaizen Dental_Header.png" 
                alt="DentalCare+ Logo" 
                className="w-50 h-50 object-contain"
              />
             
            </div>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
              Providing exceptional dental care with advanced technology and personalized treatment plans for over 15 years in Noida.
            </p>
            
            {/* Social Media */}
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/share/1Eekc1rcGD/" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="Kaizendentalnoida@gmail.com" className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/kaizendentalnoida/?igsh=MXFvdnRobzd3dm5reA%3D%3D" className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5" />
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
                    <p className="font-medium">Clinic Address</p>
                    <p className="text-sm text-secondary-foreground/80">
                     Shop no.1, First floor, Mahagun Mart,<br/> Sector 78, Noida, Uttar Pradesh 201301
                    </p>
                  </div>
                </div>
              </div>

              {/* Location 2 */}
              

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
              <a href="tel:+919953909390" className="text-sm font-medium hover:underline">+91-9953909390</a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:Kaizendentalnoida@gmail.com" className="font-medium hover:underline"> Kaizendentalnoida@gmail.com </a>
              </div>
            </div>

            {/* CTA Button */}
            {/* <Button 
              className="bg-accent hover:bg-accent-hover text-accent-foreground rounded-full px-6 py-3 mt-6 w-full"
              asChild
            >
              <Link to="/contact">Book Appointment</Link>
            </Button> */}
            {/* Embedded Map */}
<div className="mt-6 w-full">
  <iframe
    title="Kaizen Dental Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1925632713123!2d77.38498717495422!3d28.563979787191492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef66b511b5ad%3A0xaeae64dffee49e59!2sMahagun%20Mart!5e0!3m2!1sen!2sin!4v1754559266614!5m2!1sen!2sin"
    width="100%"
    height="150"
    className="rounded-lg border-0"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="border-t border-secondary-foreground/20">
        <div className="container mx-auto px-4 py-6">
         <div className="text-sm text-secondary-foreground/80 text-center md:text-left w-full flex flex-col md:flex-row items-center justify-between gap-4">
  <p>© {currentYear} Kaizen Dental. All rights reserved.</p>
 <p className="text-center">
  Powered by{" "}
  <a
    href="https://genesisvirtue.com" // replace with actual URL
    className="font-semibold text-accent hover:text-white transition-colors duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    Genesis Virtue
  </a>
</p>

  <div className="flex items-center gap-6">
    <Link to="/privacy" className="hover:text-accent transition-colors">
      Privacy Policy
    </Link>
    <Link to="/terms" className="hover:text-accent transition-colors">
      Terms of Service
    </Link>
    <Link to="/sitemap" className="hover:text-accent transition-colors">
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