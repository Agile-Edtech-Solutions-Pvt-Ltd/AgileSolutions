// Mock data for the Agile Edtech Solutions website
// This file contains all the static data used throughout the application

export const companyInfo = {
  name: "Agile Edtech Solutions Pvt Ltd",
  tagline: "Building Digital Excellence Since 2017",
  description: "A reputed and reliable website development company in Jaipur, India, specializing in building powerful digital solutions tailored to business needs.",
  
  contact: {
    phone: "+91-80056 77079",
    whatsapp: "+91-80056 77079",
    email: "sales@agilesolutions.co.in",
    address: "Shop - 17, Green Commercial Park, C-2SF, Jagatpura, Jaipur, Rajasthan 302017"
  },
  
  social: {
    facebook: "https://www.facebook.com/AgileSolutionz",
    instagram: "https://www.instagram.com/agilesolutionz", 
    linkedin: "https://www.linkedin.com/company/agilesolutions1/",
    youtube: "https://youtu.be/GQS1VVDfkLM?si=EI-aF4GlUL19ctGz",
    gmb: "https://share.google/ZXGvvp9nk5Lv9Lpho"
  },
  
  stats: {
    experience: "7+",
    projects: "600+",
    satisfaction: "95%",
    adSpend: "₹50L+"
  },
  
  vision: "To be recognized as a leading digital solutions partner worldwide by empowering businesses with innovative websites, mobile apps, and marketing strategies that drive measurable results.",
  
  mission: "Our mission is to deliver affordable, creative, and result-oriented digital solutions that help businesses establish a strong online presence, attract more customers, and achieve sustainable growth. We aim to combine technology, creativity, and strategy to create long-term value for our clients."
};

export const services = {
  categories: [
    {
      id: "web-development",
      title: "Website Design & Development", 
      icon: "Code",
      description: "Modern, responsive websites built with latest technologies",
      services: [
        "Modern & Responsive Website Design",
        "Custom Web Development Services",
        "eCommerce Development (WooCommerce / Shopify)", 
        "Game Development",
        "CRM & Custom Software Solutions"
      ]
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing Services",
      icon: "TrendingUp", 
      description: "Complete digital marketing solutions for growth",
      services: [
        "Local SEO & Google Business Listing",
        "SEO (Search Engine Optimization)",
        "Social Media Optimization (SMO)",
        "WhatsApp Business API (Meta API)",
        "RCS Messaging (Powered by Google)"
      ]
    },
    {
      id: "paid-advertising", 
      title: "Paid Advertising",
      icon: "Megaphone",
      description: "Strategic advertising campaigns that deliver results",
      services: [
        "Pay Per Click (PPC) Campaigns",
        "Facebook & Instagram Ads", 
        "Google Ads (Search, Display, Shopping)",
        "Lead Generation & Conversion Campaigns"
      ]
    },
    {
      id: "mobile-development",
      title: "Mobile Application Development",
      icon: "Smartphone",
      description: "Native and cross-platform mobile applications", 
      services: [
        "Android App Development",
        "iOS App Development",
        "App Store Optimization (ASO)",
        "Flutter App Development"
      ]
    },
    {
      id: "graphics-design",
      title: "Graphics Designing", 
      icon: "Palette",
      description: "Creative designs that make your brand stand out",
      services: [
        "UI/UX Designing",
        "Logo Designing", 
        "Graphics Designing",
        "UGC Content Creation",
        "Video Editing Service"
      ]
    },
    {
      id: "ivr-messaging",
      title: "IVR Calling and Messaging",
      icon: "Phone", 
      description: "Advanced communication solutions for businesses",
      services: [
        "IVR Calling Solution",
        "Bulk SMS Broadcasting",
        "Bulk WhatsApp Messaging", 
        "Voice Broadcasting"
      ]
    }
  ]
};

export const portfolio = [
  {
    title: "VoltCab - Electric Vehicle Solutions",
    url: "https://voltcab.in/",
    category: "Website Development",
    description: "Modern electric vehicle solutions platform with responsive design and booking system.",
    technologies: ["WordPress", "Custom Development", "Responsive Design"]
  },
  {
    title: "Diya Mineral - Mining Solutions", 
    url: "https://diyamineral.com/",
    category: "Corporate Website",
    description: "Professional corporate website for mining industry with comprehensive service showcase.",
    technologies: ["HTML/CSS", "JavaScript", "SEO Optimized"]
  },
  {
    title: "Glacier Agritech - Agriculture Technology",
    url: "https://glacieragritech.com/",
    category: "Technology Platform", 
    description: "Advanced agriculture technology platform with modern design and functionality.",
    technologies: ["React", "Node.js", "API Integration"]
  },
  {
    title: "Harmony Health with Ankita",
    url: "https://harmonyhealthwithankita.in/",
    category: "Healthcare",
    description: "Healthcare consultation platform with appointment booking and patient management.",
    technologies: ["WordPress", "Custom Plugins", "Payment Gateway"]
  },
  {
    title: "Berkowits Hair & Skin Clinic",
    url: "https://berkowits.com/", 
    category: "Healthcare",
    description: "Premium hair and skin clinic website with online consultation and booking.",
    technologies: ["Custom CMS", "Appointment System", "E-commerce"]
  },
  {
    title: "CaterNinja - Food Delivery",
    url: "https://new.caterninja.com/",
    category: "E-commerce", 
    description: "Food delivery platform with real-time tracking and payment integration.",
    technologies: ["React", "Payment Gateway", "Real-time Tracking"]
  }
];

export const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "TechCorp India", 
    content: "Agile Edtech delivered an exceptional website that boosted our online presence significantly.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    company: "Fashion Hub",
    content: "Their e-commerce solution increased our sales by 200%. Highly recommended!",
    rating: 5
  },
  {
    name: "Amit Gupta", 
    company: "StartupXYZ",
    content: "Professional team, timely delivery, and excellent support. Perfect partner for digital transformation.",
    rating: 5
  }
];

// Mock form submission function
export const submitContactForm = async (formData) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock successful submission
  console.log('Contact form submitted:', formData);
  return {
    success: true, 
    message: "Thank you for contacting us. We'll get back to you within 24 hours."
  };
};

export const submitQuoteRequest = async (formData) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock successful submission  
  console.log('Quote request submitted:', formData);
  return {
    success: true,
    message: "Thank you! We'll contact you within 24 hours with a detailed quote."
  };
};