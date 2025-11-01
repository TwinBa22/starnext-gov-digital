import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(210,63%,12%)] text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block mb-4">
              <div>
                <span className="text-2xl font-bold text-white">
                  StarNext
                </span>
                <span className="text-xs font-semibold text-secondary block -mt-1 tracking-wider uppercase">
                  Innovations
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/70">
              Powering Government Digital Transformation with Secure & Scalable Technology
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-white/70 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-white/70 hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-sm text-white/70 hover:text-secondary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/70 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-white/70">
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
                <MapPin size={18} className="mt-1 flex-shrink-0 text-secondary" />
                <p className="text-sm text-white/70">
                  501, 5th Floor, XYZ Tech Park,<br />
                  Senapati Bapat Road, Pune – 411016
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0 text-secondary" />
                <a href="tel:+919146189837" className="text-sm text-white/70 hover:text-secondary transition-colors">
                  +91 9146189837
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0 text-secondary" />
                <a href="mailto:pavan.hasabnis@starnextinnovations.com" className="text-sm text-white/70 hover:text-secondary transition-colors">
                  pavan.hasabnis@starnextinnovations.com
                </a>
              </div>
              <div className="flex space-x-4 mt-4">
                <a 
                  href="https://www.linkedin.com/company/starnext-innovations-pvt-ltd/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-secondary transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/60">
              © 2025 StarNext Innovations Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-white/60">
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
