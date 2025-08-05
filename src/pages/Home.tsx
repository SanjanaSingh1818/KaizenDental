import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Star, Users, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero section animations
    gsap.fromTo('.hero-content',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );

    gsap.fromTo('.hero-image',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.8 }
    );

    // Stats counter animation
    gsap.fromTo('.stat-number',
      { textContent: 0 },
      {
        textContent: (i, target) => target.getAttribute('data-count'),
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top 80%',
        }
      }
    );

    // About section animations
    gsap.fromTo('.about-content',
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo('.about-image',
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 80%',
        }
      }
    );
  }, []);

  const heroSlides = [
    {
      title: "Your Smile is Our Priority",
      subtitle: "Professional dental care with cutting-edge technology and personalized treatment plans for the whole family.",
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png"
    },
    {
      title: "Advanced Dental Solutions",
      subtitle: "From routine cleanings to complex procedures, we provide comprehensive dental care in a comfortable environment.",
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png"
    },
    {
      title: "Expert Care, Gentle Touch",
      subtitle: "Our experienced team combines expertise with compassion to deliver exceptional dental care for every patient.",
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png"
    }
  ];

  const stats = [
    { number: "5000", label: "Happy Patients", icon: Users },
    { number: "15", label: "Years Experience", icon: Award },
    { number: "24", label: "Hours Emergency Care", icon: Clock },
    { number: "98", label: "Success Rate %", icon: Star },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroSlides[0].image})` }}
        ></div>
        
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <div className="hero-content max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
              Your Smile is Our{' '}
              <span className="text-accent">Priority</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Professional dental care with cutting-edge technology and personalized treatment plans for the whole family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-primary bg-accent hover:bg-accent-hover text-accent-foreground px-8 py-4 rounded-full text-lg font-medium group"
                asChild
              >
                <Link to="/contact">
                  Book Appointment
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 rounded-full text-lg font-medium"
                asChild
              >
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full animate-bounce mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-accent" />
                </div>
                <div className="stat-number text-4xl md:text-5xl font-bold mb-2" data-count={stat.number}>
                  0
                </div>
                <p className="text-primary-foreground/80 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="about-content">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-foreground">
                About <span className="text-primary">DentalCare+</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 15 years of experience in dental care, DentalCare+ has been serving the Noida community with comprehensive dental solutions. Our state-of-the-art facilities and experienced team ensure that every patient receives the highest quality care.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From routine check-ups to advanced procedures like dental implants and orthodontics, we offer a full range of services to keep your smile healthy and beautiful. Our commitment to using the latest technology and techniques ensures comfortable and effective treatments.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Advanced Technology</h4>
                    <p className="text-muted-foreground text-sm">Latest dental equipment and techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Expert Team</h4>
                    <p className="text-muted-foreground text-sm">Experienced and certified professionals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Comfortable Care</h4>
                    <p className="text-muted-foreground text-sm">Patient-focused, gentle treatments</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Emergency Care</h4>
                    <p className="text-muted-foreground text-sm">24/7 emergency dental services</p>
                  </div>
                </div>
              </div>

              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full group"
                asChild
              >
                <Link to="/specialists">
                  Meet Our Team
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Image */}
            <div className="about-image">
              <Card className="overflow-hidden shadow-strong">
                <CardContent className="p-0">
                  <div className="relative h-96 lg:h-[600px]">
                    <img 
                      src="/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png"
                      alt="Modern dental clinic interior"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-foreground">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive dental care services designed to keep your smile healthy and beautiful
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dental Implants",
                description: "Permanent tooth replacement solution with natural look and feel",
                icon: "🦷"
              },
              {
                title: "Root Canal Treatment",
                description: "Save your natural tooth with our painless root canal procedures",
                icon: "🔧"
              },
              {
                title: "Teeth Aligners & Braces",
                description: "Straighten your teeth with modern orthodontic solutions",
                icon: "📏"
              },
              {
                title: "Teeth Whitening",
                description: "Professional whitening for a brighter, more confident smile",
                icon: "✨"
              },
              {
                title: "Oral Surgery",
                description: "Advanced surgical procedures with minimal discomfort",
                icon: "🏥"
              },
              {
                title: "Preventive Care",
                description: "Regular checkups and cleanings to maintain oral health",
                icon: "🛡️"
              }
            ].map((service, index) => (
              <Card key={index} className="service-card bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="outline" className="rounded-full" asChild>
                    <Link to="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;