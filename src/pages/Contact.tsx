import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  Building2,
  Clock,
} from "lucide-react";


const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-20 hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom text-center animate-fade-in relative z-10 px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Get in touch with our team to discuss your digital transformation needs
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-3">
        <div className="container-custom px-4">
          <div className="text-sm text-gray-600">
            <span>Home</span> <span className="mx-2">/</span>
            <span className="text-primary font-semibold">Contact</span>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                <span className="gradient-text">Send Us a Message</span>
              </h2>
              <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
                Fill out the form below and our team will get back to you within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 1234567890"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization
                  </label>
                  <Input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Your organization name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements..."
                    required
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg h-12"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="ml-2" size={20} />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-5 md:space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                <span className="gradient-text">Contact Information</span>
              </h2>

              <Card className="shadow-lg card-hover">
                <CardContent className="p-5 md:p-6">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-primary mb-2">
                        Office Address
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        StarNext Innovations Pvt. Ltd.<br />
                        501, 5th Floor, XYZ Tech Park<br />
                        Senapati Bapat Road<br />
                        Pune – 411016, Maharashtra, India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg card-hover">
                <CardContent className="p-5 md:p-6">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-primary mb-2">
                        Phone
                      </h3>
                      <a
                        href="tel:+919146189837"
                        className="text-sm md:text-base text-secondary hover:underline"
                      >
                        +91 9146189837
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg card-hover">
                <CardContent className="p-5 md:p-6">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div className="overflow-hidden">
                      <h3 className="text-base md:text-lg font-semibold text-primary mb-2">
                        Email
                      </h3>
                      <a
                        href="mailto:pavan.hasabnis@starnextinnovations.com"
                        className="text-sm md:text-base text-secondary hover:underline break-all"
                      >
                        pavan.hasabnis@starnextinnovations.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg card-hover">
                <CardContent className="p-5 md:p-6">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
                      <Clock className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-primary mb-2">
                        Business Hours
                      </h3>
                      <p className="text-sm md:text-base text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hero-gradient text-white">
                <CardContent className="p-5 md:p-6">
                  <h3 className="font-semibold mb-4 text-base md:text-lg">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/company/starnext-innovations-pvt-ltd/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
