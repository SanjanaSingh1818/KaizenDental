import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, ZoomIn } from 'lucide-react';
import gsap from 'gsap';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filtered gallery images based on the selected category
  const galleryImages = [
    {
      id: 1,
      src: "/uploads/kaizen3.webp",
      alt: "Modern dental clinic reception area",
      category: "Clinic Interior"
    },
    {
      id: 2,
      src: "/uploads/img1.webp",
      alt: "Advanced dental treatment room",
      category: "Treatment Rooms"
    },
    {
      id: 3,
      src: "/uploads/img7.jpg",
      alt: "Happy patient with beautiful smile",
      category: "Patient Smiles"
    },
    {
      id: 4,
      src: "/uploads/img3.jpg",
      alt: "Dental team performing procedure",
      category: "Results"
    },
    {
      id: 5,
      src: "/uploads/img4.jpg",
      alt: "State-of-the-art dental equipment",
      category: "Results"
    },
    {
      id: 6,
      src: "/uploads/kaizen4.jpg",
      alt: "Comfortable waiting area",
      category: "Clinic Interior"
    },
    {
      id: 7,
      src: "/uploads/img5.jpg",
      alt: "Before and after dental treatment",
      category: "Results"
    },
    {
      id: 8,
      src: "/uploads/img6.jpg",
      alt: "Pediatric dental care room",
      category: "Results"
    },
    {
      id: 9,
      src: "/uploads/img6.png",
      alt: "Dental implant procedure",
      category: "Results"
    },
    {
      id: 10,
      src: "/uploads/img8.jpg",
      alt: "Orthodontic treatment results",
      category: "Results"
    },
    {
      id: 11,
      src: "/uploads/img10.jpg",
      alt: "Sterilization and hygiene area",
      category: "Results"
    },
    {
      id: 12,
      src: "/uploads/11.png",
      alt: "Consultation room",
      category: "Results"
    },
    {
      id: 13,
      src: "/uploads/img2.webp",
      alt: "Advanced dental treatment room",
      category: "Treatment Rooms"
    },
    {
      id: 14,
      src: "/uploads/img9.jpg",
      alt: "Advanced dental treatment room",
      category: "Treatment Rooms"
    },
      {
      id: 15,
      src: "/uploads/3.png",
      alt: "Consultation room",
      category: "Results"
    },
      {
      id: 16,
      src: "/uploads/4.png",
      alt: "Consultation room",
      category: "Results"
    },
      {
      id: 17,
      src: "/uploads/5.png",
      alt: "Consultation room",
      category: "Results"
    },
      {
      id: 18,
      src: "/uploads/6.png",
      alt: "Consultation room",
      category: "Results"
    },
      {
      id: 19,
      src: "/uploads/7.png",
      alt: "Consultation room",
      category: "Results"
    },
      {
      id: 20,
      src: "/uploads/8.png",
      alt: "Consultation room",
      category: "Results"
    },
      {
      id: 21,
      src: "/uploads/9.png",
      alt: "Consultation room",
      category: "Results"
    },
      {
      id: 22,
      src: "/uploads/10.png",
      alt: "Consultation room",
      category: "Results"
    },
      {
      id: 23,
      src: "/uploads/i1.png",
      alt: "Consultation room",
      category: "Results"
    },
      {
      id: 24,
      src: "/uploads/i2.jpg",
      alt: "Consultation room",
      category: "Results"
    },
  ];

  const categories = ["All", "Clinic Interior", "Treatment Rooms", "Patient Smiles", "Results"];

  // Filtering the images based on selected category
  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter((img) => img.category === selectedCategory);

  useEffect(() => {
    // Applying GSAP animations for gallery items
    gsap.fromTo('.gallery-item', 
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.6, 
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.gallery-grid',
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <div className="min-h-screen pt-32">
      {/* Header Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Our <span className="text-accent">Gallery</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Take a look at our modern facilities, advanced technology, and the beautiful smiles we've created for our patients.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`rounded-full px-6 py-2 ${
                  selectedCategory === category 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-primary/10"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="gallery-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <Card 
                key={image.id} 
                className="gallery-item group cursor-pointer overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary/80 to-transparent p-4">
                      <p className="text-white text-sm font-medium">{image.category}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Button
              variant="ghost"
              size="sm"
              className="absolute -top-12 right-0 text-white hover:text-accent"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </Button>
            <img 
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Ready to Experience Our Care?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Visit our modern facilities and experience world-class dental care in a comfortable environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-accent hover:bg-accent-hover text-accent-foreground px-8 py-4 rounded-full text-lg font-medium"
              asChild
            >
              <a href="/contact">Book a Visit</a>
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 rounded-full text-lg font-medium"
              asChild
            >
              <a href="tel:+919953909390">Call Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
