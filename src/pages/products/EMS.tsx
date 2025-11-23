import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, AlertCircle, MapPin, Radio, Users, Cloud, Phone } from "lucide-react";
import emsCommandCenter from "@/assets/products/ems-command-center.jpg";
import ProductDemoForm from "@/components/ProductDemoForm";

const EMS = () => {
  const features = [
    {
      icon: AlertCircle,
      title: "Real-Time Incident Management",
      description: "Unified dashboard for tracking and coordinating response to emergencies"
    },
    {
      icon: MapPin,
      title: "GIS-Based Command Center",
      description: "Interactive maps showing incident locations, resources, and affected areas"
    },
    {
      icon: Cloud,
      title: "Impact-Based Forecasting",
      description: "Weather-based disaster prediction and impact assessment for proactive planning"
    },
    {
      icon: Radio,
      title: "Multi-Agency Coordination",
      description: "Seamless communication and coordination between police, fire, medical, and disaster response teams"
    },
    {
      icon: Users,
      title: "Resource Management",
      description: "Track and deploy emergency resources including vehicles, equipment, and personnel"
    },
    {
      icon: Phone,
      title: "Citizen Alert System",
      description: "Mass notification system for warning citizens via SMS, app notifications, and sirens"
    }
  ];

  const benefits = [
    "Faster response times during emergencies",
    "Better coordination between response agencies",
    "Reduced loss of life and property through early warnings",
    "Improved resource allocation and deployment",
    "Enhanced situational awareness for decision makers",
    "Historical data analysis for better disaster preparedness"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Emergency Management System</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Statewide Disaster Command & Control Platform
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="container-custom">
          <div className="text-sm text-gray-600">
            <span>Home</span> <span className="mx-2">/</span>
            <span>Products</span> <span className="mx-2">/</span>
            <span className="text-primary font-semibold">Emergency Management System</span>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Comprehensive Disaster Response Platform</h2>
              <p className="text-gray-700 mb-4">
                The Emergency Management System (EMS) is a state-of-the-art platform designed to help governments and agencies prepare for, respond to, and recover from natural disasters and emergencies. From floods and cyclones to earthquakes and industrial accidents, EMS provides the tools needed for effective disaster management.
              </p>
              <p className="text-gray-700 mb-4">
                The system integrates weather forecasting, GIS mapping, resource tracking, and multi-agency coordination into a single command and control center. Real-time data visualization and impact-based forecasting enable authorities to make informed decisions and deploy resources where they're needed most.
              </p>
              <p className="text-gray-700">
                Used by state disaster management authorities across India, EMS has proven its effectiveness in saving lives and minimizing damage during major disasters.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 flex items-center justify-center">
              <AlertCircle className="text-primary" size={200} />
            </div>
          </div>
        </div>
      </section>

      {/* Product Screenshots */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Command Center Interface</h2>
          <div className="max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img src={emsCommandCenter} alt="Emergency Management Command Center" className="w-full h-full object-cover" />
              <div className="bg-white p-6">
                <h3 className="font-semibold text-lg mb-2">Real-Time Disaster Management</h3>
                <p className="text-gray-600">Global incident tracking, resource allocation, and multi-agency coordination dashboard</p>
              </div>
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

      {/* Demo Request Form */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <ProductDemoForm productName="Emergency Management System (EMS)" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Strengthen Your Disaster Response Capabilities
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Learn how EMS can help protect your community
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

export default EMS;
