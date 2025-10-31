import { Card, CardContent } from "@/components/ui/card";
import {
  Server,
  Cloud,
  Code,
  Shield,
  Network,
  FileText,
  Database,
  Wifi,
  Lock,
  Smartphone,
  BarChart3,
  GraduationCap,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "data-centre",
      icon: Server,
      title: "Data Centre & Cloud Infrastructure",
      description:
        "Comprehensive data centre design, deployment, and management solutions for mission-critical operations",
      features: [
        "DC/DR setup with high availability",
        "Hybrid Cloud deployment (AWS, Azure, NIC Cloud)",
        "High availability clusters",
        "Network security and monitoring",
        "Disaster recovery planning",
        "24/7 monitoring and failover systems",
      ],
    },
    {
      id: "software",
      icon: Code,
      title: "Software Application Development",
      description:
        "Custom-built enterprise software systems tailored for government operations and efficiency",
      features: [
        "HRMS (Human Resource Management System)",
        "DMS (Document Management System)",
        "VMS (Visitor Management System)",
        "Asset Management Solutions",
        "Mobile Field Applications",
        "MIS Dashboards and Reporting",
      ],
    },
    {
      id: "cybersecurity",
      icon: Shield,
      title: "Cybersecurity & CERT-IN Audit",
      description:
        "Comprehensive security solutions with CERT-IN compliance and advanced threat protection",
      features: [
        "SIEM & SOAR implementation",
        "Firewall and endpoint security",
        "CERT-IN audit support and compliance",
        "Access control systems",
        "Privileged Access Management (PAM)",
        "Security Operations Center (SOC) setup",
      ],
    },
    {
      id: "infrastructure",
      icon: Network,
      title: "Government Infrastructure Projects",
      description:
        "End-to-end execution of large-scale IT and Non-IT infrastructure projects",
      features: [
        "Multi-location infrastructure deployment",
        "CCTV surveillance systems",
        "Access control and biometric systems",
        "Network backbone setup",
        "UPS and DG installations",
        "Server room construction and setup",
      ],
    },
    {
      id: "digitization",
      icon: FileText,
      title: "Document Digitization Services",
      description:
        "High-volume document scanning, indexing, and digital archival solutions",
      features: [
        "High-speed document scanning",
        "Intelligent data capture and indexing",
        "Metadata extraction and tagging",
        "Digital archival systems",
        "OCR and data extraction",
        "Secure document management workflows",
      ],
    },
    {
      id: "training",
      icon: GraduationCap,
      title: "Training & Capacity Building",
      description:
        "Comprehensive training programs and long-term support for government departments",
      features: [
        "User manual development",
        "Department-wise customized training",
        "Train-the-trainer programs",
        "Long-term onsite support teams",
        "Change management support",
        "Continuous improvement workshops",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-[hsl(212,100%,18%)] to-[hsl(203,100%,59%)] text-white">
        <div className="container-custom text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Comprehensive technology solutions for government digital transformation and enterprise excellence
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="container-custom">
          <div className="text-sm text-gray-600">
            <span>Home</span> <span className="mx-2">/</span>
            <span className="text-[hsl(212,100%,18%)] font-semibold">Services</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Icon & Title */}
                <div
                  className={`animate-fade-in ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[hsl(212,100%,18%)] to-[hsl(203,100%,59%)] flex items-center justify-center shadow-lg">
                      <service.icon className="text-white" size={40} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-[hsl(212,100%,18%)]">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <Card
                  className={`shadow-xl card-hover animate-scale-in ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                  style={{ animationDelay: "0.2s" }}
                >
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-[hsl(212,100%,18%)] mb-6">
                      Key Features
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full bg-[hsl(203,100%,59%)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-[hsl(203,100%,59%)]"></div>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Technology Stack</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leveraging cutting-edge technologies for robust and scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Cloud, name: "AWS & Azure" },
              { icon: Database, name: "PostgreSQL, MongoDB" },
              { icon: Wifi, name: "NIC Cloud" },
              { icon: Lock, name: "CERT-IN Compliant" },
              { icon: Smartphone, name: "React Native" },
              { icon: Code, name: "Node.js & Python" },
              { icon: Network, name: "Cisco Networking" },
              { icon: BarChart3, name: "Power BI & Tableau" },
            ].map((tech, index) => (
              <Card
                key={index}
                className="text-center shadow-md card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <tech.icon className="mx-auto mb-3 text-[hsl(203,100%,59%)]" size={40} />
                  <p className="font-semibold text-[hsl(212,100%,18%)]">{tech.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[hsl(212,100%,18%)] to-[hsl(203,100%,59%)] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Contact us to discuss your project requirements and discover how we can help transform your digital infrastructure
          </p>
          <a href="/contact">
            <button className="bg-white text-[hsl(212,100%,18%)] hover:bg-white/90 px-8 py-4 rounded-lg font-semibold text-lg shadow-xl transition-all duration-300 hover:shadow-2xl">
              Contact Our Team
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
