import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import QuoteModal from '../../components/Common/QuoteModal';
import { 
  Code, 
  ArrowRight, 
  CheckCircle,
  Monitor,
  ShoppingCart,
  Settings,
  Gamepad2,
  Database
} from 'lucide-react';

const WebDevelopment = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const services = [
    {
      icon: Monitor,
      title: 'Modern & Responsive Website Design',
      description: 'Create stunning, mobile-first websites that look perfect on all devices',
      features: ['Mobile-First Design', 'Cross-Browser Compatible', 'Fast Loading', 'SEO Optimized'],
      path: '/services/web-development/responsive-design'
    },
    {
      icon: Code,
      title: 'Custom Web Development Services',
      description: 'Tailor-made web solutions built with latest technologies and frameworks',
      features: ['Custom Development', 'Latest Technologies', 'Scalable Architecture', 'API Integration'],
      path: '/services/web-development/custom-development'
    },
    {
      icon: ShoppingCart,
      title: 'eCommerce Development',
      description: 'Powerful online stores with WooCommerce, Shopify, and custom solutions',
      features: ['Payment Integration', 'Inventory Management', 'Multi-vendor Support', 'Mobile Commerce'],
      path: '/services/web-development/ecommerce'
    },
    {
      icon: Gamepad2,
      title: 'Game Development',
      description: 'Interactive web games and applications for entertainment and education',
      features: ['HTML5 Games', 'Interactive Elements', 'Cross-Platform', 'Multiplayer Support'],
      path: '/services/web-development/game-development'
    },
    {
      icon: Database,
      title: 'CRM & Custom Software Solutions',
      description: 'Business management systems tailored to your specific requirements',
      features: ['Custom CRM', 'Workflow Automation', 'Data Analytics', 'Cloud Integration'],
      path: '/services/web-development/crm-software'
    }
  ];

  const technologies = [
    'React.js', 'Node.js', 'PHP', 'Laravel', 'WordPress', 'Shopify', 
    'HTML5', 'CSS3', 'JavaScript', 'Python', 'MongoDB', 'MySQL'
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, target audience, and business goals to create a comprehensive project plan.'
    },
    {
      step: '02', 
      title: 'Design & Wireframing',
      description: 'Our designers create wireframes and mockups that align with your brand and user experience goals.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Our developers build your website using best practices, followed by rigorous testing across devices.'
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'We deploy your website and provide ongoing support, maintenance, and optimization services.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-6"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-500 text-white border-blue-400">
              Website Design & Development
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Website
              <br />
              <span className="text-blue-300">Development Services</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              From responsive designs to powerful e-commerce platforms, we create websites that 
              drive business growth and engage your audience with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Web Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive web development solutions to meet all your digital needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group bg-white border-2 hover:border-blue-200">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-blue-600 group-hover:text-white" />
                    </div>
                    <CardTitle className="text-xl mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
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
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
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

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with the latest and most reliable web technologies
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <Badge key={index} className="bg-white text-gray-700 border border-gray-300 px-4 py-2 text-base hover:bg-blue-50 hover:border-blue-300 transition-colors">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures project success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your project requirements and create a website that drives results for your business.
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
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
};

export default WebDevelopment;