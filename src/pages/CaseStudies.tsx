import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingUp,
  Users,
  CheckCircle2,
  Award,
  Building2,
  MapPin,
  Calendar,
  Server,
  Cloud,
  Shield,
  Network,
} from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: "fsl",
      title: "Computerisation of Forensic Science Laboratories (FSL)",
      client: "Maharashtra Government",
      location: "13 Locations across Maharashtra",
      duration: "2022-2023",
      category: "Digital Transformation",
      icon: Building2,
      problem:
        "Maharashtra's 13 Forensic Science Laboratories faced challenges in managing evidence, case tracking, and generating timely reports. Manual processes led to delays, data inconsistencies, and inefficient resource utilization.",
      solution:
        "Implemented an integrated Laboratory Information Management System (LIMS) with evidence chain-of-custody tracking, automated report generation, case management workflows, and centralized data repository. Deployed across all 13 labs with robust networking and security infrastructure.",
      technologies: [
        "Custom LIMS Application",
        "PostgreSQL Database",
        "Document Management System",
        "Biometric Access Control",
        "CCTV Surveillance",
        "Centralized Data Centre",
      ],
      impact: [
        "13 Forensic labs digitized across the state",
        "50% reduction in report generation time",
        "100% digital evidence tracking",
        "Improved inter-lab collaboration",
        "Enhanced data security and compliance",
      ],
      metrics: [
        { label: "Labs Digitized", value: "13" },
        { label: "Users Trained", value: "500+" },
        { label: "Cases Managed", value: "50,000+" },
        { label: "Efficiency Gain", value: "50%" },
      ],
    },
    {
      id: "mahatribes",
      title: "MahaTribes & Maha-Aadim Portal",
      client: "Tribal Department, Maharashtra",
      location: "State-wide deployment",
      duration: "2022-2023",
      category: "Citizen Services",
      icon: Users,
      problem:
        "The Tribal Department needed a unified digital platform to manage tribal welfare schemes, certificate issuance, and beneficiary tracking. Existing manual processes resulted in delays and limited reach to remote tribal areas.",
      solution:
        "Developed comprehensive web and mobile portals for tribal certificate verification, scheme application management, and beneficiary tracking. Integrated with state databases for real-time verification. Deployed kiosks in remote areas with offline capability.",
      technologies: [
        "React Web Application",
        "React Native Mobile App",
        "Aadhaar Integration",
        "eSign Implementation",
        "SMS & Email Notifications",
        "Offline Data Sync",
      ],
      impact: [
        "8.66 Lakh+ citizens served",
        "Digital certificates issued online",
        "Real-time application tracking",
        "Reduced processing time by 60%",
        "Improved transparency and accountability",
      ],
      metrics: [
        { label: "Citizens Served", value: "8.66L+" },
        { label: "Certificates Issued", value: "5L+" },
        { label: "Remote Centers", value: "200+" },
        { label: "Time Saved", value: "60%" },
      ],
    },
    {
      id: "social-justice",
      title: "Caste Certificate Verification System",
      client: "Social Justice Department, Maharashtra",
      location: "District-wide implementation",
      duration: "2022-2023",
      category: "Government Process Automation",
      icon: CheckCircle2,
      problem:
        "Manual verification of caste certificates led to delays in service delivery, fraudulent applications, and administrative overhead. The department needed an automated, tamper-proof verification system.",
      solution:
        "Implemented blockchain-based certificate verification system with QR code validation, integration with legacy databases, and automated verification workflows. Provided mobile app for field verification and web portal for citizen access.",
      technologies: [
        "Blockchain Verification",
        "QR Code Generation",
        "Mobile Verification App",
        "Database Integration",
        "API Gateway",
        "Digital Signature",
      ],
      impact: [
        "100% digital verification process",
        "Fraud detection and prevention",
        "Instant certificate validation",
        "Reduced verification time from days to minutes",
        "Improved citizen satisfaction",
      ],
      metrics: [
        { label: "Certificates Verified", value: "3L+" },
        { label: "Fraud Prevented", value: "15%" },
        { label: "Verification Time", value: "<1 min" },
        { label: "Districts Covered", value: "36" },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Real-world impact through innovative government technology solutions
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="container-custom">
          <div className="text-sm text-gray-600">
            <span>Home</span> <span className="mx-2">/</span>
            <span className="text-primary font-semibold">Case Studies</span>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((study, index) => (
        <section
          key={study.id}
          className={`py-12 md:py-16 ${
            index % 2 === 0 ? "bg-white" : "bg-gray-50"
          }`}
        >
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="mb-12 animate-fade-in">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-16 h-16 rounded-xl hero-gradient flex items-center justify-center">
                    <study.icon className="text-white" size={32} />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-secondary uppercase tracking-wide">
                      {study.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">
                      {study.title}
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Building2 size={18} className="text-secondary" />
                    <span className="text-sm">{study.client}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin size={18} className="text-secondary" />
                    <span className="text-sm">{study.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar size={18} className="text-secondary" />
                    <span className="text-sm">{study.duration}</span>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {study.metrics.map((metric, idx) => (
                  <Card
                    key={idx}
                    className="text-center shadow-lg card-hover animate-scale-in"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold gradient-text mb-2">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Problem, Solution, Impact */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <Card className="shadow-lg animate-fade-in">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-4">
                      Problem Statement
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{study.problem}</p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-4">
                      Solution Provided
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-4">
                      Impact & Results
                    </h3>
                    <ul className="space-y-2">
                      {study.impact.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle2
                            size={16}
                            className="text-secondary flex-shrink-0 mt-1"
                          />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Technology Stack */}
              <Card className="shadow-lg animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-primary mb-6">
                    Technology Stack
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {study.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 text-sm text-gray-700"
                      >
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-padding hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results
          </p>
          <a href="/contact">
            <button className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold text-lg shadow-xl transition-all duration-300 hover:shadow-2xl">
              Start Your Project
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
