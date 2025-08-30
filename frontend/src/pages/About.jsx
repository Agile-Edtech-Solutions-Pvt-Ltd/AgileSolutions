import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import QuoteModal from '../components/Common/QuoteModal';
import { 
  Users, 
  Target, 
  Eye, 
  Award, 
  CheckCircle,
  MessageCircle,
  Phone
} from 'lucide-react';

const About = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const achievements = [
    { number: '7+', label: 'Years of Experience' },
    { number: '600+', label: 'Projects Completed' },
    { number: '95%', label: 'Customer Satisfaction' },
    { number: '₹50L+', label: 'Ad Spend Managed' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Result-Driven Approach',
      description: 'We focus on delivering measurable results that directly impact your business growth and success.'
    },
    {
      icon: Users,
      title: 'Client-Centric Service',
      description: 'Your success is our priority. We provide 24/7 support and maintain 95% client satisfaction.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in every project, ensuring premium quality deliverables.'
    },
    {
      icon: CheckCircle,
      title: 'Timely Delivery',
      description: 'We respect deadlines and ensure on-time delivery without compromising on quality.'
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
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Agile Edtech Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              We are a reputed and reliable website development company in Jaipur, India, 
              specializing in building powerful digital solutions tailored to business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Building Digital Excellence Since 2017
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
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => setIsQuoteModalOpen(true)}
                >
                  Get Free Consultation
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50"
                  onClick={() => window.open('https://wa.me/918005677079', '_blank')}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp Us
                </Button>
              </div>
            </div>
            
            <div>
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                          {achievement.number}
                        </div>
                        <div className="text-sm text-gray-600">
                          {achievement.label}
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <Eye className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To be recognized as a leading digital solutions partner worldwide by 
                  empowering businesses with innovative websites, mobile apps, and marketing 
                  strategies that drive measurable results.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <Target className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
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
      <section className="py-20 bg-white">
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
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
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
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
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
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => window.open('tel:+918005677079', '_self')}
              >
                <Phone className="mr-2 w-5 h-5" />
                Call: +91-80056 77079
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