import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import QuoteModal from '../components/Common/QuoteModal';
import { 
  ExternalLink, 
  MessageCircle, 
  Phone,
  ArrowRight,
  Code,
  Smartphone,
  ShoppingCart,
  Stethoscope,
  Car,
  Building
} from 'lucide-react';

const Portfolio = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const portfolioItems = [
    {
      title: 'VoltCab - Electric Vehicle Solutions',
      url: 'https://voltcab.in/',
      category: 'Website Development',
      icon: Car,
      description: 'Modern electric vehicle solutions platform with responsive design and booking system.',
      technologies: ['WordPress', 'Custom Development', 'Responsive Design']
    },
    {
      title: 'Diya Mineral - Mining Solutions',
      url: 'https://diyamineral.com/',
      category: 'Corporate Website',
      icon: Building,
      description: 'Professional corporate website for mining industry with comprehensive service showcase.',
      technologies: ['HTML/CSS', 'JavaScript', 'SEO Optimized']
    },
    {
      title: 'Glacier Agritech - Agriculture Technology',
      url: 'https://glacieragritech.com/',
      category: 'Technology Platform',
      icon: Code,
      description: 'Advanced agriculture technology platform with modern design and functionality.',
      technologies: ['React', 'Node.js', 'API Integration']
    },
    {
      title: 'Harmony Health with Ankita',
      url: 'https://harmonyhealthwithankita.in/',
      category: 'Healthcare',
      icon: Stethoscope,
      description: 'Healthcare consultation platform with appointment booking and patient management.',
      technologies: ['WordPress', 'Custom Plugins', 'Payment Gateway']
    },
    {
      title: 'Jaipur Advertising Co.',
      url: 'https://jaipuradvertising.co.in/',
      category: 'Digital Marketing',
      icon: Code,
      description: 'Digital marketing agency website with service portfolio and lead generation forms.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Lead Forms']
    },
    {
      title: 'NDH Logistics',
      url: 'https://ndhlogistic.com/',
      category: 'Logistics',
      icon: Car,
      description: 'Comprehensive logistics management platform with tracking and booking features.',
      technologies: ['Custom Development', 'Database Integration', 'API']
    },
    {
      title: 'Dr. Dinesh Chandak',
      url: 'https://drdineshchandak.in/',
      category: 'Healthcare',
      icon: Stethoscope,
      description: 'Professional medical practice website with appointment booking and patient portal.',
      technologies: ['WordPress', 'Custom Theme', 'Booking System']
    },
    {
      title: 'Raghav Capital',
      url: 'https://raghavcapital.com/',
      category: 'Finance',
      icon: Building,
      description: 'Financial services platform with investment tracking and client management.',
      technologies: ['React', 'Dashboard', 'Data Visualization']
    },
    {
      title: 'TTP Health',
      url: 'https://ttphealth.in/',
      category: 'Healthcare',
      icon: Stethoscope,
      description: 'Healthcare platform with telemedicine features and patient management system.',
      technologies: ['Custom Development', 'Video Integration', 'CRM']
    },
    {
      title: 'E3 Global Services',
      url: 'https://e3globalservices.com/',
      category: 'Business Services',
      icon: Building,
      description: 'Global business services platform with multi-language support and service booking.',
      technologies: ['WordPress', 'Multi-language', 'Service Portal']
    },
    {
      title: 'Berkowits Hair & Skin Clinic',
      url: 'https://berkowits.com/',
      category: 'Healthcare',
      icon: Stethoscope,
      description: 'Premium hair and skin clinic website with online consultation and booking.',
      technologies: ['Custom CMS', 'Appointment System', 'E-commerce']
    },
    {
      title: 'CaterNinja - Food Delivery',
      url: 'https://new.caterninja.com/',
      category: 'E-commerce',
      icon: ShoppingCart,
      description: 'Food delivery platform with real-time tracking and payment integration.',
      technologies: ['React', 'Payment Gateway', 'Real-time Tracking']
    }
  ];

  const categories = ['All', 'Website Development', 'E-commerce', 'Healthcare', 'Corporate Website', 'Technology Platform'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              600+ Successful Projects
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover our rich portfolio of successful projects. From innovative websites 
              to powerful mobile applications, see how we've helped businesses transform 
              their digital presence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
                onClick={() => window.open('https://wa.me/918005677079', '_blank')}
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Discuss Your Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="w-10 h-10 text-blue-600" />
                      <Badge variant="secondary" className="text-xs">
                        {item.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1 mb-4">
                        {item.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        onClick={() => window.open(item.url, '_blank')}
                      >
                        <ExternalLink className="mr-2 w-4 h-4" />
                        View Live Site
                      </Button>
                      <Button 
                        variant="outline"
                        className="w-full border-gray-300 text-gray-600 hover:bg-gray-50"
                        onClick={() => setIsQuoteModalOpen(true)}
                      >
                        Similar Project Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that speak for our expertise and commitment
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">600+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">7+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">₹50L+</div>
              <div className="text-gray-600">Ad Spend Managed</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's create something amazing together. Get a free consultation and 
            see how we can transform your digital presence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="outline"
              className="bg-white text-blue-600 hover:bg-gray-100 border-white"
              onClick={() => setIsQuoteModalOpen(true)}
            >
              Get Free Quote
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-blue-700"
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

export default Portfolio;