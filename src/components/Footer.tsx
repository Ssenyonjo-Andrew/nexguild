
import React from 'react';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-green-400 to-green-600 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Nexus Guild</span>
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              Leading provider of smart biogas monitoring solutions. Revolutionizing renewable energy with advanced sensor technology and mobile dashboard capabilities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-300">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-green-100 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-green-100 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/team" className="text-green-100 hover:text-white transition-colors">About Team</Link></li>
              <li><Link to="/demo" className="text-green-100 hover:text-white transition-colors">Demo Videos</Link></li>
              <li><Link to="/contact" className="text-green-100 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-300">Our Services</h3>
            <ul className="space-y-2 text-green-100">
              <li>Smart Biogas Systems</li>
              <li>Sensor Monitoring</li>
              <li>Mobile Dashboard</li>
              <li>Installation & Support</li>
              <li>System Maintenance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-300">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-green-300" />
                <span className="text-green-100 text-sm">ande.ssenyonjo@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-300" />
                <span className="text-green-100 text-sm">+256 764-230-267</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-green-300" />
                <span className="text-green-100 text-sm">Mukono-Bugujju</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-200 text-sm">
              © 2024 Nexus Guild. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-green-200 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-green-200 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-green-200 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
