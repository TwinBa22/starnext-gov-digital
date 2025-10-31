import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Server,
  Cloud,
  Code,
  Shield,
  Network,
  FileText,
  ArrowRight,
  Users,
  TrendingUp,
  Award,
  Building2,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const stats = [
    { number: "13+", label: "Govt Labs Digitized" },
    { number: "8.66L+", label: "Citizens Served" },
    { number: "150+", label: "Employees" },
    { number: "₹15.65 Cr", label: "Revenue Generated" },
  ];

  const capabilities = [
    {
      icon: Server,
      title: "Data Centres",
      description: "End-to-end DC/DR setup with high availability clusters and network security",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Hybrid Cloud deployments on AWS, Azure, and NIC Cloud infrastructure",
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom HRMS, DMS, VMS, and Mobile Apps for government operations",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "CERT-IN audit support, SIEM, SOAR, and endpoint security solutions",
    },
    {
      icon: Network,
      title: "Infrastructure",
      description: "Multi-location IT/Non-IT infrastructure with CCTV and access control",
    },
    {
      icon: FileText,
      title: "Digitization",
      description: "High-speed scanning, indexing, and archival for document management",
    },
  ];

  const clients = [
    "Forensic Science Laboratories - Maharashtra",
    "Tribal Department - Maharashtra",
    "Social Justice Department - Maharashtra",
    "TASMAC - Tamil Nadu",
  ];

  const caseStudies = [
    {
      title: "FSL Computerisation",
      client: "Maharashtra Government",
      impact: "13 Forensic labs digitized across the state",
      description: "Complete digital transformation with LIMS, evidence management, and reporting systems",
    },
    {
      title: "MahaTribes Portal",
      client: "Tribal Department",
      impact: "8.66 Lakh+ citizens served",
      description: "End-to-end digital platform for tribal welfare and certificate services",
    },
    {
      title: "TASMAC Infrastructure",
      client: "Tamil Nadu Government",
      impact: "State-wide deployment",
      description: "IT infrastructure and surveillance systems for government retail operations",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[600px] md:h-[700px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(1, 42, 94, 0.9), rgba(46, 167, 255, 0.8)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-custom text-center space-y-6 px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Powering Government Digital Transformation
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            Secure & Scalable Technology Solutions for Public Infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link to="/services">
              <Button size="lg" className="bg-white text-[hsl(212,100%,18%)] hover:bg-white/90 text-lg px-8">
                Explore Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[hsl(212,100%,18%)] text-lg px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored for government and enterprise digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="card-hover border-0 shadow-md animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[hsl(212,100%,18%)] to-[hsl(203,100%,59%)] flex items-center justify-center mb-4">
                    <capability.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[hsl(212,100%,18%)]">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="btn-primary">
                View All Services <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Government Clients Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by <span className="gradient-text">Government Departments</span>
            </h2>
            <p className="text-lg text-gray-600">
              Serving public sector organizations across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {clients.map((client, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-[hsl(203,100%,59%)] transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 flex items-center space-x-4">
                  <Building2 className="text-[hsl(203,100%,59%)] flex-shrink-0" size={32} />
                  <span className="font-medium text-[hsl(212,100%,18%)]">{client}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Case Studies</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world impact through innovative government technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="card-hover shadow-lg animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Award className="text-[hsl(203,100%,59%)]" size={24} />
                    <span className="text-sm font-semibold text-[hsl(203,100%,59%)]">
                      {study.client}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[hsl(212,100%,18%)]">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="flex items-center space-x-2 text-sm font-semibold text-[hsl(212,100%,18%)]">
                    <TrendingUp size={18} className="text-[hsl(203,100%,59%)]" />
                    <span>{study.impact}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/case-studies">
              <Button size="lg" className="btn-secondary">
                View All Case Studies <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[hsl(212,100%,18%)] to-[hsl(203,100%,59%)] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Infrastructure?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Partner with us for secure, scalable, and innovative technology solutions
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-[hsl(212,100%,18%)] hover:bg-white/90 text-lg px-8">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
