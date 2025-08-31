import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import QuoteModal from '../../components/Common/QuoteModal';
import { 
  TrendingUp, 
  ArrowRight, 
  CheckCircle,
  Search,
  Share2,
  MessageSquare,
  Mail,
  Target
} from 'lucide-react';

const DigitalMarketing = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const services = [
    {
      icon: Search,
      title: 'SEO & Local SEO Services',
      description: 'Improve your search engine rankings and get found by local customers',
      features: ['Keyword Research', 'On-Page SEO', 'Local SEO', 'Google Business Listing'],
      path: '/services/digital-marketing/seo-services'
    },
    {
      icon: Share2,
      title: 'Social Media Optimization',
      description: 'Build your brand presence across all major social media platforms', 
      features: ['Social Media Strategy', 'Content Creation', 'Community Management', 'Brand Building'],
      path: '/services/digital-marketing/social-media'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Business API',
      description: 'Automated WhatsApp marketing and customer support solutions',
      features: ['WhatsApp Automation', 'Broadcast Messages', 'Customer Support', 'Lead Generation'],
      path: '/services/digital-marketing/whatsapp-api'
    },
    {
      icon: Mail,
      title: 'RCS Messaging',
      description: 'Next-generation messaging powered by Google for enhanced customer engagement',
      features: ['Rich Media Messages', 'Interactive Content', 'Brand Verification', 'Analytics'],
      path: '/services/digital-marketing/rcs-messaging'
    },
    {
      icon: Target,
      title: 'Lead Generation Campaigns',
      description: 'Strategic campaigns designed to generate high-quality leads for your business',
      features: ['Targeted Campaigns', 'Lead Qualification', 'CRM Integration', 'ROI Tracking'],
      path: '/services/digital-marketing/lead-generation'
    }
  ];

  const benefits = [
    {
      title: 'Increased Online Visibility',
      description: 'Get found by more potential customers through improved search rankings and social presence.'
    },
    {
      title: 'Quality Lead Generation',
      description: 'Attract and convert high-quality leads that are more likely to become customers.'
    },
    {
      title: 'Brand Authority Building',
      description: 'Establish your brand as an industry leader through consistent, valuable content.'
    },
    {
      title: 'Measurable ROI',
      description: 'Track and measure the return on your marketing investment with detailed analytics.'
    }
  ];

  const marketingChannels = [
    'Google Ads',
    'Facebook Ads', 
    'Instagram Marketing',
    'LinkedIn Advertising',
    'YouTube Marketing',
    'Email Marketing',
    'Content Marketing',
    'Influencer Marketing',
    'WhatsApp Marketing',
    'SMS Marketing'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-6"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-green-500 text-white border-green-400">
              Digital Marketing Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Drive Powerful
              <br />
              <span className="text-green-300">Lead Generation</span>
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-4xl mx-auto">
              Strategic digital marketing campaigns, SEO optimization, and targeted advertising 
              to grow your business and generate quality leads that convert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-3"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Get Free Marketing Audit
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
              Our Digital Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions to grow your online presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group bg-white border-2 hover:border-green-200">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-green-600 group-hover:text-white" />
                    </div>
                    <CardTitle className="text-xl mb-3 group-hover:text-green-600 transition-colors">
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
                        <Button className="w-full bg-green-600 hover:bg-green-700">
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Digital Marketing Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Drive real results with our proven digital marketing strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Channels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Marketing Channels We Master
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage multiple channels to maximize your marketing reach
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {marketingChannels.map((channel, index) => (
              <div key={index} className="bg-green-50 rounded-lg p-4 text-center hover:bg-green-100 transition-colors">
                <span className="text-green-800 font-medium text-sm">{channel}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Let's create a customized digital marketing strategy that drives real results for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="outline"
              className="bg-white text-green-600 hover:bg-gray-100 border-white"
              onClick={() => setIsQuoteModalOpen(true)}
            >
              Get Free Marketing Consultation
            </Button>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
};

export default DigitalMarketing;