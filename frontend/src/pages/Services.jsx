import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import QuoteModal from '../components/Common/QuoteModal';
import { 
  Code, 
  Smartphone, 
  TrendingUp, 
  Palette, 
  MessageCircle, 
  Phone,
  ArrowRight,
  CheckCircle,
  Monitor,
  ShoppingCart,
  Search,
  Megaphone,
  Headphones,
  Mail
} from 'lucide-react';

const Services = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const serviceCategories = [
    {
      icon: Code,
      title: 'Website Design & Development',
      description: 'Modern, responsive websites built with latest technologies',
      color: 'blue',
      services: [
        'Modern & Responsive Website Design',
        'Custom Web Development Services', 
        'eCommerce Development (WooCommerce / Shopify)',
        'Game Development',
        'CRM & Custom Software Solutions'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing Services',
      description: 'Complete digital marketing solutions for growth',
      color: 'green',
      services: [
        'Local SEO & Google Business Listing',
        'SEO (Search Engine Optimization)',
        'Social Media Optimization (SMO)',
        'WhatsApp Business API (Meta API)',
        'RCS Messaging (Powered by Google)'
      ]
    },
    {
      icon: Megaphone,
      title: 'Paid Advertising',
      description: 'Strategic advertising campaigns that deliver results',
      color: 'purple',
      services: [
        'Pay Per Click (PPC) Campaigns',
        'Facebook & Instagram Ads',
        'Google Ads (Search, Display, Shopping)',
        'Lead Generation & Conversion Campaigns'
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Application Development',
      description: 'Native and cross-platform mobile applications',
      color: 'orange',
      services: [
        'Android App Development',
        'iOS App Development',
        'App Store Optimization (ASO)',
        'Flutter App Development'
      ]
    },
    {
      icon: Palette,
      title: 'Graphics Designing',
      description: 'Creative designs that make your brand stand out',
      color: 'pink',
      services: [
        'UI/UX Designing',
        'Logo Designing',
        'Graphics Designing',
        'UGC Content Creation',
        'Video Editing Service'
      ]
    },
    {
      icon: Phone,
      title: 'IVR Calling and Messaging',
      description: 'Advanced communication solutions for businesses',
      color: 'indigo',
      services: [
        'IVR Calling Solution',
        'Bulk SMS Broadcasting',
        'Bulk WhatsApp Messaging',
        'Voice Broadcasting'
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'text-blue-600 border-blue-200 bg-blue-50',
      green: 'text-green-600 border-green-200 bg-green-50',
      purple: 'text-purple-600 border-purple-200 bg-purple-50',
      orange: 'text-orange-600 border-orange-200 bg-orange-50',
      pink: 'text-pink-600 border-pink-200 bg-pink-50',
      indigo: 'text-indigo-600 border-indigo-200 bg-indigo-50'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              Comprehensive Digital Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              From website development to digital marketing, we offer complete digital 
              solutions to help your business grow online and achieve measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
                onClick={() => window.open('https://wa.me/918005677079', '_blank')}
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;
              const colorClasses = getColorClasses(category.color);
              
              return (
                <Card key={index} className={`hover:shadow-lg transition-all duration-300 border-2 ${colorClasses}`}>
                  <CardHeader className="text-center">
                    <Icon className={`w-16 h-16 mx-auto mb-4 ${category.color === 'blue' ? 'text-blue-600' : 
                      category.color === 'green' ? 'text-green-600' :
                      category.color === 'purple' ? 'text-purple-600' :
                      category.color === 'orange' ? 'text-orange-600' :
                      category.color === 'pink' ? 'text-pink-600' : 'text-indigo-600'}`} />
                    <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {category.services.map((service, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="space-y-3">
                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        onClick={() => setIsQuoteModalOpen(true)}
                      >
                        Get Quote
                      </Button>
                      <Button 
                        variant="outline"
                        className="w-full border-gray-300 text-gray-600 hover:bg-gray-50"
                        onClick={() => window.open('https://wa.me/918005677079', '_blank')}
                      >
                        <MessageCircle className="mr-2 w-4 h-4" />
                        Discuss via WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, technology, and creativity to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center bg-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-sm text-gray-600">600+ successful projects with 95% client satisfaction</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-600">Round-the-clock support for all your needs</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Growth Focused</h3>
                <p className="text-sm text-gray-600">Strategies designed to drive real business growth</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">On-Time Delivery</h3>
                <p className="text-sm text-gray-600">We respect deadlines and deliver on time</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your project requirements and create a customized solution 
            that drives results for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="outline"
              className="bg-white text-blue-600 hover:bg-gray-100 border-white"
              onClick={() => setIsQuoteModalOpen(true)}
            >
              Get Free Consultation
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

export default Services;