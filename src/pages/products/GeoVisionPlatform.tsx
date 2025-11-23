import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Satellite, Map, Layers, Camera, BarChart, Globe } from "lucide-react";
import geoVisionPlatformInterface from "@/assets/products/geovision-platform-interface.jpg";

const GeoVisionPlatform = () => {
  const features = [
    {
      icon: Satellite,
      title: "Satellite Imagery Processing",
      description: "Process high-resolution satellite imagery from multiple sources including Sentinel, Landsat, and commercial providers"
    },
    {
      icon: Map,
      title: "Change Detection",
      description: "Automated detection of land use changes, urban growth, deforestation, and environmental changes"
    },
    {
      icon: Layers,
      title: "Multi-Layer Analysis",
      description: "Overlay multiple data layers including terrain, vegetation indices, and infrastructure"
    },
    {
      icon: Camera,
      title: "3D Visualization",
      description: "Create 3D terrain models and visualizations from digital elevation data"
    },
    {
      icon: BarChart,
      title: "Spectral Analysis",
      description: "Perform NDVI, NDWI, and other spectral indices for vegetation and water body analysis"
    },
    {
      icon: Globe,
      title: "Web GIS Interface",
      description: "Cloud-based platform accessible from anywhere with intuitive mapping tools"
    }
  ];

  const benefits = [
    "Better urban and rural planning with accurate spatial data",
    "Environmental monitoring and conservation efforts",
    "Disaster mapping and damage assessment",
    "Agricultural monitoring and crop estimation",
    "Infrastructure planning and development tracking",
    "Historical analysis and trend identification"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">GeoVision Platform</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Advanced Geospatial Analytics and Remote Sensing Platform
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="container-custom">
          <div className="text-sm text-gray-600">
            <span>Home</span> <span className="mx-2">/</span>
            <span>Products</span> <span className="mx-2">/</span>
            <span className="text-primary font-semibold">GeoVision Platform</span>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Powerful Geospatial Intelligence</h2>
              <p className="text-gray-700 mb-4">
                GeoVision Platform is a comprehensive geospatial analytics solution that processes satellite imagery and remote sensing data to provide actionable insights for urban planning, environmental monitoring, agriculture, and disaster management.
              </p>
              <p className="text-gray-700 mb-4">
                The platform combines advanced image processing algorithms, machine learning, and GIS capabilities to analyze changes in land use, detect environmental threats, monitor infrastructure development, and support evidence-based decision making.
              </p>
              <p className="text-gray-700">
                Used by government agencies, research institutions, urban planners, and environmental organizations, GeoVision transforms raw satellite data into meaningful information that drives better policies and outcomes.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 flex items-center justify-center">
              <Satellite className="text-primary" size={200} />
            </div>
          </div>
        </div>
      </section>

      {/* Product Screenshots */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Interface</h2>
          <div className="max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img src={geoVisionPlatformInterface} alt="GeoVision Platform Interface" className="w-full h-full object-cover" />
              <div className="bg-white p-6">
                <h3 className="font-semibold text-lg mb-2">Advanced Geospatial Analysis</h3>
                <p className="text-gray-600">Satellite imagery layers, change detection, and spectral analysis tools</p>
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

      {/* CTA Section */}
      <section className="section-padding hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Unlock Geospatial Intelligence
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Discover how GeoVision can transform your spatial analysis capabilities
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

export default GeoVisionPlatform;
