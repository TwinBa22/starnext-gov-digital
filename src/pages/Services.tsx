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
import datacenterImage from "@/assets/datacenter.jpg";
import softwareDevImage from "@/assets/software-dev-new.jpg";
import cybersecurityImage from "@/assets/cybersecurity.jpg";
import infrastructureImage from "@/assets/infrastructure-new.jpg";
import digitizationImage from "@/assets/digitization-new.jpg";
import teamImage from "@/assets/team-collaboration.jpg";

const Services = () => {
  const serviceImages: Record<string, string> = {
    "data-centre": datacenterImage,
    "software": softwareDevImage,
    "cybersecurity": cybersecurityImage,
    "infrastructure": infrastructureImage,
    "digitization": digitizationImage,
    "training": teamImage,
  };

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
      <section className="section-padding hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom text-center animate-fade-in relative z-10">
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
            <span className="text-primary font-semibold">Services</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16 bg-gray-50">
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
                  <div className="mb-6">
                    <img 
                      src={serviceImages[service.id]}
                      alt={service.title}
                      className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                    />
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 rounded-xl hero-gradient flex items-center justify-center shadow-lg">
                      <service.icon className="text-white" size={40} />
                    </div>
                      <div>
                        <h2 className="text-3xl font-bold text-primary">
                          {service.title}
                        </h2>
                      </div>
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
                    <h3 className="text-xl font-bold text-primary mb-6">
                      Key Features
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
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

      {/* Technology Capabilities */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Technology Capabilities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technical expertise across AI, Cloud, IoT, and Cybersecurity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Capabilities */}
            <Card className="shadow-lg card-hover animate-fade-in">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">AI Capabilities</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Computer Vision</h4>
                    <p className="text-gray-600">YOLO, MobileNet, ANPR, Face Recognition, Violence & Anomaly Detection, Crowd Monitoring</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">NLP & LLM</h4>
                    <p className="text-gray-600">Chatbots, Document Summarization, Auto-annexure, Meeting Transcription, Multilingual Translation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Predictive Analytics</h4>
                    <p className="text-gray-600">Disaster Risk, Disease Prediction, Congestion Forecasting, Maintenance Prediction</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Generative AI</h4>
                    <p className="text-gray-600">Report Generation, CLM Automation, AI-powered Scripts</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Drone & IoT */}
            <Card className="shadow-lg card-hover animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Drone & IoT</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>UAV-based Surveillance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>NDVI & Multispectral Imaging</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>IoT Livestock Sensors</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>LoRaWAN/4G/5G Edge Nodes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>GPS Geo-fencing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* GIS & Remote Sensing */}
            <Card className="shadow-lg card-hover animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">GIS & Remote Sensing</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Satellite-based Change Detection</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Land Use/Land Cover (LULC)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>2D/3D Mapping</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>WebGIS Portals</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Ground Truthing & Field Mapping</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Cloud & DevOps */}
            <Card className="shadow-lg card-hover animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Cloud & DevOps</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Azure, AWS, GCP Deployment</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Kubernetes Clusters</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Cloud-native Microservices</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>API Gateway & Integration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>CI/CD Pipelines</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Cybersecurity */}
            <Card className="shadow-lg card-hover animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Cybersecurity</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>SIEM/SOAR Integration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>IAM & RBAC</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Threat Monitoring</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Compliance & Audit Tools</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Enterprise Systems */}
            <Card className="shadow-lg card-hover animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Enterprise Systems</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>ERP (Manufacturing/HR/CRM)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Workflow Automation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Ticketing & Helpdesk</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Integration with AD/LDAP</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Contact us to discuss your project requirements and discover how we can help transform your digital infrastructure
          </p>
          <a href="/contact">
            <button className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold text-lg shadow-xl transition-all duration-300 hover:shadow-2xl">
              Contact Our Team
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
