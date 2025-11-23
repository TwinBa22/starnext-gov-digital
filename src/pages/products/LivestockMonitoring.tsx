import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, MapPin, Thermometer, Bell, BarChart, Smartphone } from "lucide-react";

const LivestockMonitoring = () => {
  const features = [
    {
      icon: MapPin,
      title: "GPS Tracking",
      description: "Real-time location tracking of livestock with geofencing and movement alerts"
    },
    {
      icon: Heart,
      title: "Health Monitoring",
      description: "Continuous monitoring of vital signs including heart rate, temperature, and activity levels"
    },
    {
      icon: Thermometer,
      title: "Disease Prediction",
      description: "AI-powered early warning system for potential health issues and disease outbreaks"
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Instant notifications for abnormal behavior, health issues, or location breaches"
    },
    {
      icon: BarChart,
      title: "Analytics Dashboard",
      description: "Comprehensive reports on herd health, productivity, and breeding cycles"
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Monitor your entire herd from anywhere using our mobile application"
    }
  ];

  const benefits = [
    "Reduced livestock mortality through early disease detection",
    "Prevention of theft with GPS tracking and alerts",
    "Improved breeding management and productivity",
    "Better feed and resource management",
    "Data-driven decisions for veterinary care",
    "Reduced manual monitoring effort and costs"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Livestock IoT & AI Monitoring Suite</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Smart Solutions for Modern Animal Husbandry
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="container-custom">
          <div className="text-sm text-gray-600">
            <span>Home</span> <span className="mx-2">/</span>
            <span>Products</span> <span className="mx-2">/</span>
            <span className="text-primary font-semibold">Livestock Monitoring</span>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Complete Herd Management Solution</h2>
              <p className="text-gray-700 mb-4">
                Our Livestock IoT & AI Monitoring Suite brings modern technology to animal husbandry, enabling farmers and ranchers to monitor their herds' health, location, and behavior in real-time. IoT-enabled collars and tags track each animal's vital signs and movements.
              </p>
              <p className="text-gray-700 mb-4">
                Using machine learning algorithms, the system analyzes behavioral patterns and health data to predict potential diseases before symptoms appear, allowing for early intervention and preventing the spread of illness within the herd.
              </p>
              <p className="text-gray-700">
                Perfect for dairy farms, cattle ranches, goat farms, and government animal husbandry departments seeking to improve livestock productivity and welfare while reducing operational costs.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 flex items-center justify-center">
              <Heart className="text-primary" size={200} />
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
            Protect Your Herd with Smart Technology
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Discover how IoT and AI can transform your livestock management
          </p>
          <Link to="/contact">
            <button className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold text-lg shadow-xl transition-all duration-300 hover:shadow-2xl">
              Get Started
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LivestockMonitoring;
