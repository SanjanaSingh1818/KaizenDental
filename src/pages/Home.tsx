import { useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Star, Users, Award, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import useEmblaCarousel from 'embla-carousel-react';
import heroImage1 from '@/assets/hero-dental-1.jpg';
import heroImage2 from '@/assets/hero-dental-2.jpg';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    duration: 30,
    startIndex: 0
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    // Auto-scroll carousel
    if (emblaApi) {
      const autoScroll = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(autoScroll);
    }
  }, [emblaApi]);

  useEffect(() => {
    // Hero section animations with parallax
    gsap.fromTo('.hero-content',
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, delay: 0.5, ease: "power3.out" }
    );

    // Floating animation for hero content
    gsap.to('.hero-content', {
      y: -10,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });

    // Background image parallax
    gsap.to('.hero-bg', {
      scale: 1.1,
      duration: 20,
      ease: "none",
      repeat: -1,
      yoyo: true
    });

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
      image: heroImage1
    },
    {
      title: "Advanced Dental Solutions", 
      subtitle: "From routine cleanings to complex procedures, we provide comprehensive dental care in a comfortable environment.",
      image: heroImage2
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
      <section className="relative min-h-screen overflow-hidden pt-32 md:pt-0">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {heroSlides.map((slide, index) => (
              <div key={index} className="embla__slide flex-none w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-hero z-10"></div>
                <div 
                  className="hero-bg absolute inset-0 bg-cover bg-center transform transition-transform duration-[20s] ease-linear"
                  style={{ backgroundImage: `url(${slide.image})` }}
                ></div>
                
                {/* Animated overlay particles */}
                <div className="absolute inset-0 z-15">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-ping"></div>
                  <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-primary/20 rounded-full animate-bounce"></div>
                </div>
                
                <div className="relative z-20 container mx-auto px-4 min-h-screen flex items-center justify-center text-center text-white py-20 md:py-0">
                  <div className="hero-content max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight transform">
                      {slide.title.split(' ').map((word, idx) => 
                        word === 'Priority' || word === 'Solutions' ? (
                          <span key={idx} className="text-primary bg-black/20 px-2 py-1 rounded-lg backdrop-blur-sm inline-block mx-1 animate-pulse">{word} </span>
                        ) : (
                          <span key={idx} className="drop-shadow-2xl">{word} </span>
                        )
                      )}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto drop-shadow-lg animate-fade-in-scale">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up">
                      <Button 
                        className="btn-primary bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-medium group shadow-glow transform hover:scale-105 transition-all duration-300"
                        asChild
                      >
                        <Link to="/contact">
                          Book Appointment
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-secondary px-8 py-4 rounded-full text-lg font-medium transform hover:scale-105 transition-all duration-300"
                        asChild
                      >
                        <Link to="/services">Our Services</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation with enhanced styling */}
        <button 
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-primary/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300 shadow-glow"
          onClick={scrollPrev}
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
        <button 
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-primary/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300 shadow-glow"
          onClick={scrollNext}
        >
          <ChevronRight className="w-7 h-7" />
        </button>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-primary bg-white/10 backdrop-blur-sm rounded-full flex justify-center shadow-glow">
            <div className="w-1 h-3 bg-primary rounded-full animate-bounce mt-2"></div>
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
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Advanced Technology</h4>
                    <p className="text-muted-foreground text-sm">Latest dental equipment and techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Expert Team</h4>
                    <p className="text-muted-foreground text-sm">Experienced and certified professionals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Comfortable Care</h4>
                    <p className="text-muted-foreground text-sm">Patient-focused, gentle treatments</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
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