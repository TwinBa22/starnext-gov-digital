import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Camera, Shield, BarChart3, Wifi, AlertCircle } from "lucide-react";
import productImage from "@/assets/products/smart-traffic-dashboard.jpg";
import ProductDemoForm from "@/components/ProductDemoForm";

const SmartTraffic = () => {
  const features = [
    {
      icon: Camera,
      title: "AI Enforcement",
      description: "Automated detection of no-helmet, triple riding, and red-light jump violations"
    },
    {
      icon: Shield,
      title: "ANPR + Blacklist",
      description: "Automatic Number Plate Recognition with real-time blacklist search capability"
    },
    {
      icon: BarChart3,
      title: "Congestion Analytics",
      description: "Real-time congestion monitoring with heatmaps and predictive analytics"
    },
    {
      icon: Wifi,
      title: "IoT Signal Integration",
      description: "Seamless integration with traffic signals and IoT devices for smart control"
    },
    {
      icon: AlertCircle,
      title: "OSINT Investigation",
      description: "Open-source intelligence tools for traffic violation investigations"
    },
  ];

  const benefits = [
    "Reduces traffic violations by up to 60%",
    "Real-time monitoring and enforcement",
    "Automated challan generation",
    "Comprehensive analytics dashboard",
    "Scalable across multiple cities",
    "Integration with existing CCTV infrastructure"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-16 hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom animate-fade-in relative z-10">
          <Link to="/products" className="inline-flex items-center text-white/90 hover:text-white mb-6 group">
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
            Back to Products
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Smart Traffic Management System (STMS)</h1>
          <p className="text-xl max-w-3xl text-white/90">
            Advanced AI-powered traffic monitoring and enforcement solution for modern smart cities
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-3">
        <div className="container-custom">
          <div className="text-sm text-gray-600">
            <span>Home</span> <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-primary">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-primary font-semibold">Smart Traffic Management</span>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <img
                src={productImage}
                alt="Smart Traffic Management System"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">
                <span className="gradient-text">Overview</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The AI Smart Traffic Management System (STMS) leverages cutting-edge artificial intelligence and computer vision to revolutionize traffic monitoring and enforcement. Our system integrates seamlessly with existing infrastructure to provide real-time violation detection, automated enforcement, and comprehensive analytics.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Designed specifically for government agencies and smart city initiatives, STMS reduces manual intervention while improving road safety and compliance rates across urban areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-10 md:py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Key Features</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive capabilities for intelligent traffic management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="shadow-lg card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-xl hero-gradient flex items-center justify-center mb-4">
                    <feature.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">Benefits</span>
              </h2>
            </div>

            <Card className="shadow-xl">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      </div>
                      <span className="text-lg text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="py-10 md:py-12">
        <div className="container-custom">
          <ProductDemoForm productName="AI Smart Traffic Management System (STMS)" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Traffic Management?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Contact us to schedule a demo and see how STMS can revolutionize your city's traffic operations
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

export default SmartTraffic;
