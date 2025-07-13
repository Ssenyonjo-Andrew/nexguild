
import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Us",
      description: "Get in touch via email for detailed inquiries",
      contact: "ande.ssenyonjo@gmail.com",
      action: "mailto:ande.ssenyonjo@gmail.com"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Call Us",
      description: "Speak directly with our biogas experts",
      contact: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Visit Us",
      description: "Schedule an in-person consultation",
      contact: "123 Green Energy Street, City, State",
      action: "#"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Live Chat",
      description: "Chat with our support team",
      contact: "Available 9 AM - 6 PM EST",
      action: "#"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM EST" },
    { day: "Sunday", hours: "Closed" },
    { day: "Emergency Support", hours: "24/7 for existing customers" }
  ];

  const faqs = [
    {
      question: "How long does installation take?",
      answer: "Most installations are completed within 2-4 hours, depending on system complexity and existing infrastructure."
    },
    {
      question: "What's included in the warranty?",
      answer: "We provide a comprehensive 3-year warranty covering all hardware components, software updates, and technical support."
    },
    {
      question: "Can the system work with existing biogas setups?",
      answer: "Yes, our monitoring systems are designed to integrate seamlessly with most existing biogas installations."
    },
    {
      question: "Is training provided?",
      answer: "Absolutely! We provide comprehensive training for all users, including hands-on sessions and ongoing support resources."
    },
    {
      question: "What are the monthly costs?",
      answer: "Monthly costs vary by package, starting from $29/month for basic cloud services up to custom enterprise pricing."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your biogas system with smart monitoring technology? 
            Our experts are here to help you find the perfect solution.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multiple Ways to Connect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the communication method that works best for you. Our team is ready to assist.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-green-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {method.description}
                </p>
                <div className="text-green-600 font-medium">
                  {method.contact}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="john.doe@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Organization Type
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors">
                    <option value="">Select your organization type</option>
                    <option value="school">School/University</option>
                    <option value="hospital">Hospital/Healthcare</option>
                    <option value="residential">Residential</option>
                    <option value="farm">Farm/Agriculture</option>
                    <option value="commercial">Commercial/Industrial</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Please provide details about your biogas monitoring needs..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 font-semibold flex items-center justify-center group"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
            
            {/* Contact Info & Hours */}
            <div className="space-y-8">
              
              {/* Office Hours */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <Clock className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-4">
                  {officeHours.map((hours, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{hours.day}</span>
                      <span className="text-gray-600">{hours.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <Link
                    to="/demo"
                    className="flex items-center justify-between p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
                  >
                    <div>
                      <div className="font-medium text-gray-900">Watch Demo Videos</div>
                      <div className="text-sm text-gray-600">See our system in action</div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-green-600 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <a
                    href="mailto:ande.ssenyonjo@gmail.com?subject=Demo Request"
                    className="flex items-center justify-between p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
                  >
                    <div>
                      <div className="font-medium text-gray-900">Schedule Live Demo</div>
                      <div className="text-sm text-gray-600">Book a personalized session</div>
                    </div>
                    <Calendar className="h-5 w-5 text-green-600" />
                  </a>
                  
                  <Link
                    to="/products"
                    className="flex items-center justify-between p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
                  >
                    <div>
                      <div className="font-medium text-gray-900">View Products</div>
                      <div className="text-sm text-gray-600">Explore our solutions</div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-green-600 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our biogas monitoring systems.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Have more questions?
            </p>
            <Link
              to="/feedback"
              className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors font-medium"
            >
              Contact Our Support Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
