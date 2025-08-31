import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import QuoteModal from '../components/Common/QuoteModal';
import { 
  Users, 
  Target, 
  Eye, 
  Award, 
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Clock,
  Shield
} from 'lucide-react';

const About = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const achievements = [
    { number: '7+', label: 'Years of Experience', icon: Clock },
    { number: '600+', label: 'Projects Completed', icon: CheckCircle },
    { number: '95%', label: 'Customer Satisfaction', icon: Star },
    { number: '₹50L+', label: 'Ad Spend Managed', icon: TrendingUp }
  ];

  const values = [
    {
      icon: Target,
      title: 'Result-Driven Approach',
      description: 'We focus on delivering measurable results that directly impact your business growth and success.',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Client-Centric Service',
      description: 'Your success is our priority. We provide 24/7 support and maintain 95% client satisfaction.',
      color: 'green'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in every project, ensuring premium quality deliverables.',
      color: 'purple'
    },
    {
      icon: Shield,
      title: 'Reliable Partnership',
      description: 'We build long-term relationships with our clients, becoming their trusted digital partner.',
      color: 'orange'
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

  const teamStats = [
    { label: 'Web Developers', count: '15+' },
    { label: 'Mobile App Developers', count: '8+' },
    { label: 'Digital Marketers', count: '10+' },
    { label: 'UI/UX Designers', count: '6+' }
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
              About Agile Edtech Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building Digital Excellence
              <br />
              <span className="text-blue-300">Since 2017</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              We are a reputed and reliable website development company in Jaipur, India, 
              specializing in building powerful digital solutions tailored to business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                From basic HTML websites, WordPress, and eCommerce stores to customized 
                inventory management systems and driver tracking solutions, we deliver 
                cutting-edge web development services that help businesses grow online.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With 7+ years of experience, 600+ successful projects, and a 95% client 
                satisfaction rate, we have worked with brands across the globe, creating 
                innovative, responsive, and results-driven websites.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our philosophy is simple — to build websites that today's market demands: 
                easy to find, visually engaging, and designed to convert visitors into buyers.
              </p>
            </div>
            
            <div>
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Our Expert Team
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {teamStats.map((stat, index) => (
                      <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          {stat.count}
                        </div>
                        <div className="text-sm text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Vision & Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding principles that drive our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardHeader>
                <Eye className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl text-blue-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800 leading-relaxed">
                  To be recognized as a leading digital solutions partner worldwide by 
                  empowering businesses with innovative websites, mobile apps, and marketing 
                  strategies that drive measurable results.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardHeader>
                <Target className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle className="text-2xl text-green-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-800 leading-relaxed">
                  Our mission is to deliver affordable, creative, and result-oriented 
                  digital solutions that help businesses establish a strong online presence, 
                  attract more customers, and achieve sustainable growth. We aim to combine 
                  technology, creativity, and strategy to create long-term value for our clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              const colorClasses = {
                blue: 'text-blue-600 bg-blue-100 hover:bg-blue-600',
                green: 'text-green-600 bg-green-100 hover:bg-green-600',
                purple: 'text-purple-600 bg-purple-100 hover:bg-purple-600',
                orange: 'text-orange-600 bg-orange-100 hover:bg-orange-600'
              };
              
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 group bg-white">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${colorClasses[value.color]} group-hover:text-white`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Agile Edtech Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We go beyond designing websites - we provide complete digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{reason}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8">
              At Agile Edtech Solutions, our expertise goes beyond designing websites. 
              We provide customized digital marketing and advertising solutions, ensuring 
              that our clients not only get a stunning online presence but also achieve 
              real business growth.
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
            </div>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
};

export default About;