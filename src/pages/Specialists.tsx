import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import team1 from '@/assets/team-1.jpg';
import team2 from '@/assets/team-3.jpeg';

const Specialists = () => {
  useEffect(() => {
    gsap.fromTo(
      '.specialist-card',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.specialists-grid',
          start: 'top 80%',
        },
      }
    );
  }, []);

  const specialists = [
    {
      name: 'Dr. Monika Kamboj – Expert in Periodontology, Implants & Advanced Laser Dentistry',
      image: team1,
      content: (
        <div className="text-muted-foreground">
          <p align="justify">
            Dr. Monika Kamboj is a highly accomplished dental professional with over 17 years of experience in Periodontology, Dental Implants, RCT and Root Canal Treatments. 
           </p>

          <h6 className="font-semibold mt-4">Qualifications:</h6>
          <ul className="list-disc ml-6">
            <li>BDS – Government Dental College, Rohtak (2003-2008)</li>
            <li>MDS (Periodontology) – Punjab Govt. Dental College & Hospital, Chandigarh (2008-2013)</li>
            
          </ul>

          <h6 className="font-semibold mt-4">Professional Experience:</h6>
          <ul className="list-disc ml-6">
            <li>Demonstrator – Government Dental College, Rohtak (2009)</li>
            <li>Junior Resident – AIIMS, New Delhi (2009)</li>
            <li>Senior Resident – Government Medical College & Hospital, Chandigarh (2013–2016)</li>
            <li>In private practice in Delhi NCR delivering comprehensive dental solutions</li>
          </ul>

          <h6 className="font-semibold mt-4">Expertise:</h6>
          <ul className="list-disc ml-6">
            <li>Full Mouth Rehabilitation with Implants</li>
            <li>Smile Designing</li>
            <li>Root Canal Treatments (Laser)</li>
            <li>Laser Surgeries</li>
            <li>Periodontal Surgeries with Lasers</li>
          </ul>
        </div>
      ),
    },
   {
  name: 'Dr. Suruchi Dogra – MDS Oral Surgeon & Implantologist',
  image: team2,
  content: (
    <div className="text-muted-foreground">
      <p align="justify">
        Dr. Suruchi Dogra is a skilled Oral and Maxillofacial Surgeon and Implantologist with around 17 years of experience. 
      </p>

      <h6 className="font-semibold mt-4">Qualifications:</h6>
      <ul className="list-disc ml-6">
        <li>BDS – Himachal Dental College (2003–2008)</li>
        <li>MDS (Oral & Maxillofacial Surgery) – AIIMS, New Delhi (2009–2012)</li>
      </ul>

      <h6 className="font-semibold mt-4">Professional Experience:</h6>
      <ul className="list-disc ml-6">
        <li>Senior Resident – Christian Medical and Dental College (CMC), Ludhiana</li>
        <li>Consultant – Government Medical College, Tanda, H.P.</li>
        <li>Senior Consultant – Delhi Cantonment General Hospital</li>
        <li>Consultant at reputed dental clinics across Delhi NCR</li>
      </ul>

      <h6 className="font-semibold mt-4">Expertise:</h6>
      <ul className="list-disc ml-6">
        <li>Dental Impactions</li>
        <li>Dental Implants</li>
        <li>Facial Trauma Management</li>
        <li>Facial Cosmetic Procedures</li>
      </ul>
    </div>
  ),
}

  ];

  const DoctorImage = ({ src, alt }) => (
    <div className="relative w-[85%] h-[35rem] mx-auto flex justify-center items-center">
      {/* Background rectangles */}
      <div className="absolute -top-8 -left-8 w-[78%] h-[90%] bg-[#09877f] rounded-lg z-0"></div>
      <div className="absolute bottom-0 -right-8 w-[78%] h-[90%] bg-emerald-100 rounded-lg z-0"></div>
      {/* Doctor image */}
      <img
        src={src}
        alt={alt}
        className="relative z-10 w-full h-full object-cover rounded-lg shadow-lg"
      />
    </div>
  );

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
        <div className="container mx-auto px-4 specialists-grid">
          {specialists.map((doc, idx) => (
            <>
              <div
                key={doc.name}
                className={`grid lg:grid-cols-2 gap-12 mb-32 items-center specialist-card`}
              >
                {/* Image first in mobile view */}
                <div className={`${idx % 2 === 1 ? 'order-0 lg:order-2' : ''}`}>
                  <DoctorImage src={doc.image} alt={doc.name} />
                </div>
                <div className={`${idx % 2 === 1 ? 'order-1 lg:order-1' : ''}`}>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {doc.name}
                  </h3>
                  {doc.content}
                  <Button
                    className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full group"
                    asChild
                  >
                    <Link to="/contact">
                      Book Appointment
                      <Calendar className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Insert placeholder image after first doctor */}



            
            </>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Specialists;
