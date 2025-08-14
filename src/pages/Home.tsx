import { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Star, Users, Award, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import useEmblaCarousel from 'embla-carousel-react';
import heroImage1 from '@/assets/kaizen3.webp';
import heroImage2 from '@/assets/banner.png';

// Hero slides and stats data
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
  { number: "499", label: "Happy Patients", icon: Users },
  { number: "16", label: "Years Experience", icon: Award },
  { number: "23", label: "Hours Emergency Care", icon: Clock },
  { number: "98", label: "Success Rate %", icon: Star },
];

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [counting, setCounting] = useState<{ [key: string]: number }>({});

  // Embla carousel setup
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

  // Stats counting functionality
  useEffect(() => {
    stats.forEach(stat => {
      const count = parseInt(stat.number);
      let i = 0;
      const interval = setInterval(() => {
        setCounting(prev => ({
          ...prev,
          [stat.label]: i // Update the count for the respective stat
        }));
        i++;
        if (i > count) clearInterval(interval); // Stop once the count reaches the target number
      }, 50); // Control the speed of counting (lower = faster)
    });
  }, [stats]);

  // Auto-scroll functionality for carousel
  useEffect(() => {
    if (emblaApi) {
      const autoScroll = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(autoScroll); // Clear interval when component unmounts
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
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
                          <span key={idx} className="text-[#fff] inline-block mx-1">{word} </span>
                        ) : (
                          <span key={idx} className="drop-shadow-2xl">{word} </span>
                        )
                      )}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto drop-shadow-lg">
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

      {/* Stats Section with Counting Animation */}
      <section className="stats-section pb-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-accent" />
                </div>
                <div className="stat-number text-4xl md:text-5xl font-bold mb-2" data-count={stat.number}>
                  {counting[stat.label] || 0}
                  {stat.label === 'Happy Patients' && '+'}
                  {stat.label === 'Years Experience' && '+'}
                  {stat.label === 'Success Rate %' && '%'}
                  {stat.label === 'Hours Emergency Care' && '/7'}
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
                About <span className="text-primary">Kaizen Dental</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                 At Kaizen Dental, we are committed to providing top-quality dental care, with a focus on improving the health and appearance of our patients' smiles. With over 15 years of experience in the dental field, we have built a strong reputation for delivering excellent care to the Noida community.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                 We pride ourselves on using cutting-edge dental technology and techniques to ensure our patients receive the most effective and comfortable treatments available. From routine check-ups to advanced procedures, we provide comprehensive services designed to meet all of your dental needs. Whether you need a simple cleaning, dental implants, root canal treatment or orthodontics, our expert team is here to help you achieve a healthy, beautiful smile.
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

  {/* Added Points */}
  <div className="flex items-start gap-3">
    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
    <div>
      <h4 className="font-semibold text-foreground mb-1">Personalized Treatment</h4>
      <p className="text-muted-foreground text-sm">Tailored treatment plans based on individual needs</p>
    </div>
  </div>
  <div className="flex items-start gap-3">
    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
    <div>
      <h4 className="font-semibold text-foreground mb-1">Long-Term Oral Health</h4>
      <p className="text-muted-foreground text-sm">Focused on preventing future dental issues through comprehensive care</p>
    </div>
  </div>
</div>

              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full group"
                asChild
              >
                <Link to="/specialists">
                  Meet Our Specialists
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Image */}
            <div className="about-image">
              <Card className="overflow-hidden shadow-strong">
                <CardContent className="p-0">
                  <div className="relative h-100 lg:h-[800px]">
                    <img 
                      src="/public/Kaizen1.webp"
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
    </div>
  );
};

export default Home;
