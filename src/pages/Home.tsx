
import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Users, Building2, Home as HomeIcon, Tractor, Smartphone, Activity, Shield, BarChart3, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [counters, setCounters] = useState({
    systems: 0,
    co2Reduced: 0,
    customers: 0,
    uptime: 0
  });

  // Counter animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setCounters({
        systems: 250,
        co2Reduced: 1500,
        customers: 180,
        uptime: 99.9
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Real-time Monitoring",
      description: "Advanced sensors provide continuous monitoring of your biogas system with instant alerts and notifications."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Dashboard",
      description: "Access your system data anywhere, anytime with our intuitive mobile application and web dashboard."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Reliable & Secure",
      description: "Enterprise-grade security and 99.9% uptime ensure your biogas system operates smoothly."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Data Analytics",
      description: "Comprehensive analytics and reporting help optimize your biogas production and efficiency."
    }
  ];

  const targetMarkets = [
    {
      icon: <Building2 className="h-12 w-12" />,
      title: "Schools & Universities",
      description: "Sustainable energy solutions for educational institutions",
      benefits: ["Reduce energy costs", "Educational opportunities", "Environmental sustainability"]
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Hospitals & Healthcare",
      description: "Reliable biogas systems for critical healthcare facilities",
      benefits: ["Backup power source", "Cost-effective energy", "Reduced carbon footprint"]
    },
    {
      icon: <HomeIcon className="h-12 w-12" />,
      title: "Households",
      description: "Smart biogas solutions for residential use",
      benefits: ["Lower utility bills", "Energy independence", "Easy maintenance"]
    },
    {
      icon: <Tractor className="h-12 w-12" />,
      title: "Rural Farmers",
      description: "Convert livestock waste into valuable energy",
      benefits: ["Additional income stream", "Waste management", "Sustainable farming"]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "University Administrator",
      content: "Nexus Guild's biogas system has reduced our energy costs by 40% while providing valuable learning opportunities for our students.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Hospital Director",
      content: "The reliability and monitoring capabilities have exceeded our expectations. Essential for our healthcare operations.",
      rating: 5
    },
    {
      name: "Robert Wilson",
      role: "Dairy Farmer",
      content: "Converting our farm waste into energy has been game-changing. The mobile app makes monitoring so simple.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-green-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Smart Biogas
            <span className="block text-green-300">Monitoring Systems</span>
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Revolutionary sensor-based technology with mobile dashboard capabilities. 
            Monitor, control, and optimize your biogas systems from anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-200 font-semibold text-lg flex items-center group"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-200 font-semibold text-lg flex items-center group"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Link>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                {counters.systems}+
              </div>
              <div className="text-gray-600 font-medium">Systems Installed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                {counters.co2Reduced}T
              </div>
              <div className="text-gray-600 font-medium">CO₂ Reduced</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                {counters.customers}+
              </div>
              <div className="text-gray-600 font-medium">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                {counters.uptime}%
              </div>
              <div className="text-gray-600 font-medium">System Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Technology Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our cutting-edge biogas monitoring systems combine advanced sensors with 
              intelligent software to deliver unparalleled performance and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
                <div className="text-green-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Markets Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Every Setting
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From educational institutions to rural farms, our biogas systems 
              adapt to meet the unique needs of diverse environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {targetMarkets.map((market, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="text-green-600 mr-4">
                    {market.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {market.title}
                    </h3>
                    <p className="text-gray-600 mt-1">
                      {market.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {market.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Join hundreds of satisfied customers who have transformed their energy systems with Nexus Guild.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-green-100 mb-6 text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-green-300">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Energy System?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Join the renewable energy revolution with Nexus Guild's smart biogas monitoring systems. 
            Get a free consultation and custom quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-200 font-semibold text-lg"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/products"
              className="bg-green-800 text-white px-8 py-4 rounded-full hover:bg-green-900 transition-all duration-200 font-semibold text-lg"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
