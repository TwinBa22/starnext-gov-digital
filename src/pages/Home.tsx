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
import datacenterImg from "@/assets/datacenter.jpg";
import cloudImg from "@/assets/cloud-solutions-new.jpg";
import softwareImg from "@/assets/software-dev-new.jpg";
import cybersecurityImg from "@/assets/cybersecurity.jpg";
import infrastructureImg from "@/assets/infrastructure-new.jpg";
import digitizationImg from "@/assets/digitization-new.jpg";
import govBuildingImg from "@/assets/government-building.jpg";
import teamImg from "@/assets/team-collaboration.jpg";
import tasmacImg from "@/assets/tasmac-tracking.jpg";

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
      description: "End-to-End Cloud Engineering — From Architecture Design to Deployment",
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Enterprise-Grade Application Development and System Integration",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "CERT-IN audit support, SIEM, SOAR, and endpoint security solutions",
    },
    {
      icon: Network,
      title: "Infrastructure",
      description: "Designing and Implementing Multi-Location IT & Non-IT Infrastructure — Including Networking, CCTV Surveillance, Access Control, and Data Centre Ecosystems",
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
      title: "Track-and-Trace System for TASMAC",
      client: "Tamil Nadu Government",
      impact: "State-wide deployment",
      description: "Enabling Real-Time Monitoring of Liquor Movement from Manufacturing to Retail Using Barcode",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[600px] md:h-[700px] flex items-center justify-center text-white overflow-hidden"
      >
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 hero-gradient opacity-60 z-10" />
        <div className="relative z-20 container-custom text-center space-y-6 px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Powering Government Digital Transformation
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            Secure & Scalable Technology Solutions for Public Infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link to="/services">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                Explore Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Capabilities Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored for government and enterprise digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="card-hover border-0 shadow-md animate-scale-in overflow-hidden h-full" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0">
                  <div className="h-40 md:h-48 overflow-hidden">
                    <img 
                      src={index === 0 ? datacenterImg : index === 1 ? cloudImg : index === 2 ? softwareImg : index === 3 ? cybersecurityImg : index === 4 ? infrastructureImg : digitizationImg} 
                      alt={capability.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 md:p-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg hero-gradient opacity-80 flex items-center justify-center mb-4 -mt-10 md:-mt-14 relative shadow-lg">
                      <capability.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-primary">
                      {capability.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground">{capability.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-12">
            <Link to="/services">
              <Button size="lg" className="btn-primary">
                View All Services <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Government Clients Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom px-4">
          <div className="text-center mb-10 md:mb-12 animate-fade-in">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Trusted by <span className="gradient-text">Government Departments</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Serving public sector organizations across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {clients.map((client, index) => (
              <Card key={index} className="border-2 border-border hover:border-secondary transition-all duration-300 animate-fade-in group" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-5 md:p-6 flex items-center space-x-3 md:space-x-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-muted flex items-center justify-center group-hover:bg-secondary/10 transition-colors flex-shrink-0">
                    <Building2 className="text-secondary" size={28} />
                  </div>
                  <span className="text-sm md:text-base font-medium text-primary">{client}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Case Studies</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world impact through innovative government technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="card-hover shadow-lg animate-scale-in overflow-hidden h-full" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0">
                  <div className="h-40 md:h-48 overflow-hidden relative">
                    <img 
                      src={index === 0 ? datacenterImg : index === 1 ? govBuildingImg : tasmacImg} 
                      alt={study.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 hero-gradient opacity-40" />
                  </div>
                  <div className="p-5 md:p-6">
                    <div className="flex items-center space-x-2 mb-3 md:mb-4">
                      <Award className="text-secondary" size={20} />
                      <span className="text-xs md:text-sm font-semibold text-secondary">
                        {study.client}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-primary">
                      {study.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-4">{study.description}</p>
                    <div className="flex items-center space-x-2 text-xs md:text-sm font-semibold text-primary">
                      <TrendingUp size={16} className="text-secondary" />
                      <span>{study.impact}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-12">
            <Link to="/case-studies">
              <Button size="lg" className="btn-secondary">
                View All Case Studies <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-20 text-white overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${teamImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 hero-gradient opacity-95 z-10" />
        <div className="relative z-20 container-custom text-center px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Ready to Transform Your Digital Infrastructure?
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-white/90 max-w-2xl mx-auto">
            Partner with us for secure, scalable, and innovative technology solutions
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-base md:text-lg px-6 md:px-8 shadow-lg hover:shadow-xl transition-all">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
