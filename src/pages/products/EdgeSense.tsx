import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Cpu, Zap, Shield, BarChart, Camera, Cloud } from "lucide-react";

const EdgeSense = () => {
  const features = [
    {
      icon: Cpu,
      title: "Edge AI Processing",
      description: "Real-time AI inference at the edge with minimal latency and maximum privacy"
    },
    {
      icon: Camera,
      title: "Multi-Camera Support",
      description: "Simultaneous processing of multiple video streams with object detection and tracking"
    },
    {
      icon: Zap,
      title: "Low Power Consumption",
      description: "Optimized hardware design for energy-efficient 24/7 operation"
    },
    {
      icon: Shield,
      title: "Privacy-First Design",
      description: "Process data locally without sending sensitive information to the cloud"
    },
    {
      icon: BarChart,
      title: "Real-Time Analytics",
      description: "Instant insights with crowd counting, behavior analysis, and anomaly detection"
    },
    {
      icon: Cloud,
      title: "Hybrid Cloud Integration",
      description: "Seamless integration with cloud platforms for centralized monitoring and control"
    }
  ];

  const benefits = [
    "Reduced bandwidth costs by processing data at the edge",
    "Enhanced privacy with local data processing",
    "Real-time decision making without cloud latency",
    "Scalable deployment across multiple locations",
    "Lower operational costs with energy-efficient hardware",
    "Plug-and-play installation with minimal setup"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">EdgeSense</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Edge AI Analytics Device for Real-Time Intelligence
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="container-custom">
          <div className="text-sm text-gray-600">
            <span>Home</span> <span className="mx-2">/</span>
            <span>Products</span> <span className="mx-2">/</span>
            <span className="text-primary font-semibold">EdgeSense</span>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Intelligent Edge AI Device</h2>
              <p className="text-gray-700 mb-4">
                EdgeSense is a powerful edge AI analytics device designed to bring artificial intelligence to the edge of your network. Process video streams, detect objects, analyze behaviors, and generate insights in real-time without relying on cloud connectivity.
              </p>
              <p className="text-gray-700 mb-4">
                Built on cutting-edge hardware with dedicated AI accelerators, EdgeSense delivers high-performance inference for computer vision, analytics, and decision-making applications.
              </p>
              <p className="text-gray-700">
                Perfect for smart cities, retail analytics, industrial monitoring, security applications, and any scenario requiring real-time AI processing with privacy and low latency.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 flex items-center justify-center">
              <Cpu className="text-primary" size={200} />
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
            Experience Edge AI Innovation
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Transform your operations with EdgeSense's powerful edge AI capabilities
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

export default EdgeSense;
