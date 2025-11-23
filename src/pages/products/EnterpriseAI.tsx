import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Brain, Workflow, FileSearch, MessageSquare, Zap, Code } from "lucide-react";
import enterpriseAIAutomation from "@/assets/products/enterprise-ai-automation.jpg";

const EnterpriseAI = () => {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Automation",
      description: "Automate complex business processes using AI-powered decision making and workflows"
    },
    {
      icon: FileSearch,
      title: "Document Intelligence",
      description: "Extract, analyze, and process information from documents automatically"
    },
    {
      icon: MessageSquare,
      title: "AI Chatbots & Assistants",
      description: "Deploy conversational AI for customer support, internal queries, and knowledge management"
    },
    {
      icon: Workflow,
      title: "Process Optimization",
      description: "AI-driven insights to optimize business processes and improve efficiency"
    },
    {
      icon: Zap,
      title: "Predictive Analytics",
      description: "Forecast trends, demand, and outcomes using machine learning models"
    },
    {
      icon: Code,
      title: "Custom AI Solutions",
      description: "Tailored AI models and solutions designed for your specific business needs"
    }
  ];

  const benefits = [
    "Reduced operational costs through intelligent automation",
    "Faster decision making with AI-powered insights",
    "Improved customer experience with 24/7 AI assistance",
    "Better resource allocation and planning",
    "Enhanced productivity and employee satisfaction",
    "Scalable solutions that grow with your business"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Enterprise AI Automation Suite</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Transform Your Business with Intelligent Automation
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="container-custom">
          <div className="text-sm text-gray-600">
            <span>Home</span> <span className="mx-2">/</span>
            <span>Products</span> <span className="mx-2">/</span>
            <span className="text-primary font-semibold">Enterprise AI Automation</span>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">AI-Powered Business Transformation</h2>
              <p className="text-gray-700 mb-4">
                The Enterprise AI Automation Suite brings cutting-edge artificial intelligence to your organization, automating repetitive tasks, enhancing decision-making, and unlocking new efficiencies across departments.
              </p>
              <p className="text-gray-700 mb-4">
                From intelligent document processing to predictive analytics, our AI solutions integrate seamlessly with your existing systems, providing immediate value while continuously learning and improving.
              </p>
              <p className="text-gray-700">
                Whether you need to automate customer service, optimize supply chains, or extract insights from vast amounts of data, our Enterprise AI Suite delivers tailored solutions that drive measurable business outcomes.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 flex items-center justify-center">
              <Brain className="text-primary" size={200} />
            </div>
          </div>
        </div>
      </section>

      {/* Product Screenshots */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">AI Automation Interface</h2>
          <div className="max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img src={enterpriseAIAutomation} alt="Enterprise AI Automation Interface" className="w-full h-full object-cover" />
              <div className="bg-white p-6">
                <h3 className="font-semibold text-lg mb-2">Intelligent Automation Dashboard</h3>
                <p className="text-gray-600">Document processing, chatbot configuration, and automation workflow builder</p>
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
            Unlock the Power of Enterprise AI
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss how AI can transform your business operations
          </p>
          <Link to="/contact">
            <button className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold text-lg shadow-xl transition-all duration-300 hover:shadow-2xl">
              Schedule a Consultation
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseAI;
