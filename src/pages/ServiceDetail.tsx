import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Star, Clock, DollarSign, ArrowLeft } from 'lucide-react';
import gsap from 'gsap';

const ServiceDetail = () => {
  const { serviceSlug } = useParams();

  useEffect(() => {
    gsap.fromTo('.service-detail-content',
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        stagger: 0.2
      }
    );
  }, []);

  const services = {
    'dental-implants': {
      title: "Dental Implants",
      description: "Permanent solution for missing teeth with natural look and feel",
      detailedDescription: "Our dental implants provide a permanent, comfortable solution for missing teeth. Using advanced titanium implants that integrate with your jawbone, we restore both function and aesthetics. The procedure involves placing a titanium post into the jawbone, which serves as a root for the replacement tooth. Over time, the implant fuses with the bone, creating a stable foundation for a crown, bridge, or denture.",
      icon: "🦷",
      features: [
        "Permanent solution that can last a lifetime",
        "Natural appearance indistinguishable from real teeth",
        "Preserves jawbone and facial structure", 
        "High success rate of 95-98%",
        "No impact on adjacent healthy teeth",
        "Improved chewing and speaking ability"
      ],
      duration: "2-6 months",
      price: "₹25,000 - ₹50,000",
      rating: 4.9,
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png",
      procedure: [
        "Initial consultation and 3D imaging",
        "Surgical placement of titanium implant",
        "Healing period (3-6 months) for osseointegration",
        "Placement of abutment",
        "Final crown placement and fitting"
      ],
      aftercare: [
        "Regular oral hygiene maintenance",
        "Avoid hard foods for first few weeks",
        "Regular dental checkups every 6 months",
        "Professional cleaning as recommended"
      ]
    },
    'root-canal': {
      title: "Root Canal Treatment",
      description: "Save your natural tooth with our painless root canal procedures",
      detailedDescription: "Advanced endodontic treatment to save severely damaged or infected teeth. Our painless techniques using modern rotary instruments and digital imaging ensure comfort throughout the procedure. We remove infected pulp, clean and disinfect the root canals, then fill and seal the space to prevent further infection.",
      icon: "🔧",
      features: [
        "Painless procedure with modern anesthesia",
        "Saves your natural tooth from extraction",
        "Advanced rotary instrumentation",
        "Single visit option available",
        "Digital imaging for precision",
        "High success rate over 90%"
      ],
      duration: "1-2 visits",
      price: "₹8,000 - ₹15,000",
      rating: 4.8,
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png",
      procedure: [
        "Comprehensive examination and X-rays",
        "Local anesthesia administration",
        "Access hole creation in the tooth",
        "Removal of infected pulp and cleaning",
        "Filling and sealing of root canals",
        "Crown placement if necessary"
      ],
      aftercare: [
        "Avoid chewing on treated tooth until permanent restoration",
        "Take prescribed medications as directed",
        "Maintain good oral hygiene",
        "Return for crown placement if recommended"
      ]
    },
    'aligners-braces': {
      title: "Teeth Aligners & Braces",
      description: "Straighten your teeth with modern orthodontic solutions",
      detailedDescription: "Transform your smile with our comprehensive orthodontic treatments including traditional braces and modern clear aligners. We use digital treatment planning to create customized treatment plans that efficiently move your teeth into their ideal positions.",
      icon: "📏",
      features: [
        "Invisible clear aligners available",
        "Traditional metal and ceramic braces",
        "Digital treatment planning",
        "Regular monitoring and adjustments",
        "Removable aligners for easy cleaning",
        "Faster treatment times with modern techniques"
      ],
      duration: "12-24 months",
      price: "₹40,000 - ₹1,20,000",
      rating: 4.9,
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png",
      procedure: [
        "Initial consultation and records",
        "Digital impressions and treatment planning",
        "Appliance fitting (braces or aligners)",
        "Regular adjustment appointments",
        "Progress monitoring with photos",
        "Retention phase with retainers"
      ],
      aftercare: [
        "Wear retainers as prescribed",
        "Maintain excellent oral hygiene",
        "Regular orthodontic checkups",
        "Follow dietary restrictions with braces"
      ]
    },
    'teeth-whitening': {
      title: "Teeth Whitening",
      description: "Professional whitening for a brighter, more confident smile",
      detailedDescription: "Professional teeth whitening treatments that safely and effectively brighten your smile by several shades in just one session. We use advanced whitening gels and LED light activation for optimal results while protecting your tooth enamel.",
      icon: "✨",
      features: [
        "Immediate results in one session",
        "Safe professional-grade procedures",
        "Long-lasting effects up to 3 years",
        "Custom whitening trays available",
        "LED light activation for better results",
        "Enamel-safe whitening agents"
      ],
      duration: "1 hour",
      price: "₹8,000 - ₹12,000",
      rating: 4.7,
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png",
      procedure: [
        "Pre-whitening examination",
        "Gum protection application",
        "Professional whitening gel application",
        "LED light activation (15-20 minutes)",
        "Multiple whitening cycles as needed",
        "Post-treatment fluoride application"
      ],
      aftercare: [
        "Avoid staining foods/drinks for 48 hours",
        "Use whitening toothpaste as recommended",
        "Regular dental cleanings",
        "Touch-up treatments as needed"
      ]
    },
    'oral-surgery': {
      title: "Oral Surgery",
      description: "Advanced surgical procedures with minimal discomfort",
      detailedDescription: "Comprehensive oral and maxillofacial surgery including wisdom tooth removal, jaw surgery, and surgical extractions. Our experienced surgeons use advanced techniques and sedation options to ensure patient comfort and optimal healing.",
      icon: "🏥",
      features: [
        "Minimal discomfort with advanced anesthesia",
        "Latest surgical techniques",
        "Quick recovery protocols",
        "Expert oral surgeons",
        "Sedation options available",
        "Post-operative care instructions"
      ],
      duration: "30 minutes - 2 hours",
      price: "₹5,000 - ₹25,000",
      rating: 4.8,
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png",
      procedure: [
        "Pre-surgical consultation and imaging",
        "Anesthesia or sedation administration",
        "Surgical procedure execution",
        "Suturing if necessary",
        "Post-operative instructions",
        "Follow-up appointment scheduling"
      ],
      aftercare: [
        "Apply ice packs to reduce swelling",
        "Take prescribed pain medications",
        "Eat soft foods for several days",
        "Avoid smoking and straws",
        "Return for suture removal if needed"
      ]
    },
    'preventive-care': {
      title: "Preventive Care",
      description: "Regular checkups and cleanings to maintain oral health",
      detailedDescription: "Comprehensive preventive dental care including regular cleanings, examinations, and fluoride treatments to maintain optimal oral health. Early detection and prevention of dental problems saves time, money, and discomfort.",
      icon: "🛡️",
      features: [
        "Comprehensive oral examinations",
        "Professional dental cleanings",
        "Fluoride treatments for cavity prevention",
        "Oral health education and tips",
        "Early detection of dental problems",
        "Customized prevention plans"
      ],
      duration: "30-60 minutes",
      price: "₹2,000 - ₹5,000",
      rating: 4.9,
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png",
      procedure: [
        "Medical and dental history review",
        "Comprehensive oral examination",
        "Digital X-rays if necessary",
        "Professional teeth cleaning",
        "Fluoride treatment application",
        "Oral hygiene instruction and tips"
      ],
      aftercare: [
        "Brush twice daily with fluoride toothpaste",
        "Floss daily between teeth",
        "Use mouthwash as recommended",
        "Schedule regular checkups every 6 months"
      ]
    }
  };

  const service = serviceSlug ? services[serviceSlug as keyof typeof services] : null;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="min-h-screen pt-32">
      {/* Header Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="service-detail-content">
            <div className="flex items-center gap-4 mb-6">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-secondary"
                asChild
              >
                <Link to="/services">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Services
                </Link>
              </Button>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="text-5xl">{service.icon}</div>
              <div className="flex-1">
                <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
                  {service.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-3xl">
                  {service.description}
                </p>
                
                <div className="flex items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{service.rating} Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    <span>{service.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Service Image */}
              <div className="service-detail-content">
                <Card className="overflow-hidden shadow-strong">
                  <CardContent className="p-0">
                    <div className="relative h-64 md:h-96">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent"></div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Detailed Description */}
              <div className="service-detail-content">
                <h2 className="text-3xl font-playfair font-bold mb-4 text-foreground">
                  About This Treatment
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.detailedDescription}
                </p>
              </div>

              {/* Key Features */}
              <div className="service-detail-content">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Key Features & Benefits</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Procedure Steps */}
              <div className="service-detail-content">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Treatment Procedure</h3>
                <div className="space-y-4">
                  {service.procedure.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-muted-foreground">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Aftercare */}
              <div className="service-detail-content">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Post-Treatment Care</h3>
                <div className="bg-muted rounded-lg p-6">
                  <div className="space-y-3">
                    {service.aftercare.map((care, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">{care}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-40 space-y-6">
                {/* Quick Info Card */}
                <Card className="service-detail-content bg-gradient-card border-0 shadow-soft">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Quick Information</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium">{service.duration}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Price Range:</span>
                        <span className="font-medium text-primary">{service.price}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Rating:</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{service.rating}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* CTA Card */}
                <Card className="service-detail-content bg-gradient-primary text-white border-0 shadow-strong">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
                    <p className="text-white/90 mb-6">
                      Book your consultation today and take the first step towards a healthier smile.
                    </p>
                    <div className="space-y-3">
                      <Button 
                        className="w-full bg-accent hover:bg-accent-hover text-accent-foreground"
                        asChild
                      >
                        <Link to="/contact">
                          Book Consultation
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      <Button 
                        variant="outline"
                        className="w-full border-white text-white hover:bg-white hover:text-secondary"
                        asChild
                      >
                        <a href="tel:+919650780998">Call Now</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Emergency Contact */}
                <Card className="service-detail-content bg-muted border-0">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Need Emergency Care?</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      We're available 24/7 for dental emergencies
                    </p>
                    <Button 
                      variant="outline"
                      className="w-full"
                      asChild
                    >
                      <a href="tel:+919650780998">Emergency Hotline</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;