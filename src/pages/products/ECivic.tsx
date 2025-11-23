import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Users, FileText, Bell, BarChart3, Globe } from "lucide-react";

const ECivic = () => {
  const features = [
    {
      icon: Building2,
      title: "Unified City Dashboard",
      description: "Single platform for managing all city services, departments, and resources"
    },
    {
      icon: Users,
      title: "Citizen Service Portal",
      description: "Self-service portal for citizens to access services, file complaints, and track requests"
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Centralized system for managing licenses, permits, certificates, and official documents"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Automated alerts and notifications for citizens and government officials"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      description: "Comprehensive dashboards and reports for data-driven decision making"
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Support for multiple languages to serve diverse populations"
    }
  ];

  const benefits = [
    "Improved citizen satisfaction with faster service delivery",
    "Reduced paperwork and manual processes",
    "Enhanced transparency and accountability",
    "Better resource allocation and planning",
    "Streamlined inter-department coordination",
    "Data-driven governance and policy making"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <Link to="/products" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            Back to Products
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">eCivic</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Unified City Governance Suite for Smart Administration
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="container-custom">
          <div className="text-sm text-gray-600">
            <span>Home</span> <span className="mx-2">/</span>
            <span>Products</span> <span className="mx-2">/</span>
            <span className="text-primary font-semibold">eCivic</span>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Complete City Management Platform</h2>
              <p className="text-gray-700 mb-4">
                eCivic is a comprehensive digital governance platform that unifies all city services and departments under one integrated system. From citizen services to administrative workflows, eCivic streamlines every aspect of urban governance.
              </p>
              <p className="text-gray-700 mb-4">
                The platform enables seamless coordination between departments, efficient resource management, and transparent service delivery to citizens through web and mobile interfaces.
              </p>
              <p className="text-gray-700">
                Built with scalability in mind, eCivic serves cities of all sizes, from small municipalities to large metropolitan areas, with customizable modules and workflows.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 flex items-center justify-center">
              <Building2 className="text-primary" size={200} />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <feature.icon className="text-primary mb-4" size={40} />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Benefits</h2>
            <Card>
              <CardContent className="p-8">
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
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
            Transform Your City's Governance
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Discover how eCivic can modernize your city's administration
          </p>
          <Link to="/contact">
            <button className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold text-lg shadow-xl transition-all duration-300 hover:shadow-2xl">
              Schedule a Consultation
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ECivic;
