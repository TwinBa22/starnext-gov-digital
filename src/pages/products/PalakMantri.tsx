import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Smartphone, Users, Bell, MapPin, TrendingUp, CheckCircle } from "lucide-react";
import productImage from "@/assets/products/governance-ai-hero.jpg";

const PalakMantri = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Constituency Dashboard",
      description: "Department-wise performance tracking with real-time metrics and analytics"
    },
    {
      icon: MapPin,
      title: "Activity Tracking",
      description: "Record inspections, meetings, and site visits with geo-tagged reports"
    },
    {
      icon: Users,
      title: "Grievance Redressal",
      description: "Log, monitor, and resolve citizen issues with complete transparency"
    },
    {
      icon: Smartphone,
      title: "Live Reporting",
      description: "Upload geo-tagged reports with photos and videos in real-time"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Communicate directly with stakeholders through automated alerts"
    },
  ];

  const workflow = [
    "Role-based access for Citizens, Officers, Heads, and Ministers",
    "Issues flow through departments with real-time update tracking",
    "Built-in alerts, escalation mechanisms, and performance metrics",
    "Public rating system after resolution for accountability",
  ];

  const impact = [
    "1,000+ activities successfully submitted",
    "90% faster local issue redressal",
    "Significant boost in departmental performance",
    "Enhanced citizen satisfaction and trust",
  ];

  const techStack = [
    "React Native for mobile application",
    "Angular for web dashboard",
    "Node.js backend services",
    "PostgreSQL database",
    "AWS/NIC Cloud hosting",
    "OTP and role-based access security",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-20 hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom animate-fade-in relative z-10 px-4">
          <Link to="/products" className="inline-flex items-center text-white/90 hover:text-white mb-6 group">
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
            Back to Products
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">PalakMantri APP</h1>
          <p className="text-lg md:text-xl max-w-3xl text-white/90">
            Elected Minister Outreach Application - Empowering Public Leadership Through Digital Governance
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-3">
        <div className="container-custom px-4">
          <div className="text-sm text-gray-600">
            <span>Home</span> <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-primary">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-primary font-semibold">PalakMantri APP</span>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src={productImage}
                alt="PalakMantri APP"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                <span className="gradient-text">Overview</span>
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed">
                PalakMantri is a mobile-first governance platform designed for elected ministers and their offices to streamline constituency engagement, field activity reporting, and citizen grievance management.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                It ensures transparency, real-time monitoring, and public trust by digitizing all key interactions between stakeholders and the government. The platform empowers ministers to stay connected with their constituents while maintaining accountability and efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom px-4">
          <div className="text-center mb-10 md:mb-12 animate-fade-in">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              <span className="gradient-text">Key Features</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools for effective constituency management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="shadow-lg card-hover animate-fade-in h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-5 md:p-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl hero-gradient flex items-center justify-center mb-4">
                    <feature.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-3">{feature.title}</h3>
                  <p className="text-sm md:text-base text-gray-700">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-12 animate-fade-in">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                <span className="gradient-text">How It Works</span>
              </h2>
            </div>

            <Card className="shadow-xl">
              <CardContent className="p-6 md:p-8">
                <ul className="space-y-4">
                  {workflow.map((step, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      </div>
                      <span className="text-sm md:text-base text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-12 animate-fade-in">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                <span className="gradient-text">Impact & Results</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {impact.map((item, index) => (
                <Card
                  key={index}
                  className="shadow-lg card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={24} />
                      <span className="text-base md:text-lg font-medium text-gray-700">{item}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-12 animate-fade-in">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                <span className="gradient-text">Technology Stack</span>
              </h2>
            </div>

            <Card className="shadow-xl">
              <CardContent className="p-6 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {techStack.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 text-sm md:text-base text-gray-700"
                    >
                      <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0"></div>
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom text-center relative z-10 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Transform Constituency Engagement
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-white/90 max-w-2xl mx-auto">
            Contact us to schedule a demo and see how PalakMantri can revolutionize your constituency operations
          </p>
          <Link to="/contact">
            <button className="bg-white text-primary hover:bg-white/90 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg shadow-xl transition-all duration-300 hover:shadow-2xl">
              Request a Demo
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PalakMantri;
