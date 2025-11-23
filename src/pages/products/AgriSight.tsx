import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Leaf, Camera, AlertTriangle, CloudRain, BarChart, Smartphone } from "lucide-react";

const AgriSight = () => {
  const features = [
    {
      icon: Camera,
      title: "AI Image Analysis",
      description: "Snap a photo of your crop and get instant AI-powered health assessment"
    },
    {
      icon: AlertTriangle,
      title: "Disease Detection",
      description: "Early identification of diseases, pests, and nutrient deficiencies"
    },
    {
      icon: Leaf,
      title: "Crop Advisory",
      description: "Personalized recommendations for fertilizers, pesticides, and treatments"
    },
    {
      icon: CloudRain,
      title: "Weather Integration",
      description: "Hyper-local weather forecasts and farming advisories"
    },
    {
      icon: BarChart,
      title: "Yield Tracking",
      description: "Monitor crop growth and predict harvest yields"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Easy-to-use mobile app accessible to farmers anywhere, anytime"
    }
  ];

  const benefits = [
    "Early detection of crop problems saves time and money",
    "Reduce crop losses through timely interventions",
    "Optimize fertilizer and pesticide usage",
    "Access expert agricultural knowledge on your smartphone",
    "Track crop performance across seasons",
    "Connect with agricultural experts and community"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AgriSight AI Platform</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            AI-Powered Crop Health Monitoring and Advisory System
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="container-custom">
          <div className="text-sm text-gray-600">
            <span>Home</span> <span className="mx-2">/</span>
            <span>Products</span> <span className="mx-2">/</span>
            <span className="text-primary font-semibold">AgriSight</span>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Your Pocket Agricultural Expert</h2>
              <p className="text-gray-700 mb-4">
                AgriSight brings the power of artificial intelligence to every farmer's smartphone. Simply take a photo of your crop, and our AI instantly analyzes it to identify diseases, pests, nutrient deficiencies, and provides actionable recommendations.
              </p>
              <p className="text-gray-700 mb-4">
                Built by agricultural experts and data scientists, AgriSight's AI has been trained on millions of crop images, enabling it to recognize hundreds of crop conditions with high accuracy. The platform also provides weather forecasts, market prices, and farming tips tailored to your location.
              </p>
              <p className="text-gray-700">
                Whether you're a smallholder farmer or managing large agricultural operations, AgriSight empowers you with knowledge and insights that were previously accessible only to agricultural specialists.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 flex items-center justify-center">
              <Leaf className="text-primary" size={200} />
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
            Empower Your Farming with AI
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of farmers using AgriSight to improve their harvests
          </p>
          <Link to="/contact">
            <button className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold text-lg shadow-xl transition-all duration-300 hover:shadow-2xl">
              Get Started Today
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AgriSight;
