import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Services = () => {
  useEffect(() => {
    gsap.fromTo('.service-card',
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
        }
      }
    );
  }, []);

  const services = [
    {
      title: "Dental Implants",
      description: "Permanent solution for missing teeth with natural look and feel",
      detailedDescription: "Our dental implants provide a permanent, comfortable solution for missing teeth. Using advanced titanium implants that integrate with your jawbone, we restore both function and aesthetics.",
      icon: "🦷",
      features: ["Permanent solution", "Natural appearance", "Preserves jawbone", "High success rate"],
      duration: "2-6 months",
      price: "₹25,000 - ₹50,000",
      rating: 4.9,
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png"
    },
    {
      title: "Root Canal Treatment",
      description: "Save your natural tooth with our painless root canal procedures",
      detailedDescription: "Advanced endodontic treatment to save severely damaged or infected teeth. Our painless techniques ensure comfort throughout the procedure.",
      icon: "🔧",
      features: ["Painless procedure", "Saves natural tooth", "Advanced techniques", "Single visit option"],
      duration: "1-2 visits",
      price: "₹8,000 - ₹15,000",
      rating: 4.8,
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png"
    },
    {
      title: "Teeth Aligners & Braces",
      description: "Straighten your teeth with modern orthodontic solutions",
      detailedDescription: "Transform your smile with our comprehensive orthodontic treatments including traditional braces and modern clear aligners.",
      icon: "📏",
      features: ["Invisible aligners", "Traditional braces", "Digital planning", "Regular monitoring"],
      duration: "12-24 months",
      price: "₹40,000 - ₹1,20,000",
      rating: 4.9,
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png"
    },
    {
      title: "Teeth Whitening",
      description: "Professional whitening for a brighter, more confident smile",
      detailedDescription: "Professional teeth whitening treatments that safely and effectively brighten your smile by several shades in just one session.",
      icon: "✨",
      features: ["Immediate results", "Safe procedures", "Long-lasting effects", "Professional grade"],
      duration: "1 hour",
      price: "₹8,000 - ₹12,000",
      rating: 4.7,
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png"
    },
    {
      title: "Oral Surgery",
      description: "Advanced surgical procedures with minimal discomfort",
      detailedDescription: "Comprehensive oral and maxillofacial surgery including wisdom tooth removal, jaw surgery, and surgical extractions.",
      icon: "🏥",
      features: ["Minimal discomfort", "Advanced techniques", "Quick recovery", "Expert surgeons"],
      duration: "30 minutes - 2 hours",
      price: "₹5,000 - ₹25,000",
      rating: 4.8,
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png"
    },
    {
      title: "Preventive Care",
      description: "Regular checkups and cleanings to maintain oral health",
      detailedDescription: "Comprehensive preventive dental care including regular cleanings, examinations, and fluoride treatments to maintain optimal oral health.",
      icon: "🛡️",
      features: ["Regular checkups", "Professional cleaning", "Fluoride treatment", "Oral health education"],
      duration: "30-60 minutes",
      price: "₹2,000 - ₹5,000",
      rating: 4.9,
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png"
    },
    {
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with our cosmetic dental procedures",
      detailedDescription: "Complete smile makeovers including veneers, crowns, and aesthetic treatments to give you the perfect smile you've always wanted.",
      icon: "💎",
      features: ["Smile makeover", "Veneers & crowns", "Aesthetic treatments", "Natural results"],
      duration: "2-4 visits",
      price: "₹15,000 - ₹80,000",
      rating: 4.8,
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png"
    },
    {
      title: "Pediatric Dentistry",
      description: "Specialized dental care for children in a friendly environment",
      detailedDescription: "Child-friendly dental care with specialized techniques and equipment designed to make dental visits comfortable and positive for young patients.",
      icon: "👶",
      features: ["Child-friendly approach", "Specialized techniques", "Preventive focus", "Education for parents"],
      duration: "30-45 minutes",
      price: "₹1,500 - ₹8,000",
      rating: 4.9,
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png"
    },
    {
      title: "Emergency Dental Care",
      description: "24/7 emergency dental services for urgent dental problems",
      detailedDescription: "Round-the-clock emergency dental care for sudden dental pain, trauma, or urgent dental problems with immediate relief and treatment.",
      icon: "🚨",
      features: ["24/7 availability", "Immediate relief", "Urgent care", "Pain management"],
      duration: "As needed",
      price: "₹3,000 - ₹15,000",
      rating: 4.7,
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png"
    }
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Header Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Comprehensive dental care services designed to keep your smile healthy and beautiful with the latest technology and techniques.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card bg-gradient-card border-0 shadow-soft hover:shadow-strong transition-all duration-300 overflow-hidden group">
                <CardContent className="p-0">
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent"></div>
                    
                    {/* Icon */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="text-2xl">{service.icon}</span>
                    </div>

                    {/* Rating */}
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{service.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Check className="w-3 h-3 text-primary" />
                            <span className="text-xs text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Duration and Price */}
                    <div className="flex items-center justify-between mb-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Duration: </span>
                        <span className="font-medium">{service.duration}</span>
                      </div>
                      <div className="text-primary font-semibold">{service.price}</div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button 
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-sm group"
                        asChild
                      >
                        <Link to="/contact">
                          Book Now
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                      <Button 
                        variant="outline"
                        className="rounded-full px-4 text-sm"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-foreground">
              Why Choose <span className="text-primary">DentalCare+</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine advanced technology with personalized care to deliver exceptional dental services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🏆",
                title: "Expert Team",
                description: "Highly qualified specialists with 15+ years experience"
              },
              {
                icon: "⚡",
                title: "Advanced Technology",
                description: "State-of-the-art equipment and latest dental techniques"
              },
              {
                icon: "💎",
                title: "Quality Care",
                description: "Personalized treatment plans for optimal results"
              },
              {
                icon: "🔒",
                title: "Safe & Hygienic",
                description: "Strict sterilization protocols and safety measures"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule your consultation today and take the first step towards a healthier, more beautiful smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-accent hover:bg-accent-hover text-accent-foreground px-8 py-4 rounded-full text-lg font-medium"
              asChild
            >
              <Link to="/contact">Book Consultation</Link>
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 rounded-full text-lg font-medium"
              asChild
            >
              <a href="tel:+919650780998">Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;