import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { useToast } from '../hooks/use-toast';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    budget: ''
  });

  const services = [
    'Website Development',
    'Mobile App Development',
    'E-commerce Development',
    'Digital Marketing',
    'SEO Services',
    'Graphic Design',
    'Custom Software Development'
  ];

  const budgetRanges = [
    'Under ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000 - ₹2,00,000',
    '₹2,00,000 - ₹5,00,000',
    'Above ₹5,00,000'
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: 'Shop - 17, Green Commercial Park, C-2SF, Jagatpura, Jaipur, Rajasthan 302017',
      action: null
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: '+91-80056 77079',
      action: () => window.open('tel:+918005677079', '_self')
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: '+91-80056 77079',
      action: () => window.open('https://wa.me/918005677079', '_blank')
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: 'sales@agilesolutions.co.in',
      action: () => window.open('mailto:sales@agilesolutions.co.in', '_self')
    }
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/AgileSolutionz', icon: Facebook, color: 'blue' },
    { name: 'Instagram', href: 'https://www.instagram.com/agilesolutionz', icon: Instagram, color: 'pink' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/agilesolutions1/', icon: Linkedin, color: 'blue' },
    { name: 'YouTube', href: 'https://youtu.be/GQS1VVDfkLM?si=EI-aF4GlUL19ctGz', icon: Youtube, color: 'red' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Mock submission - in real app, this would send to backend
    console.log('Contact form submitted:', formData);
    
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
      budget: ''
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss your project and create 
              a digital solution that drives real results. We're here to help!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => window.open('https://wa.me/918005677079', '_blank')}
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp Us Now
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

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-gray-900">
                    Send Us a Message
                  </CardTitle>
                  <p className="text-center text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+91 XXXXX XXXXX"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Enter company name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="service">Service Required</Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger>
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
                      
                      <div>
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range}>
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your project requirements..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      <Send className="mr-2 w-4 h-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <Card key={index} className={`p-4 hover:shadow-md transition-shadow ${info.action ? 'cursor-pointer' : ''}`}
                            onClick={info.action}>
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <Icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{info.title}</h3>
                            <p className="text-gray-600 text-sm">{info.details}</p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-2" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday:</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">24/7 Emergency Support Available</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <Button
                          key={social.name}
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(social.href, '_blank')}
                          className="hover:bg-gray-50"
                        >
                          <Icon className="w-4 h-4 mr-2" />
                          {social.name}
                        </Button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Map or Additional Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-sm">7+ Years of Experience</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-sm">600+ Projects Delivered</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-sm">95% Client Satisfaction</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-sm">24/7 Support Available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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
            Don't wait! Contact us today for a free consultation and see how we 
            can transform your digital presence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
              onClick={() => window.open('https://wa.me/918005677079', '_blank')}
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Start WhatsApp Chat
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
              onClick={() => window.open('tel:+918005677079', '_self')}
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now: +91-80056 77079
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;