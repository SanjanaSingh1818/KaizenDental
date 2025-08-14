import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Reviews = () => {
  const [filter, setFilter] = useState("All");

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
      name: "Sneh Dutt",
      rating: 5,
      date: "9 months ago",
      treatment: "Dental Implants",
      review: "Dr.Monika Kamboj  is knowledgeable, compassionate, professional with genuine friendly  attitude. Got Dental Implants.",
      verified: true
    },
 {
      id: 2,
      name: "Jaskiran Cheema",
      rating: 5,
      date: "2 years ago",
      treatment: "Dental Implants",
      review: "I got my father’s implant done by Dr Monica six months back. Always have a great, smooth experience in Kaizen Dental clinic.",
      verified: true
    },

    {
      id: 3,
      name: "Dipti Arora",
      rating: 5,
      date: "3 years ago",
      treatment: "Dental Implants",
      review: "Dr Monica was very patient with my mother and provided her with best implants and overall services during the six months the process took.",
      verified: true
    },

    {
      id: 4,
      name: "Deepankar Gupta",
      rating: 5,
      date: "A month ago",
      treatment: "Root Canal Treatment",
      review: "Dr Monika is expert dentist, she has helped me save teeth involving procedure like RCT and re-RCT. She clearly explains diagnosis and treatment of condition.",
      verified: true
    },
    {
      id: 5,
      name: "O.P Saini",
      rating: 5,
      date: "A year ago",
      treatment: "Root Canal Treatment",
      review: "Dr Monika is an experienced dentist. Charges are very competitive and genuine. I have gone through root canal treatment. She takes care of the patients and gives proper guidance. ",
      verified: true
    },
    {
      id: 6,
      name: "Hitesh Bakshi",
      rating: 5,
      date: "2 years ago",
      treatment: "Root Canal Treatment",
      review: "I would like to recommend Kaizen Dental / Dr. Monica, for dental treatment to everyone. Had treatment of RCT and overall jaw care of my mother (aged 67).",
      verified: true
    },
    {
      id: 7,
      name: "Ruchi Luthra",
      rating: 5,
      date: "A year ago",
      treatment: "Root Canal Treatment",
      review: "… in Kaizen dental.. My 6 years old daughter had so much of cavity full tooth.. In fact she had to go through root canal several times.",
      verified: true
    },
    {
      id: 8,
      name: "Sunil Rathee",
      rating: 5,
      date: "3 years ago",
      treatment: "Root Canal Treatment",
      review: "Highly professional doc with a touch of patient empathy. I had a root canal few days back and I loved how the doc was constantly in touch to ask for my well being.",
      verified: true
    },
    {
      id: 9,
      name: "Puneet kamboj",
      rating: 5,
      date: "3 years ago",
      treatment: "Root Canal Treatment",
      review: "Dr. Monika did my root canal back in 2016. Got such good hands… didn’t even feel the injection.",
      verified: true
    },
    {
      id: 10,
      name: "Abhishek Sharma",
      rating: 5,
      date: "2 months ago",
      treatment: "Tooth Extraction",
      review: "Thanks to her skill, she was able to save my tooth with an RCT when other dentists recommended extraction. Highly recommended!",
      verified: true
    },
    {
      id: 11,
      name: "Pa Gt",
      rating: 5,
      date: "2 months ago",
      treatment: "Tooth Extraction",
      review: "Very genuine and effective treatment. While other doctors told me that my tooth needs to be extracted, Dr Monika resolved the issue without any need for extraction.",
    },
    {
      id: 12,
      name: "Prerna Singhal",
      rating: 5,
      date: "2 months ago",
      treatment: "Tooth Extraction",
      review: "Happy to share my experience with (Kaizen Dental Clinic) DR. MONIKA KAMBOJ .. i got my tooth extracted twice from her.",
    },
    {
      id: 13,
      name: "Subhajit Sengupta",
      rating: 5,
      date: "A year ago",
      treatment: "Tooth Extraction",
      review: "Dr Monika at Kaizen Dental is very good. I got 1 RCT and 2 extractions done. The entire process was almost painless.",
    },
    {
      id: 14,
      name: "Sangeeta Vaidhyanathan",
      rating: 5,
      date: "11 months ago",
      treatment: "Tooth Extraction",
      review: "Then after my RCT, I recommended her for my mother in law. She had whole teeth extraction and replaced with dentures and implants.",
    },
    {
      id: 15,
      name: "Deepika Rai",
      rating: 5,
      date: "9 months ago",
      treatment: "Tooth Extraction",
      review: "I consulted Dr Monica yesterday for wisdom tooth extraction. Doctor is warm and Procedure was done so gently with no pain, fees is reasonable, clinic is well managed with no waiting time.",
    },
    {
      id: 16,
      name: "Banya Saikia",
      rating: 5,
      date: "a year ago",
      treatment: "Tooth Extraction",
      review: "Exceptional consultation experience at Kaizen dental by Dr. Monica Kamboj, I got my mother tooth extraction done at her clinic and the procedure went very smoothly.",
    },
    {
      id: 17,
      name: "Dipti Yogesh Sonawane",
      rating: 5,
      date: "A year ago",
      treatment: "Fillings",
      review: "Dr. Monika explains what needs to be done and provides valuable advice .I got my RTC and fillings done from her. ",
    },
    {
      id: 18,
      name: "Ila Goel",
      rating: 5,
      date: "A year ago",
      treatment: "Fillings",
      review: "I went for RCT and fillings for myself any teenage daughters. The entire process was smooth and Dr Monika educated throughout the process making us feel comfortable.",
      verified: true
    },
    {
      id: 19,
      name: "Amit Chaudhary",
      rating: 5,
      date: "A year ago",
      treatment: "Fillings",
      review: "RTC treatment, permanent filling and cleaning done for my daughter. It was so smooth and professionally done within genuine charges.",
      verified: true
    },
    {
      id: 20,
      name: "Debasmita Chaudhury",
      rating: 5,
      date: "8 months ago",
      treatment: "Fillings",
      review: "Dr.Monica has become my family dentist.She is very warm,listens and explains everything so perfectly.I have my rct done , filling and many more from her.",
      verified: true
    },
    {
      id: 21,
      name: "Ritesh Rawat",
      rating: 5,
      date: "10 months ago",
      treatment: "Fillings",
      review: "Visited this clinic for dental fillings. It was a comfortable process. Doctor is very knowledgeable, patient, helpful. Highly recommended.",
      verified: true
    },
     {
      id: 22,
      name: "Ashish Seth",
      rating: 5,
      date: "11 months ago",
      treatment: "Braces",
      review: "Visited this clinic for braces. I recommend the doctor.",
      verified: true
    },
    {
      id: 23,
      name: "Prabhat Singh",
      rating: 5,
      date: "A year ago",
      treatment: "Braces",
      review: "Visited this clinic for braces. I recommend the doctor.",
      verified: true
    },

    
  ];

  const overallStats = {
    averageRating: 5.0,
    totalReviews: 103,
    fiveStarPercentage: 92,
    fourStarPercentage: 6,
    threeStarPercentage: 2
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  // Filter reviews based on the selected category
  const filteredReviews = filter === "All" ? reviews : reviews.filter(review => review.treatment === filter);

  // Get the first letter of the name
  const getFirstLetter = (name: string) => name.charAt(0).toUpperCase();

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
                    <Link to="https://www.google.com/search?sca_esv=7466096905fafdc9&rlz=1C1ONGR_enIN1005IN1005&sxsrf=AE3TifOa-ulr9PbrcocYXINdhEimYCHs1g:1754902744737&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E7wJRqU0wmEax6Mtmeh4mxxC8Tk7GsAKyEXQQhZXs5hwScVXj7ItEUpxhamuw9k9LN3WBcGrQ7YlBg_30Sn8CsGde4A3&q=Kaizen+Dental+Reviews&sa=X&ved=2ahUKEwiDsNyVsoKPAxU4sVYBHTNZAMkQ0bkNegQIQBAE&biw=1536&bih=695&dpr=1.25">Write a Review</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What Our Patients Say Section */}
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

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Button className="w-auto" onClick={() => setFilter("All")}>All</Button>
            <Button className="w-auto" onClick={() => setFilter("Dental Implants")}>Dental Implants</Button>
            <Button className="w-auto" onClick={() => setFilter("Braces")}>Braces</Button>
            <Button className="w-auto" onClick={() => setFilter("Root Canal Treatment")}>Root Canal Treatment</Button>
            <Button className="w-auto" onClick={() => setFilter("Tooth Extraction")}>Tooth Extraction</Button>
            <Button className="w-auto" onClick={() => setFilter("Fillings")}>Fillings</Button>
          </div>

          <div className="reviews-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review) => (
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
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                      {getFirstLetter(review.name)}
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
    </div>
  );
};

export default Reviews;
