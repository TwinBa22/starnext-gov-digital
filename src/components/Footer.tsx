import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(212,100%,18%)] text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[hsl(212,100%,18%)] to-[hsl(203,100%,59%)] rounded-lg flex items-center justify-center border-2 border-white">
                <span className="text-white font-bold text-xl">SN</span>
              </div>
              <div>
                <span className="text-xl font-bold">StarNext</span>
                <span className="text-sm text-[hsl(203,100%,75%)] block -mt-1">
                  Innovations
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              Powering Government Digital Transformation with Secure & Scalable Technology
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-300 hover:text-[hsl(203,100%,75%)] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-300 hover:text-[hsl(203,100%,75%)] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-sm text-gray-300 hover:text-[hsl(203,100%,75%)] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-300 hover:text-[hsl(203,100%,75%)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Data Centre & Cloud</li>
              <li>Software Development</li>
              <li>Cybersecurity</li>
              <li>Infrastructure Projects</li>
              <li>Digitization Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-[hsl(203,100%,75%)]" />
                <p className="text-sm text-gray-300">
                  501, 5th Floor, XYZ Tech Park,<br />
                  Senapati Bapat Road, Pune – 411016
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0 text-[hsl(203,100%,75%)]" />
                <a href="tel:+918308843553" className="text-sm text-gray-300 hover:text-[hsl(203,100%,75%)] transition-colors">
                  +91 8308843553
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0 text-[hsl(203,100%,75%)]" />
                <a href="mailto:tanmay.halaye@starnextinnovations.com" className="text-sm text-gray-300 hover:text-[hsl(203,100%,75%)] transition-colors">
                  tanmay.halaye@starnextinnovations.com
                </a>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-[hsl(203,100%,75%)] transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-[hsl(203,100%,75%)] transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2025 StarNext Innovations Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <span>MSME Certified</span>
              <span>Startup India Registered</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
