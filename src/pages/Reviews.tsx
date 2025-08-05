import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Reviews = () => {
  useEffect(() => {
    gsap.fromTo('.review-card',
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.reviews-grid',
          start: 'top 80%',
        }
      }
    );
  }, []);

  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      date: "2 weeks ago",
      treatment: "Dental Implants",
      review: "Excellent service! Dr. Priya Sharma made my dental implant procedure completely painless. The entire team is professional and caring. I highly recommend DentalCare+ for anyone looking for quality dental treatment.",
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png",
      verified: true
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      rating: 5,
      date: "1 month ago",
      treatment: "Teeth Whitening",
      review: "Amazing results! My teeth are now several shades whiter. The procedure was quick and comfortable. The staff explained everything clearly and made sure I was comfortable throughout.",
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png",
      verified: true
    },
    {
      id: 3,
      name: "Anjali Verma",
      rating: 5,
      date: "3 weeks ago",
      treatment: "Root Canal Treatment",
      review: "I was terrified of getting a root canal, but Dr. Anita made it completely painless. The clinic is very clean and modern. Couldn't ask for better dental care!",
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png",
      verified: true
    },
    {
      id: 4,
      name: "Suresh Gupta",
      rating: 5,
      date: "2 months ago",
      treatment: "Orthodontic Treatment",
      review: "My daughter got braces here and the transformation is incredible! The team is great with kids and made the entire process enjoyable. Highly recommended for pediatric dental care.",
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png",
      verified: true
    },
    {
      id: 5,
      name: "Meena Patel",
      rating: 5,
      date: "1 week ago",
      treatment: "Preventive Care",
      review: "Regular checkups here have kept my teeth healthy for years. The preventive care program is excellent and the staff always reminds me of appointments. Very professional service.",
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png",
      verified: true
    },
    {
      id: 6,
      name: "Vikram Singh",
      rating: 5,
      date: "3 weeks ago",
      treatment: "Oral Surgery",
      review: "Had my wisdom teeth removed here. The surgery was smooth and recovery was faster than expected. Dr. Vikram is highly skilled and the aftercare instructions were very clear.",
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png",
      verified: true
    },
    {
      id: 7,
      name: "Kavya Reddy",
      rating: 5,
      date: "1 month ago",
      treatment: "Cosmetic Dentistry",
      review: "Got veneers done and I absolutely love my new smile! The results exceeded my expectations. The team took great care in matching the color and shape perfectly.",
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png",
      verified: true
    },
    {
      id: 8,
      name: "Arjun Malhotra",
      rating: 5,
      date: "2 weeks ago",
      treatment: "Emergency Care",
      review: "Had a dental emergency on a weekend and they accommodated me immediately. The quick response and excellent treatment saved my tooth. Grateful for their 24/7 emergency service.",
      image: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png",
      verified: true
    }
  ];

  const overallStats = {
    averageRating: 4.9,
    totalReviews: 847,
    fiveStarPercentage: 92,
    fourStarPercentage: 6,
    threeStarPercentage: 2
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating 
            ? "fill-yellow-400 text-yellow-400" 
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen pt-32">
      {/* Header Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Patient <span className="text-accent">Reviews</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Read what our patients say about their experience with our dental care services and team.
          </p>
        </div>
      </section>

      {/* Overall Statistics */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-card border-0 shadow-medium">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Average Rating */}
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">{overallStats.averageRating}</div>
                  <div className="flex justify-center mb-2">
                    {renderStars(5)}
                  </div>
                  <p className="text-muted-foreground">Based on {overallStats.totalReviews} reviews</p>
                </div>

                {/* Rating Distribution */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-sm w-8">5★</span>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${overallStats.fiveStarPercentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm w-8">{overallStats.fiveStarPercentage}%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm w-8">4★</span>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${overallStats.fourStarPercentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm w-8">{overallStats.fourStarPercentage}%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm w-8">3★</span>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${overallStats.threeStarPercentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm w-8">{overallStats.threeStarPercentage}%</span>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                  <p className="text-lg font-medium text-foreground mb-4">Share Your Experience</p>
                  <Button 
                    className="bg-accent hover:bg-accent-hover text-accent-foreground rounded-full px-6 py-3"
                    asChild
                  >
                    <Link to="/contact">Write a Review</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-foreground">
              What Our Patients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real experiences from real patients who trusted us with their dental care
            </p>
          </div>

          <div className="reviews-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={review.id} className="review-card bg-background border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="w-8 h-8 text-primary/30" />
                    {review.verified && (
                      <div className="flex items-center gap-1 text-xs text-success bg-success/10 px-2 py-1 rounded-full">
                        <ThumbsUp className="w-3 h-3" />
                        Verified
                      </div>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-sm text-muted-foreground">({review.rating}.0)</span>
                  </div>

                  {/* Review Text */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{review.review}"
                  </p>

                  {/* Patient Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src={review.image}
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{review.treatment}</span>
                        <span>{review.date}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Video Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-foreground">
              Patient Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch some of our patients share their transformation journeys and experiences with our dental care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Complete Smile Makeover",
                patient: "Sarah's Journey",
                thumbnail: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png"
              },
              {
                title: "Dental Implant Success",
                patient: "Raj's Story",
                thumbnail: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png"
              },
              {
                title: "Orthodontic Transformation",
                patient: "Maya's Experience",
                thumbnail: "/lovable-uploads/622a141c-4a91-48a1-a1e6-e04a95590dfe.png"
              }
            ].map((video, index) => (
              <Card key={index} className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer group">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <img 
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-6 border-l-accent-foreground border-y-4 border-y-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-1">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">{video.patient}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who have transformed their smiles with our expert dental care.
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

export default Reviews;