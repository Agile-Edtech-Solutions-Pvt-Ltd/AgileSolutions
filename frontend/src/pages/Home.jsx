import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import QuoteModal from '../components/Common/QuoteModal';
import { 
  Code, 
  Smartphone, 
  TrendingUp, 
  Palette, 
  Phone, 
  CheckCircle,
  Users,
  Award,
  Clock,
  Star,
  ArrowRight,
  ShoppingCart,
  Target,
  Zap
} from 'lucide-react';

const Home = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  const primaryServices = [
    "Website & eCommerce Development",
    "Digital Marketing (Lead Generation)", 
    "Software & Mobile App Development"
  ];

  const clientLogos = [
    { name: "All Starr Sports Club", logo: "/client-logos/all-starr-sports-club-logo.png" },
    { name: "Arezou", logo: "/client-logos/Arezou-logo.webp" },
    { name: "Brain Hap", logo: "/client-logos/brain-hap-logo.png" },
    { name: "Dronetech", logo: "/client-logos/dronetech-logo-white-green.png" },
    { name: "Facevue Aesthetics", logo: "/client-logos/facevue-aesthetics-logo.png" },
    { name: "Glacier Agritech", logo: "/client-logos/glacier-agritech-logo.png" },
    { name: "Kivvis Pet Care", logo: "/client-logos/kivvis-pet-care-logo.png" },
    { name: "SRN International School", logo: "/client-logos/srn-internation-school-logo.jpeg" },
    { name: "TCBS", logo: "/client-logos/TCBS-Logo.png" },
    { name: "TCTE", logo: "/client-logos/tcte-logo.png" },
    { name: "Volt Cab", logo: "/client-logos/volt-cab-logo.jpg" }
  ];

  // Typing animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % primaryServices.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: '7+', label: 'Years Experience', icon: Clock },
    { number: '600+', label: 'Projects Completed', icon: CheckCircle },
    { number: '95%', label: 'Customer Satisfaction', icon: Star },
    { number: '₹50L+', label: 'Ad Spend Managed', icon: TrendingUp }
  ];

  const services = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Modern, responsive websites built with latest technologies',
      features: ['Custom Development', 'WordPress Sites', 'E-commerce Stores']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      features: ['Android Apps', 'iOS Apps', 'Flutter Development']
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Complete digital marketing solutions for growth',
      features: ['SEO Services', 'Social Media', 'PPC Campaigns']
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Creative designs that make your brand stand out',
      features: ['Logo Design', 'UI/UX Design', 'Brand Identity']
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'TechCorp India',
      content: 'Agile Edtech delivered an exceptional website that boosted our online presence significantly.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      company: 'Fashion Hub',
      content: 'Their e-commerce solution increased our sales by 200%. Highly recommended!',
      rating: 5
    },
    {
      name: 'Amit Gupta',
      company: 'StartupXYZ',
      content: 'Professional team, timely delivery, and excellent support. Perfect partner for digital transformation.',
      rating: 5
    }
  ];

  const whyChooseUs = [
    'Expert In-House Team',
    '7+ Years of Experience',
    '600+ Projects Successfully Delivered',
    '95% Customer Satisfaction',
    '24×7 Customer Support',
    'Result-Driven & On-Time Delivery'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200 to-transparent transform -skew-y-6"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-left">
              <Badge className="mb-6 bg-blue-600 text-white hover:bg-blue-700">
                Leading Digital Solutions Partner in Jaipur
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
                We Build Powerful
                <br />
                <span className="text-blue-600 relative">
                  {primaryServices[currentServiceIndex]}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform origin-left animate-pulse"></div>
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your business with cutting-edge digital solutions. From stunning websites 
                to powerful marketing campaigns, we help businesses in Jaipur and worldwide achieve 
                measurable growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 transform hover:scale-105 transition-all duration-200"
                  onClick={() => setIsQuoteModalOpen(true)}
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 transition-all duration-200"
                  onClick={() => window.open('https://wa.me/918005677079', '_blank')}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp Us
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-gray-400 text-gray-600 hover:bg-gray-50 px-8 py-3 transition-all duration-200"
                  onClick={() => window.open('tel:+918005677079', '_self')}
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <span className="text-sm">95% Client Satisfaction</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-1" />
                  <span className="text-sm">600+ Projects Delivered</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-blue-600 mr-1" />
                  <span className="text-sm">7+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Right Side - Professional Mobile Mockup */}
            <div className="lg:pl-8">
              <div className="relative">
                {/* Floating Phone Mockup */}
                <div className="relative mx-auto w-64 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-500">
                  {/* Phone Screen */}
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="bg-gray-100 h-6 flex items-center justify-between px-4 text-xs">
                      <span className="text-gray-600">9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                        <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                        <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="p-4 h-full bg-gradient-to-b from-blue-50 to-white">
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                          <Code className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-800 text-sm">Agile Solutions</h3>
                        <p className="text-xs text-gray-600">Mobile App</p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <TrendingUp className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                              <div className="text-xs font-medium text-gray-800">Digital Marketing</div>
                              <div className="text-xs text-gray-500">Lead Generation</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                              <Code className="w-4 h-4 text-green-600" />
                            </div>
                            <div>
                              <div className="text-xs font-medium text-gray-800">Web Development</div>
                              <div className="text-xs text-gray-500">Custom Solutions</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                              <Smartphone className="w-4 h-4 text-purple-600" />
                            </div>
                            <div>
                              <div className="text-xs font-medium text-gray-800">Mobile Apps</div>
                              <div className="text-xs text-gray-500">iOS & Android</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <div className="bg-blue-600 text-white text-center py-2 rounded-lg text-xs font-medium">
                          Get Quote
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gray-600 rounded-full"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-blue-100 rounded-full opacity-60 animate-bounce"></div>
                <div className="absolute bottom-10 left-0 w-8 h-8 bg-green-100 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute top-1/2 -right-4 w-6 h-6 bg-purple-100 rounded-full opacity-60 animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions to help your business grow online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                  <CardHeader className="text-center">
                    <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Agile Edtech Solutions?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine technology, creativity, and strategy to create long-term value 
                for our clients. Our mission is to deliver affordable, creative, and 
                result-oriented digital solutions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
                onClick={() => window.open('https://wa.me/918005677079', '_blank')}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Start Your Project
              </Button>
            </div>
            
            <div className="lg:pl-8">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-8">
                  <div className="text-center">
                    <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      7+ Years of Excellence
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Trusted by 600+ clients worldwide with 95% satisfaction rate. 
                      We've managed ₹50+ Lakhs in ad spend, driving real business growth.
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">600+</div>
                        <div className="text-sm text-gray-600">Projects</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">95%</div>
                        <div className="text-sm text-gray-600">Satisfaction</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">24/7</div>
                        <div className="text-sm text-gray-600">Support</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Brands
            </h2>
            <p className="text-xl text-gray-600">
              We're proud to work with innovative companies across various industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center justify-center p-4 group">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Jaipur, we're always ready to meet and discuss your project
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.187234959849!2d75.8299715!3d26.8847408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6c8b4c4e4e7%3A0x6e8c8c1b5c5c5c5c!2sJagatpura%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1693456789012!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Agile Edtech Solutions Office Location"
              ></iframe>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Address</h3>
                    <p className="text-gray-600">
                      Shop - 17, Green Commercial Park, C-2SF, Jagatpura, Jaipur, Rajasthan 302017
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Details</h3>
                    <div className="space-y-1">
                      <p className="text-gray-600">Phone: +91-80056 77079</p>
                      <p className="text-gray-600">Email: sales@agilesolutions.co.in</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 flex-1"
                  onClick={() => window.open('https://maps.google.com/maps?daddr=Shop%20-%2017,%20Green%20Commercial%20Park,%20C-2SF,%20Jagatpura,%20Jaipur,%20Rajasthan%20302017', '_blank')}
                >
                  <Target className="mr-2 w-4 h-4" />
                  Get Directions
                </Button>
                <Button 
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 flex-1"
                  onClick={() => window.open('https://wa.me/918005677079', '_blank')}
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your project and create a digital solution that drives real results. 
            Get a free consultation and quote today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="outline"
              className="bg-white text-blue-600 hover:bg-gray-100 border-white px-8 py-3"
              onClick={() => setIsQuoteModalOpen(true)}
            >
              Get Free Quote
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-blue-700 px-8 py-3"
              onClick={() => window.open('tel:+918005677079', '_self')}
            >
              <Phone className="mr-2 w-5 h-5" />
              Call: +91-80056 77079
            </Button>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
};

export default Home;