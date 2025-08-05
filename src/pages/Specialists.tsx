import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Award, Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Specialists = () => {
  useEffect(() => {
    gsap.fromTo('.specialist-card',
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.specialists-grid',
          start: 'top 80%',
        }
      }
    );
  }, []);

  const specialists = [
    {
      name: "Dr. Priya Sharma",
      specialty: "Chief Dental Surgeon & Implantologist",
      experience: "15+ Years",
      education: "BDS, MDS (Oral & Maxillofacial Surgery)",
      rating: 4.9,
      reviews: 156,
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png",
      bio: "Dr. Priya is a highly experienced dental surgeon specializing in dental implants and oral surgery. She has successfully performed over 2000 dental implant procedures with a 98% success rate.",
      specializations: ["Dental Implants", "Oral Surgery", "Full Mouth Rehabilitation"],
      awards: ["Best Implantologist 2023", "Excellence in Dental Care"],
    },
    {
      name: "Dr. Rajesh Kumar",
      specialty: "Orthodontist & Aligners Specialist",
      experience: "12+ Years",
      education: "BDS, MDS (Orthodontics)",
      rating: 4.8,
      reviews: 124,
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png",
      bio: "Dr. Rajesh specializes in modern orthodontic treatments including invisible aligners and digital orthodontics. He has transformed over 1500 smiles with his innovative approaches.",
      specializations: ["Invisible Aligners", "Braces", "Digital Orthodontics"],
      awards: ["Orthodontist of the Year 2022", "Innovation in Aligners"],
    },
    {
      name: "Dr. Anita Verma",
      specialty: "Endodontist & Root Canal Specialist",
      experience: "10+ Years",
      education: "BDS, MDS (Conservative Dentistry & Endodontics)",
      rating: 4.9,
      reviews: 89,
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png",
      bio: "Dr. Anita is an expert in painless root canal treatments and restorative dentistry. Her gentle approach and advanced techniques ensure patient comfort during procedures.",
      specializations: ["Root Canal Treatment", "Restorative Dentistry", "Cosmetic Fillings"],
      awards: ["Excellence in Endodontics", "Patient Care Award"],
    },
    {
      name: "Dr. Suresh Gupta",
      specialty: "Periodontist & Gum Specialist",
      experience: "14+ Years",
      education: "BDS, MDS (Periodontics)",
      rating: 4.7,
      reviews: 67,
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png",
      bio: "Dr. Suresh specializes in treating gum diseases and performing advanced periodontal surgeries. He focuses on preserving natural teeth through comprehensive gum care.",
      specializations: ["Gum Treatment", "Periodontal Surgery", "Laser Therapy"],
      awards: ["Periodontal Excellence Award", "Research in Gum Disease"],
    },
    {
      name: "Dr. Meera Patel",
      specialty: "Pediatric Dentist",
      experience: "8+ Years",
      education: "BDS, MDS (Pedodontics)",
      rating: 4.9,
      reviews: 142,
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png",
      bio: "Dr. Meera specializes in children's dental care with a focus on creating positive dental experiences. She uses child-friendly techniques to ensure comfortable treatments.",
      specializations: ["Children's Dentistry", "Preventive Care", "Dental Education"],
      awards: ["Child-Friendly Dentist Award", "Pediatric Care Excellence"],
    },
    {
      name: "Dr. Vikram Singh",
      specialty: "Oral Surgeon & Maxillofacial Specialist",
      experience: "16+ Years",
      education: "BDS, MDS (Oral & Maxillofacial Surgery)",
      rating: 4.8,
      reviews: 98,
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png",
      bio: "Dr. Vikram is an experienced oral surgeon specializing in complex extractions, jaw surgeries, and facial trauma. His expertise includes advanced surgical techniques.",
      specializations: ["Oral Surgery", "Wisdom Tooth Removal", "Jaw Surgery"],
      awards: ["Surgical Excellence Award", "Advanced Surgery Certification"],
    }
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Header Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Our <span className="text-accent">Specialists</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Meet our team of experienced dental professionals dedicated to providing exceptional care with expertise and compassion.
          </p>
        </div>
      </section>

      {/* Specialists Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="specialists-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialists.map((specialist, index) => (
              <Card key={index} className="specialist-card doctor-card bg-gradient-card border-0 shadow-soft overflow-hidden">
                <CardContent className="p-0">
                  {/* Doctor Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={specialist.image}
                      alt={specialist.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent"></div>
                    
                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{specialist.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-1">{specialist.name}</h3>
                    <p className="text-primary font-medium mb-2">{specialist.specialty}</p>
                    <p className="text-sm text-muted-foreground mb-4">{specialist.education}</p>
                    
                    {/* Experience and Reviews */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium">{specialist.experience}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {specialist.reviews} reviews
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {specialist.bio}
                    </p>

                    {/* Specializations */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-foreground mb-2">Specializations:</h4>
                      <div className="flex flex-wrap gap-2">
                        {specialist.specializations.map((spec, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Awards */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-foreground mb-2">Awards:</h4>
                      <div className="space-y-1">
                        {specialist.awards.map((award, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-accent rounded-full"></div>
                            <span className="text-xs text-muted-foreground">{award}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button 
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-sm"
                        asChild
                      >
                        <Link to="/contact">
                          <Calendar className="w-4 h-4 mr-2" />
                          Book Appointment
                        </Link>
                      </Button>
                      <Button 
                        variant="outline"
                        className="rounded-full px-4"
                        asChild
                      >
                        <a href="tel:+919650780998">
                          <Phone className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-foreground">
            Ready to Meet Our Specialists?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our experienced team and take the first step towards your perfect smile.
          </p>
          <Button 
            className="bg-accent hover:bg-accent-hover text-accent-foreground px-8 py-4 rounded-full text-lg font-medium"
            asChild
          >
            <Link to="/contact">Book Your Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Specialists;