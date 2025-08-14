import { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, Facebook, Mail, Instagram, Linkedin, Youtube, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
const [servicesOpen, setServicesOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP animations
  useEffect(() => {
    gsap.fromTo('.header-animate', 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, delay: 0.2 }
    );
  }, []);

  const navItems = [
    { name: 'Home', href: '/', hasDropdown: false },
    { name: 'Our Specialists', href: '/specialists', hasDropdown: false },
    { 
      name: 'Services', 
      href: '/services', 
      hasDropdown: true,
      clickable: true,
      dropdownItems: [
        { name: 'Dental Implants', href: '/services/dental-implants' },
        { name: 'Tooth Aligners and Braces', href: '/services/aligners-braces' },
        { name: 'Root Canal Treatment', href: '/services/root-canal' },
        { name: 'Teeth Whitening', href: '/services/teeth-whitening' },
        { name: 'Oral Surgery', href: '/services/oral-surgery' },
        { name: 'Preventive Care', href: '/services/preventive-care' },
      ]
    },
    { name: 'Gallery', href: '/gallery', hasDropdown: false },
    { name: 'Reviews', href: '/reviews', hasDropdown: false },
    { name: 'Contact Us', href: '/contact', hasDropdown: false },
  ];

  const isActive = (href: string) => location.pathname === href;
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-medium' : 'bg-background'
    }`}>
      {/* Top Header */}
      <div className="header-animate bg-secondary text-secondary-foreground py-2 md:py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="/public/Logo_Kaizen Dental_Header.png" 
                alt="logo" 
                className="w-50 h-50 object-contain"
              />   
            </div>

            {/* Address Locations - Hidden on mobile */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Location 1 */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-sm">
                  <p className="font-medium">Shop no.1, First floor, Mahagun Mart,</p>
                  <p className="text-secondary-foreground/80">Sector 78, Noida, Uttar Pradesh 201301</p>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Clock className="w-4 h-4 text-accent" />
                 <div className="text-sm">
  <span>Sun: Closed | Tue & Wed: 10 AM - 8 PM</span><br />
  <span>Mon to Sat: 10 AM - 2 PM & 3 PM - 8 PM</span>
</div>

                </div>
              </div>

              {/* Location 2 */}
              {/* <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-sm">
                  <p className="font-medium">I-109, Sector 27</p>
                  <p className="text-secondary-foreground/80">Noida 201301.</p>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-sm">Tue-Sun (11am - 8pm)</span>
                </div>
              </div> */} 
            </div>

            {/* Social Media and Contact */}
            <div className="flex items-center gap-4">
              {/* Social Icons */}
              <div className="flex items-center gap-2">
                <a href="https://www.facebook.com/share/1Eekc1rcGD/" className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="Kaizendentalnoida@gmail.com" className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/kaizendentalnoida/?igsh=MXFvdnRobzd3dm5reA%3D%3D" className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Instagram className="w-4 h-4" />
                </a>
                {/* <a href="#" className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Linkedin className="w-4 h-4" />
                </a> */}
                {/* <a href="#" className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Youtube className="w-4 h-4" />
                </a> */}
              </div>

              {/* Contact Number */}
              <div className="flex items-center gap-2 text-secondary-foreground">
                <Phone className="w-4 h-4 text-accent" />
               <a href="tel:+919953909390" className="text-sm font-medium hover:underline">+91-9953909390</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="header-animate bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <DropdownMenu>
                     <div className="flex items-center">
  <Link 
    to={item.href}
    className={`nav-link px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
      isActive(item.href) ? 'text-primary' : 'text-foreground'
    }`}
  >
    {item.name}
  </Link>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <button className="p-2 text-foreground hover:text-primary">
        <ChevronDown className="w-4 h-4" />
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56 bg-background border border-border shadow-medium">
      {item.dropdownItems?.map((dropdownItem) => (
        <DropdownMenuItem key={dropdownItem.name} asChild>
          <Link 
            to={dropdownItem.href}
            className="w-full px-4 py-2 text-sm hover:bg-muted hover:text-primary transition-colors"
          >
            {dropdownItem.name}
          </Link>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
</div>

                      <DropdownMenuContent className="w-56 bg-background border border-border shadow-medium">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <DropdownMenuItem key={dropdownItem.name} asChild>
                            <Link 
                              to={dropdownItem.href}
                              className="w-full px-4 py-2 text-sm hover:bg-muted hover:text-primary transition-colors"
                            >
                              {dropdownItem.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      to={item.href}
                      className={`nav-link px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                        isActive(item.href) ? 'text-primary' : 'text-foreground'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Button 
                className="btn-primary bg-accent hover:bg-accent-hover text-accent-foreground px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-glow hover:scale-105"
                asChild
              >
                <Link to="/contact">Book an Appointment</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url("https://thumbs.dreamstime.com/b/friendly-female-dentist-her-stylish-dental-office-ready-to-provide-excellent-care-cartoon-dentist-modern-office-image-369051649.jpg")' }}
                      >
                         
                      <div className="absolute inset-0 bg-white opacity-90 z-0" />
                       <div className="relative z-10 p-4">
                  <div className="flex flex-col gap-6 pt-6 ">
                    {/* Mobile Logo */}
                   <div className="flex flex-col items-center gap-2 pb-4 border-b border-border">
                        <img 
                          src="/public/k-logo.png" 
                          alt="Logo" 
                          className="w-14 h-14 object-contain"
                          />
                         <span className="text-md font-playfair font-bold text-center">Where every smile matters !</span>
                         </div>

                    {/* Mobile Navigation */}
                    <nav className="flex flex-col gap-4">
                         {navItems.map((item) => (
                         <div key={item.name}>
                         {item.hasDropdown ? (
                        <div className="space-y-2">
                   <div className="flex items-center justify-between">
  <Link
    to={item.href}
    onClick={() => setIsOpen(false)}
    className="text-sm font-medium text-foreground hover:text-primary"
  >
    {item.name}
  </Link>
  <button
    onClick={() => setServicesOpen(!servicesOpen)}
    className="p-1 text-foreground hover:text-primary"
  >
    <ChevronDown
      className={`w-4 h-4 transition-transform ${
        servicesOpen ? 'rotate-180' : ''
      }`}
    />
  </button>
</div>

                         {servicesOpen && (
                          <div className="pl-4 space-y-2">
                          {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                           key={dropdownItem.name}
                           to={dropdownItem.href}
                           onClick={() => setIsOpen(false)}
                           className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                           >
                          {dropdownItem.name}
                       </Link>
                       ))}
                      </div>
                      )}
                      </div>
                     ) : (
                    <Link
                     to={item.href}
                     onClick={() => setIsOpen(false)}
                     className={`text-sm font-medium transition-colors ho ver:text-primary ${
                     isActive(item.href) ? 'text-primary' : 'text-foreground'
                    }`}
                    >
                    {item.name}
                    </Link>
                    )}
                    </div>
                    ))}
                  </nav>

                    {/* Mobile CTA Button */}
                    <Button 
                      className="btn-primary bg-accent hover:bg-accent-hover text-accent-foreground rounded-full font-medium mt-6"
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <Link to="/contact">Book an Appointment</Link>
                    </Button>

                    {/* Mobile Contact Info */}
                    <div className="pt-6 border-t border-border space-y-4">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium">+91-9953909390</span>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="text-sm">
                          <p className="font-medium">Shop no.1, First floor, Mahagun Mart,</p>
                          <p className="text-muted-foreground">Sector 78, Noida, Uttar Pradesh 201301</p>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;