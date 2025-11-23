import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Factory, Package, DollarSign, Users, BarChart, Settings } from "lucide-react";
import starNextDashboard from "@/assets/products/starnext-erp-dashboard.jpg";

const StarNextERP = () => {
  const features = [
    {
      icon: Factory,
      title: "Production Planning",
      description: "Advanced MRP, capacity planning, and shop floor control for optimized manufacturing"
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Real-time tracking of raw materials, WIP, and finished goods with multi-warehouse support"
    },
    {
      icon: DollarSign,
      title: "Financial Management",
      description: "Complete accounting, costing, and financial reporting with GST compliance"
    },
    {
      icon: Users,
      title: "HR & Payroll",
      description: "Comprehensive human resource management with attendance, payroll, and performance tracking"
    },
    {
      icon: BarChart,
      title: "Analytics & Reports",
      description: "Real-time dashboards and customizable reports for business intelligence"
    },
    {
      icon: Settings,
      title: "Customizable Modules",
      description: "Flexible system that adapts to your unique manufacturing processes and workflows"
    }
  ];

  const benefits = [
    "Streamlined manufacturing operations and reduced lead times",
    "Better inventory control and cost reduction",
    "Improved financial visibility and compliance",
    "Enhanced productivity and resource utilization",
    "Real-time insights for faster decision making",
    "Scalable solution that grows with your business"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">StarNext ERP</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Complete Manufacturing ERP Solution for Modern Enterprises
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="container-custom">
          <div className="text-sm text-gray-600">
            <span>Home</span> <span className="mx-2">/</span>
            <span>Products</span> <span className="mx-2">/</span>
            <span className="text-primary font-semibold">StarNext ERP</span>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Comprehensive Manufacturing Management</h2>
              <p className="text-gray-700 mb-4">
                StarNext ERP is a powerful, integrated enterprise resource planning solution designed specifically for manufacturing industries. From production planning to financial management, StarNext covers every aspect of your business operations.
              </p>
              <p className="text-gray-700 mb-4">
                Built with Indian manufacturing needs in mind, the system includes GST compliance, multi-location management, and industry-specific workflows that help you manage complex manufacturing processes efficiently.
              </p>
              <p className="text-gray-700">
                Whether you're a small-scale manufacturer or a large enterprise, StarNext ERP scales with your business, providing the tools you need to optimize operations, reduce costs, and drive growth.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 flex items-center justify-center">
              <Factory className="text-primary" size={200} />
            </div>
          </div>
        </div>
      </section>

      {/* Product Screenshots */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">ERP Dashboard</h2>
          <div className="max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img src={starNextDashboard} alt="StarNext ERP Dashboard" className="w-full h-full object-cover" />
              <div className="bg-white p-6">
                <h3 className="font-semibold text-lg mb-2">Comprehensive Manufacturing Dashboard</h3>
                <p className="text-gray-600">Real-time insights into production, inventory, financials, and operations</p>
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
            Modernize Your Manufacturing Operations
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Discover how StarNext ERP can transform your business
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

export default StarNextERP;
