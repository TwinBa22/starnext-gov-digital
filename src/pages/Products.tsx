import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Cloud, Sprout, Heart, Bot, Factory, Monitor, Satellite } from "lucide-react";
import smartCityImage from "@/assets/products/smart-city-hero.jpg";
import governanceImage from "@/assets/products/governance-ai-hero.jpg";
import manufacturingImage from "@/assets/products/manufacturing-hero.jpg";
import agricultureImage from "@/assets/products/agriculture-drone-hero.jpg";
import disasterImage from "@/assets/products/disaster-response-hero.jpg";
import livestockImage from "@/assets/products/livestock-iot-hero.jpg";
import workforceImage from "@/assets/products/workforce-monitoring-hero.jpg";
import geospatialImage from "@/assets/products/geospatial-hero.jpg";

const Products = () => {
  const productCategories = [
    {
      id: "smart-city",
      icon: MapPin,
      title: "Smart City & Public Safety Suite",
      description: "AI-powered traffic management, edge analytics, and unified city governance",
      image: smartCityImage,
      products: [
        { name: "AI Smart Traffic Management System (STMS)", slug: "smart-traffic" },
        { name: "EdgeSense – Edge AI Analytics Device", slug: "edge-sense" },
        { name: "Unified City Governance Suite (eCivic)", slug: "ecivic" },
        { name: "Unauthorized Construction Detection (GeoVision)", slug: "geovision-construction" },
      ]
    },
    {
      id: "governance",
      icon: Bot,
      title: "Governance Automation & AI",
      description: "Agentic AI for grievance routing, WhatsApp services, and auto-documentation",
      image: governanceImage,
      products: [
        { name: "Agentic AI Governance Platform", slug: "ai-governance" },
        { name: "PalakMantri APP – Minister Outreach Platform", slug: "palakmantri" },
      ]
    },
    {
      id: "manufacturing",
      icon: Factory,
      title: "Manufacturing, Industry & Enterprise",
      description: "Complete ERP solutions and enterprise AI automation",
      image: manufacturingImage,
      products: [
        { name: "StarNext ERP (Manufacturing ERP)", slug: "starnext-erp" },
        { name: "Enterprise AI Automation Suite", slug: "enterprise-ai" },
      ]
    },
    {
      id: "agriculture",
      icon: Sprout,
      title: "Agriculture, Drone & Rural Development",
      description: "Drone-based agriculture, crop health monitoring, and AI disease detection",
      image: agricultureImage,
      products: [
        { name: "Drone Agriculture Platform", slug: "drone-agriculture" },
        { name: "AgriSight AI Platform", slug: "agrisight" },
      ]
    },
    {
      id: "disaster",
      icon: Cloud,
      title: "Disaster & Emergency Response",
      description: "Statewide disaster command and control with impact-based forecasting",
      image: disasterImage,
      products: [
        { name: "Emergency Management System (EMS)", slug: "ems" },
      ]
    },
    {
      id: "livestock",
      icon: Heart,
      title: "Animal Husbandry & Livestock",
      description: "IoT-enabled livestock monitoring with GPS tracking and disease prediction",
      image: livestockImage,
      products: [
        { name: "Livestock IoT & AI Monitoring Suite", slug: "livestock-monitoring" },
      ]
    },
    {
      id: "workforce",
      icon: Monitor,
      title: "Workforce, Compliance & IT Monitoring",
      description: "Device and employee monitoring with compliance reporting",
      image: workforceImage,
      products: [
        { name: "HawkEye – Device & Employee Monitoring", slug: "hawkeye" },
      ]
    },
    {
      id: "geospatial",
      icon: Satellite,
      title: "Geospatial & Remote Sensing",
      description: "Satellite imagery, change detection, and disaster mapping",
      image: geospatialImage,
      products: [
        { name: "GeoVision Platform", slug: "geovision-platform" },
      ]
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Innovative AI-powered solutions for smart governance, agriculture, public safety, and enterprise automation
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="container-custom">
          <div className="text-sm text-gray-600">
            <span>Home</span> <span className="mx-2">/</span>
            <span className="text-primary font-semibold">Products</span>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <Card
                key={category.id}
                className="shadow-lg card-hover animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <category.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4">{category.description}</p>
                  <div className="space-y-2">
                    {category.products.map((product) => (
                      <Link
                        key={product.slug}
                        to={`/products/${product.slug}`}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 transition-colors group"
                      >
                        <span className="text-sm font-medium text-gray-700 group-hover:text-primary">
                          {product.name}
                        </span>
                        <ArrowRight className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
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
            Interested in Our Products?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Contact us to learn more about our innovative solutions and how they can transform your operations
          </p>
          <Link to="/contact">
            <button className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold text-lg shadow-xl transition-all duration-300 hover:shadow-2xl">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
