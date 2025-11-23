import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Satellite, AlertTriangle, Map, Camera, FileCheck, Brain } from "lucide-react";

const GeoVisionConstruction = () => {
  const features = [
    {
      icon: Satellite,
      title: "Satellite Imagery Analysis",
      description: "Automated analysis of high-resolution satellite imagery to detect construction activities"
    },
    {
      icon: Brain,
      title: "AI-Powered Detection",
      description: "Machine learning models trained to identify unauthorized structures and changes"
    },
    {
      icon: Map,
      title: "GIS Integration",
      description: "Seamless integration with existing GIS systems and master plans"
    },
    {
      icon: AlertTriangle,
      title: "Real-Time Alerts",
      description: "Instant notifications when unauthorized construction is detected"
    },
    {
      icon: Camera,
      title: "Change Detection",
      description: "Continuous monitoring to track changes over time with historical comparison"
    },
    {
      icon: FileCheck,
      title: "Compliance Reports",
      description: "Automated generation of violation reports with evidence and location data"
    }
  ];

  const benefits = [
    "Early detection of unauthorized construction activities",
    "Reduced manual inspection costs and time",
    "Better urban planning and zoning enforcement",
    "Enhanced revenue collection from building permits",
    "Improved environmental protection and safety",
    "Data-driven decision making for urban development"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">GeoVision Construction Detection</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            AI-Powered Unauthorized Construction Detection System
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="container-custom">
          <div className="text-sm text-gray-600">
            <span>Home</span> <span className="mx-2">/</span>
            <span>Products</span> <span className="mx-2">/</span>
            <span className="text-primary font-semibold">GeoVision Construction</span>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Smart Urban Compliance Monitoring</h2>
              <p className="text-gray-700 mb-4">
                GeoVision Construction Detection uses advanced satellite imagery analysis and artificial intelligence to automatically detect unauthorized construction activities across large urban and rural areas.
              </p>
              <p className="text-gray-700 mb-4">
                By continuously monitoring construction activities through satellite data, the system identifies violations of building codes, zoning regulations, and environmental protections, enabling authorities to take timely action.
              </p>
              <p className="text-gray-700">
                Perfect for municipal corporations, urban development authorities, and environmental agencies seeking to enforce compliance and maintain orderly urban growth.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 flex items-center justify-center">
              <Satellite className="text-primary" size={200} />
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
            Enforce Urban Compliance with AI
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Discover how GeoVision can help monitor and manage urban development
          </p>
          <Link to="/contact">
            <button className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold text-lg shadow-xl transition-all duration-300 hover:shadow-2xl">
              Request a Demo
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GeoVisionConstruction;
