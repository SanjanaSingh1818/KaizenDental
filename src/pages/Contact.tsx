import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, Send, Calendar } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import gsap from 'gsap';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

  useEffect(() => {
    gsap.fromTo('.contact-animate',
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.2,
        delay: 0.3
      }
    );
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Appointment Request Sent!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      preferredDate: '',
      preferredTime: ''
    });
  };

  const services = [
    "General Consultation",
    "Dental Implants",
    "Root Canal Treatment",
    "Teeth Aligners & Braces",
    "Teeth Whitening",
    "Oral Surgery",
    "Preventive Care",
    "Cosmetic Dentistry",
    "Pediatric Dentistry",
    "Emergency Care"
  ];

  const timeSlots = [
    "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
    "7:00 PM", "7:30 PM"
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Header Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Contact <span className="text-accent">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Get in touch with us to schedule your appointment or ask any questions about our dental services.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Clinic 1 */}
            <Card className="contact-animate bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Clinic 1 - Sector 41</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  C-98 Plot-26 1st and 2nd Floor<br />
                  Sector 41 Noida UP.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>Mon-Sun: 10am - 8pm</span>
                </div>
              </CardContent>
            </Card>

            {/* Clinic 2 */}
            <Card className="contact-animate bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Clinic 2 - Sector 27</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  I-109, Sector 27<br />
                  Noida 201301.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>Tue-Sun: 11am - 8pm</span>
                </div>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="contact-animate bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Call Us</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  24/7 Emergency Support
                </p>
                <a 
                  href="tel:+919650780998"
                  className="text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  (+91) 9650780998
                </a>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="contact-animate bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Email Us</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Get in touch via email
                </p>
                <a 
                  href="mailto:info@dentalcareplus.com"
                  className="text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  info@dentalcareplus.com
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="contact-animate">
              <Card className="bg-background border-0 shadow-medium">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-playfair font-bold text-foreground">
                      Book an Appointment
                    </h2>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-foreground font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="mt-2"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-foreground font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="mt-2"
                          required
                        />
                      </div>
                    </div>

                    {/* Phone and Service */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-foreground font-medium">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="mt-2"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="service" className="text-foreground font-medium">
                          Service Required
                        </Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Preferred Date and Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date" className="text-foreground font-medium">
                          Preferred Date
                        </Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                          className="mt-2"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div>
                        <Label htmlFor="time" className="text-foreground font-medium">
                          Preferred Time
                        </Label>
                        <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message" className="text-foreground font-medium">
                        Additional Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your dental concerns or any specific requirements..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="mt-2 min-h-[120px]"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button 
                      type="submit"
                      className="w-full bg-accent hover:bg-accent-hover text-accent-foreground py-3 rounded-full font-medium group"
                    >
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Appointment Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Quick Contact */}
            <div className="contact-animate space-y-8">
              {/* Google Maps Embed */}
              <Card className="bg-background border-0 shadow-medium overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.540045179436!2d77.36719785!3d28.5553682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sSector%2041%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="DentalCare+ Location"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Options */}
              <Card className="bg-background border-0 shadow-medium">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-foreground">
                    Quick Contact Options
                  </h3>
                  
                  <div className="space-y-4">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-full font-medium"
                      asChild
                    >
                      <a href="tel:+919650780998">
                        <Phone className="w-5 h-5 mr-2" />
                        Call Now for Emergency
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline"
                      className="w-full py-3 rounded-full font-medium"
                      asChild
                    >
                      <a href="https://wa.me/919650780998" target="_blank" rel="noopener noreferrer">
                        <span className="w-5 h-5 mr-2">💬</span>
                        WhatsApp Us
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline"
                      className="w-full py-3 rounded-full font-medium"
                      asChild
                    >
                      <a href="mailto:info@dentalcareplus.com">
                        <Mail className="w-5 h-5 mr-2" />
                        Send Email
                      </a>
                    </Button>
                  </div>

                  {/* Emergency Notice */}
                  <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
                    <h4 className="font-semibold text-accent mb-2">🚨 Emergency Services</h4>
                    <p className="text-sm text-muted-foreground">
                      For dental emergencies, call us immediately at (+91) 9650780998. 
                      We provide 24/7 emergency dental care.
                    </p>
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

export default Contact;