import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Plane, Droplets, MapPin, Camera, BarChart, Leaf } from "lucide-react";
import droneAgricultureControl from "@/assets/products/drone-agriculture-control.jpg";
import ProductDemoForm from "@/components/ProductDemoForm";

const DroneAgriculture = () => {
  const features = [
    {
      icon: Plane,
      title: "Precision Spraying",
      description: "Automated pesticide and fertilizer spraying with GPS-guided precision"
    },
    {
      icon: Camera,
      title: "Crop Monitoring",
      description: "High-resolution aerial imaging for crop health assessment and growth tracking"
    },
    {
      icon: MapPin,
      title: "Field Mapping",
      description: "Detailed topographical and boundary mapping for land management"
    },
    {
      icon: Droplets,
      title: "Smart Irrigation",
      description: "AI-powered recommendations for optimal water usage and irrigation planning"
    },
    {
      icon: BarChart,
      title: "Yield Prediction",
      description: "Data-driven forecasts for crop yields and harvest planning"
    },
    {
      icon: Leaf,
      title: "Disease Detection",
      description: "Early identification of crop diseases and pest infestations using AI"
    }
  ];

  const benefits = [
    "Reduced pesticide usage and environmental impact",
    "Improved crop yields through precision agriculture",
    "Lower labor costs and faster field operations",
    "Better resource management and cost savings",
    "Early detection of crop issues for timely intervention",
    "Data-driven insights for informed farming decisions"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Drone Agriculture Platform</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Precision Farming with Advanced Drone Technology
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="container-custom">
          <div className="text-sm text-gray-600">
            <span>Home</span> <span className="mx-2">/</span>
            <span>Products</span> <span className="mx-2">/</span>
            <span className="text-primary font-semibold">Drone Agriculture</span>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Modern Farming with Drones</h2>
              <p className="text-gray-700 mb-4">
                Our Drone Agriculture Platform revolutionizes farming by combining cutting-edge drone technology with AI-powered analytics. From precision spraying to crop health monitoring, drones enable farmers to manage their fields more efficiently and sustainably.
              </p>
              <p className="text-gray-700 mb-4">
                The platform includes autonomous flight planning, real-time data collection, and comprehensive analytics that help farmers make informed decisions about irrigation, fertilization, and pest management.
              </p>
              <p className="text-gray-700">
                Designed for farms of all sizes, our solution reduces costs, improves yields, and promotes environmentally friendly farming practices through precise application of inputs and early problem detection.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 flex items-center justify-center">
              <Plane className="text-primary" size={200} />
            </div>
          </div>
        </div>
      </section>

      {/* Product Screenshots */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Drone Control Interface</h2>
          <div className="max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img src={droneAgricultureControl} alt="Drone Agriculture Control Interface" className="w-full h-full object-cover" />
              <div className="bg-white p-6">
                <h3 className="font-semibold text-lg mb-2">Aerial Crop Health Monitoring</h3>
                <p className="text-gray-600">Real-time drone view with crop health heat maps and GPS flight path tracking</p>
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
          <ProductDemoForm productName="Drone Agriculture Platform" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Modernize Your Farm with Drones
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Discover how drone technology can transform your agricultural operations
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

export default DroneAgriculture;
