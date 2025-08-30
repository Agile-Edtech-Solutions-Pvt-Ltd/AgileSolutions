import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const services = [
    'Website Development',
    'Mobile App Development',
    'Digital Marketing',
    'SEO Services',
    'Graphic Design',
    'E-commerce Solutions'
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/AgileSolutionz', icon: Facebook },
    { name: 'Instagram', href: 'https://www.instagram.com/agilesolutionz', icon: Instagram },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/agilesolutions1/', icon: Linkedin },
    { name: 'YouTube', href: 'https://youtu.be/GQS1VVDfkLM?si=EI-aF4GlUL19ctGz', icon: Youtube }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="https://customer-assets.emergentagent.com/job_agile-edtech-1/artifacts/h4co639m_agile-contrast-logo.png" 
              alt="Agile Edtech Solutions" 
              className="h-12 w-auto"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              A reputed and reliable website development company in Jaipur, India, specializing in building powerful digital solutions tailored to business needs.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Shop - 17, Green Commercial Park, C-2SF, Jagatpura, Jaipur, Rajasthan 302017
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+918005677079" className="text-gray-300 hover:text-white text-sm">
                  +91-80056 77079
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:sales@agilesolutions.co.in" className="text-gray-300 hover:text-white text-sm">
                  sales@agilesolutions.co.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Agile Edtech Solutions Pvt. Ltd. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                7+ Years Experience | 600+ Projects | 95% Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;