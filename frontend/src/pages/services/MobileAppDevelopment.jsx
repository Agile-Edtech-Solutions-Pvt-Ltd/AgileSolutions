import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import QuoteModal from '../../components/Common/QuoteModal';
import { 
  Smartphone, 
  ArrowRight, 
  CheckCircle,
  Apple,
  Play,
  Zap,
  TrendingUp
} from 'lucide-react';

const MobileAppDevelopment = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const services = [
    {
      icon: Apple,
      title: 'iOS App Development',
      description: 'Native iOS applications built with Swift and Objective-C for optimal performance',
      features: ['Native iOS Development', 'App Store Optimization', 'Swift & Objective-C', 'iOS Guidelines Compliance'],
      path: '/services/mobile-development/ios-apps'
    },
    {
      icon: Play,
      title: 'Android App Development', 
      description: 'High-performance Android apps using Kotlin and Java for Google Play Store',
      features: ['Native Android Development', 'Google Play Publishing', 'Kotlin & Java', 'Material Design'],
      path: '/services/mobile-development/android-apps'
    },
    {
      icon: Zap,
      title: 'Flutter App Development',
      description: 'Cross-platform mobile apps with single codebase for iOS and Android',
      features: ['Cross-Platform', 'Single Codebase', 'Fast Development', 'Native Performance'],
      path: '/services/mobile-development/flutter-apps'
    },
    {
      icon: TrendingUp,
      title: 'App Store Optimization (ASO)',
      description: 'Increase your app visibility and downloads with strategic ASO techniques',
      features: ['Keyword Optimization', 'App Store Rankings', 'Download Growth', 'Performance Analytics'],
      path: '/services/mobile-development/app-store-optimization'
    }
  ];

  const platforms = [
    { name: 'iOS', icon: Apple, description: 'Native iOS apps for iPhone and iPad' },
    { name: 'Android', icon: Play, description: 'Native Android apps for smartphones and tablets' },
    { name: 'Flutter', icon: Zap, description: 'Cross-platform apps with single codebase' }
  ];

  const appTypes = [
    'Business Apps',
    'E-commerce Apps', 
    'Social Media Apps',
    'Educational Apps',
    'Healthcare Apps',
    'Food Delivery Apps',
    'Travel Apps',
    'Gaming Apps',
    'Utility Apps',
    'Entertainment Apps'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-6"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-purple-500 text-white border-purple-400">
              Mobile App Development
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Create Amazing
              <br />
              <span className="text-purple-300">Mobile Apps</span>
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-4xl mx-auto">
              Native iOS and Android apps, cross-platform solutions with Flutter. Turn your ideas 
              into powerful mobile experiences that engage users and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-8 py-3"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Platforms We Develop For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-10 h-10 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{platform.name}</h3>
                  <p className="text-gray-600">{platform.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mobile App Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive mobile development solutions for all platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group bg-white border-2 hover:border-purple-200">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-purple-600 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-purple-600 group-hover:text-white" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="space-y-3">
                      <Link to={service.path}>
                        <Button className="w-full bg-purple-600 hover:bg-purple-700">
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                      <Button 
                        variant="outline"
                        className="w-full border-gray-300 text-gray-600 hover:bg-gray-50"
                        onClick={() => setIsQuoteModalOpen(true)}
                      >
                        Get Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Apps We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in various app categories across different industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {appTypes.map((type, index) => (
              <div key={index} className="bg-purple-50 rounded-lg p-4 text-center hover:bg-purple-100 transition-colors">
                <span className="text-purple-800 font-medium text-sm">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Let's transform your idea into a successful mobile application that users love.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="outline"
              className="bg-white text-purple-600 hover:bg-gray-100 border-white"
              onClick={() => setIsQuoteModalOpen(true)}
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
};

export default MobileAppDevelopment;