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
  Brain,
  Plane,
  Globe,
  Container,
  ShieldCheck,
  Boxes,
  Eye,
  Satellite,
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
      <section className="py-16 md:py-20 hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom text-center animate-fade-in relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Our Services</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90 px-4">
            Comprehensive technology solutions for government digital transformation and enterprise excellence
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-3">
        <div className="container-custom">
          <div className="text-sm text-gray-600">
            <span>Home</span> <span className="mx-2">/</span>
            <span className="text-primary font-semibold">Services</span>
          </div>
        </div>
      </section>

      {/* Technology Capabilities */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              <span className="gradient-text">Technology Capabilities</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technical expertise across AI, Cloud, IoT, and Cybersecurity
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* AI Capabilities */}
            <Card className="shadow-lg card-hover animate-fade-in overflow-hidden h-full">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center flex-shrink-0">
                    <Brain className="text-purple-600" size={28} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-primary">AI Capabilities</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Computer Vision</h4>
                    <p className="text-gray-600 text-xs md:text-sm">YOLO, MobileNet, ANPR, Face Recognition, Violence & Anomaly Detection, Crowd Monitoring</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">NLP & LLM</h4>
                    <p className="text-gray-600 text-xs md:text-sm">Chatbots, Document Summarization, Auto-annexure, Meeting Transcription, Multilingual Translation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Predictive Analytics</h4>
                    <p className="text-gray-600 text-xs md:text-sm">Disaster Risk, Disease Prediction, Congestion Forecasting, Maintenance Prediction</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Generative AI</h4>
                    <p className="text-gray-600 text-xs md:text-sm">Report Generation, CLM Automation, AI-powered Scripts</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Drone & IoT */}
            <Card className="shadow-lg card-hover animate-fade-in overflow-hidden h-full" style={{ animationDelay: "0.1s" }}>
              <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <Plane className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-primary">Drone & IoT</h3>
                </div>
                <ul className="space-y-2 text-xs md:text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-0.5 flex-shrink-0">✓</span>
                    <span>UAV-based Surveillance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-0.5 flex-shrink-0">✓</span>
                    <span>NDVI & Multispectral Imaging</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-0.5 flex-shrink-0">✓</span>
                    <span>IoT Livestock Sensors</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-0.5 flex-shrink-0">✓</span>
                    <span>LoRaWAN/4G/5G Edge Nodes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-0.5 flex-shrink-0">✓</span>
                    <span>GPS Geo-fencing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* GIS & Remote Sensing */}
            <Card className="shadow-lg card-hover animate-fade-in overflow-hidden h-full" style={{ animationDelay: "0.2s" }}>
              <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500"></div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Satellite className="text-green-600" size={28} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-primary">GIS & Remote Sensing</h3>
                </div>
                <ul className="space-y-2 text-xs md:text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-0.5 flex-shrink-0">✓</span>
                    <span>Satellite-based Change Detection</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-0.5 flex-shrink-0">✓</span>
                    <span>Land Use/Land Cover (LULC)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-0.5 flex-shrink-0">✓</span>
                    <span>2D/3D Mapping</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-0.5 flex-shrink-0">✓</span>
                    <span>WebGIS Portals</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-0.5 flex-shrink-0">✓</span>
                    <span>Ground Truthing & Field Mapping</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Cloud & DevOps */}
            <Card className="shadow-lg card-hover animate-fade-in overflow-hidden h-full" style={{ animationDelay: "0.3s" }}>
              <div className="h-2 bg-gradient-to-r from-orange-500 to-amber-500"></div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <Container className="text-orange-600" size={28} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-primary">Cloud & DevOps</h3>
                </div>
                <ul className="space-y-2 text-xs md:text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-0.5 flex-shrink-0">✓</span>
                    <span>Azure, AWS, GCP Deployment</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-0.5 flex-shrink-0">✓</span>
                    <span>Kubernetes Clusters</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-0.5 flex-shrink-0">✓</span>
                    <span>Cloud-native Microservices</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-0.5 flex-shrink-0">✓</span>
                    <span>API Gateway & Integration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-0.5 flex-shrink-0">✓</span>
                    <span>CI/CD Pipelines</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Cybersecurity */}
            <Card className="shadow-lg card-hover animate-fade-in overflow-hidden h-full" style={{ animationDelay: "0.4s" }}>
              <div className="h-2 bg-gradient-to-r from-red-500 to-rose-500"></div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-red-500/10 to-rose-500/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="text-red-600" size={28} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-primary">Cybersecurity</h3>
                </div>
                <ul className="space-y-2 text-xs md:text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-0.5 flex-shrink-0">✓</span>
                    <span>SIEM/SOAR Integration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-0.5 flex-shrink-0">✓</span>
                    <span>IAM & RBAC</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-0.5 flex-shrink-0">✓</span>
                    <span>Threat Monitoring</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-0.5 flex-shrink-0">✓</span>
                    <span>Compliance & Audit Tools</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Enterprise Systems */}
            <Card className="shadow-lg card-hover animate-fade-in overflow-hidden h-full" style={{ animationDelay: "0.5s" }}>
              <div className="h-2 bg-gradient-to-r from-indigo-500 to-violet-500"></div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 flex items-center justify-center flex-shrink-0">
                    <Boxes className="text-indigo-600" size={28} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-primary">Enterprise Systems</h3>
                </div>
                <ul className="space-y-2 text-xs md:text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-0.5 flex-shrink-0">✓</span>
                    <span>ERP (Manufacturing/HR/CRM)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-0.5 flex-shrink-0">✓</span>
                    <span>Workflow Automation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-0.5 flex-shrink-0">✓</span>
                    <span>Ticketing & Helpdesk</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-secondary mt-0.5 flex-shrink-0">✓</span>
                    <span>Integration with AD/LDAP</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              <span className="gradient-text">Our Services</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end technology services for government and enterprise transformation
            </p>
          </div>

          <div className="space-y-16 md:space-y-20">
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
                      className="rounded-xl shadow-lg w-full h-48 md:h-56 lg:h-64 object-cover mb-6"
                    />
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl hero-gradient flex items-center justify-center shadow-lg flex-shrink-0">
                        <service.icon className="text-white" size={32} />
                      </div>
                      <div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
                          {service.title}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
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
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-4 md:mb-6">
                      Key Features
                    </h3>
                    <ul className="space-y-3 md:space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                          </div>
                          <span className="text-sm md:text-base text-gray-700">{feature}</span>
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

      {/* CTA Section */}
      <section className="py-16 md:py-20 hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom text-center relative z-10 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-white/90 max-w-2xl mx-auto">
            Contact us to discuss your project requirements and discover how we can help transform your digital infrastructure
          </p>
          <a href="/contact">
            <button className="bg-white text-primary hover:bg-white/90 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg shadow-xl transition-all duration-300 hover:shadow-2xl">
              Contact Our Team
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
