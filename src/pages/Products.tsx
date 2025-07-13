
import React from 'react';
import { Activity, Smartphone, Shield, BarChart3, Settings, Wifi, Battery, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const productFeatures = [
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Advanced Sensor Technology",
      description: "Multi-parameter sensors monitor temperature, pressure, pH levels, and gas composition in real-time with laboratory-grade accuracy."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Dashboard App",
      description: "Comprehensive mobile application for iOS and Android with intuitive interface, push notifications, and offline data access."
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Remote Monitoring",
      description: "24/7 remote monitoring capabilities with cloud-based data storage and real-time alerts for system anomalies."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Data Analytics",
      description: "Advanced analytics engine with predictive maintenance, efficiency optimization, and comprehensive reporting tools."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Bank-level encryption, secure data transmission, and compliance with international data protection standards."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Easy Integration",
      description: "Seamless integration with existing biogas systems, minimal installation time, and comprehensive technical support."
    }
  ];

  const specifications = [
    { label: "Operating Temperature", value: "-20°C to 70°C" },
    { label: "Sensor Accuracy", value: "±0.1% precision" },
    { label: "Connectivity", value: "WiFi, 4G, Bluetooth" },
    { label: "Battery Life", value: "Up to 2 years" },
    { label: "Data Storage", value: "Cloud + Local backup" },
    { label: "Response Time", value: "< 5 seconds" },
    { label: "Certification", value: "CE, FCC, ISO certified" },
    { label: "Warranty", value: "3 years full coverage" }
  ];

  const packages = [
    {
      name: "Basic Monitor",
      price: "$2,999",
      description: "Essential monitoring for small residential systems",
      features: [
        "Basic sensor package",
        "Mobile app access",
        "Email alerts",
        "6 months support",
        "Local data storage"
      ],
      popular: false
    },
    {
      name: "Professional System",
      price: "$5,999",
      description: "Complete solution for commercial applications",
      features: [
        "Advanced sensor suite",
        "Cloud-based analytics",
        "Real-time monitoring",
        "12 months support",
        "Custom reporting",
        "Integration support"
      ],
      popular: true
    },
    {
      name: "Enterprise Solution",
      price: "Custom",
      description: "Full-scale deployment for large institutions",
      features: [
        "Multi-site monitoring",
        "Custom dashboard",
        "24/7 technical support",
        "On-site installation",
        "Training included",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Smart Biogas Monitoring Solutions
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of intelligent biogas monitoring systems 
              designed to optimize performance, ensure safety, and maximize efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                Next-Generation Monitoring Technology
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center text-green-100">
                  <CheckCircle className="h-6 w-6 text-green-300 mr-3" />
                  Real-time system monitoring and alerts
                </li>
                <li className="flex items-center text-green-100">
                  <CheckCircle className="h-6 w-6 text-green-300 mr-3" />
                  Mobile dashboard with intuitive controls
                </li>
                <li className="flex items-center text-green-100">
                  <CheckCircle className="h-6 w-6 text-green-300 mr-3" />
                  Predictive maintenance capabilities
                </li>
                <li className="flex items-center text-green-100">
                  <CheckCircle className="h-6 w-6 text-green-300 mr-3" />
                  Cloud-based data analytics and reporting
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  to="/demo"
                  className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all duration-200 font-semibold inline-flex items-center"
                >
                  Watch Product Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Battery className="h-12 w-12 text-green-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">2 Years</div>
                  <div className="text-green-100">Battery Life</div>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 text-green-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-green-100">Support</div>
                </div>
                <div className="text-center">
                  <Wifi className="h-12 w-12 text-green-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-green-100">Uptime</div>
                </div>
                <div className="text-center">
                  <Shield className="h-12 w-12 text-green-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">3 Years</div>
                  <div className="text-green-100">Warranty</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Features & Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our biogas monitoring systems combine cutting-edge hardware with intelligent 
              software to deliver comprehensive system oversight and control.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
                <div className="text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600">
              Industry-leading specifications for professional biogas monitoring
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {specifications.map((spec, index) => (
                <div key={index} className="p-6 text-center">
                  <div className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-2">
                    {spec.label}
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options to meet the needs of every biogas system, 
              from residential installations to large commercial deployments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                pkg.popular ? 'ring-2 ring-green-500 scale-105' : ''
              }`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-green-500 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className={`p-8 ${pkg.popular ? 'pt-12' : ''}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">{pkg.price}</div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-full font-semibold transition-all duration-200 ${
                      pkg.popular
                        ? 'bg-green-500 text-white hover:bg-green-600'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
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
            Ready to Upgrade Your Biogas System?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Schedule a free consultation with our biogas experts to determine the best 
            monitoring solution for your specific needs and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-200 font-semibold text-lg"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/demo"
              className="bg-green-800 text-white px-8 py-4 rounded-full hover:bg-green-900 transition-all duration-200 font-semibold text-lg"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
