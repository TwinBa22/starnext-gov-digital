import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Monitor, Eye, Shield, Clock, FileText, AlertTriangle } from "lucide-react";

const HawkEye = () => {
  const features = [
    {
      icon: Monitor,
      title: "Device Monitoring",
      description: "Track all company devices including computers, laptops, and mobile devices"
    },
    {
      icon: Eye,
      title: "Activity Tracking",
      description: "Monitor application usage, websites visited, and time spent on tasks"
    },
    {
      icon: Shield,
      title: "Security Compliance",
      description: "Ensure compliance with security policies and detect unauthorized access attempts"
    },
    {
      icon: Clock,
      title: "Attendance Management",
      description: "Automated attendance tracking with work hours and break monitoring"
    },
    {
      icon: FileText,
      title: "Productivity Reports",
      description: "Detailed reports on employee productivity and resource utilization"
    },
    {
      icon: AlertTriangle,
      title: "Real-Time Alerts",
      description: "Instant notifications for policy violations, unusual activities, or security threats"
    }
  ];

  const benefits = [
    "Improved employee productivity and accountability",
    "Enhanced data security and compliance",
    "Better resource allocation and planning",
    "Reduced IT support costs with proactive monitoring",
    "Automated attendance and payroll integration",
    "Insights for process optimization and training needs"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">HawkEye</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Enterprise Device & Employee Monitoring Solution
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="container-custom">
          <div className="text-sm text-gray-600">
            <span>Home</span> <span className="mx-2">/</span>
            <span>Products</span> <span className="mx-2">/</span>
            <span className="text-primary font-semibold">HawkEye</span>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Comprehensive Workforce Management</h2>
              <p className="text-gray-700 mb-4">
                HawkEye is an enterprise-grade device and employee monitoring solution designed to help organizations maintain productivity, ensure security compliance, and protect sensitive data. The platform provides complete visibility into device usage and employee activities while respecting privacy and legal guidelines.
              </p>
              <p className="text-gray-700 mb-4">
                From tracking application usage and website visits to monitoring file transfers and USB activities, HawkEye helps IT administrators and managers understand how company resources are being used and identify potential security risks or productivity issues.
              </p>
              <p className="text-gray-700">
                Ideal for government offices, corporate enterprises, BPOs, and any organization that needs to balance productivity monitoring with security compliance in today's hybrid work environment.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 flex items-center justify-center">
              <Eye className="text-primary" size={200} />
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
            Secure Your Workplace with HawkEye
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Learn how HawkEye can improve productivity and security in your organization
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

export default HawkEye;
