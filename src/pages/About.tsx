import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, TrendingUp, MapPin, Target, Eye } from "lucide-react";

const About = () => {
  const leadership = [
    {
      name: "Tanmay Halaye",
      role: "Director, Strategy & Government Affairs",
      description: "Leading strategic initiatives and government partnerships",
    },
    {
      name: "Rishikesh Oza",
      role: "Director",
      description: "Driving operational excellence and project delivery",
    },
    {
      name: "Abhishek Wagh",
      role: "Director",
      description: "Overseeing technical innovation and implementation",
    },
    {
      name: "Pavan Hasabnis",
      role: "Director",
      description: "Managing client relations and business development",
    },
  ];

  const mentors = [
    { name: "Chintranjan Das", role: "Strategic Advisor" },
    { name: "Krishnan", role: "Technical Advisor" },
  ];

  const milestones = [
    { year: "2018", event: "Company Founded" },
    { year: "2019", event: "MSME Certified" },
    { year: "2020", event: "Startup India Recognition" },
    { year: "2021", event: "First Major Government Project" },
    { year: "2022", event: "Pan-India Expansion" },
    { year: "2023", event: "150+ Team Members" },
    { year: "2024", event: "₹15.65 Cr Revenue Milestone" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-[hsl(212,100%,18%)] to-[hsl(203,100%,59%)] text-white">
        <div className="container-custom text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About StarNext Innovations</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            A trusted partner in driving digital transformation for government and enterprise sectors across India
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">
                <span className="gradient-text">Who We Are</span>
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                StarNext Innovations is a government-tech and enterprise digital transformation company delivering comprehensive IT & Non-IT Infrastructure Projects, Data Centre & Cloud Deployments, Software Application Development, Cybersecurity & CERT-IN Audit, Document Digitization, and Project Management for large government departments.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With proven expertise in Data Centre design & deployment, IT infrastructure rollouts, cloud-native solutions (AWS, Azure, NIC Cloud), and enterprise software development, we deliver scalable and secure digital ecosystems that support mission-critical operations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-scale-in">
              <Card className="border-2 border-[hsl(203,100%,59%)]">
                <CardContent className="p-6 text-center">
                  <Award className="mx-auto mb-4 text-[hsl(203,100%,59%)]" size={48} />
                  <div className="text-3xl font-bold text-[hsl(212,100%,18%)] mb-2">13+</div>
                  <div className="text-sm text-gray-600">Government Labs Digitized</div>
                </CardContent>
              </Card>
              <Card className="border-2 border-[hsl(203,100%,59%)]">
                <CardContent className="p-6 text-center">
                  <Users className="mx-auto mb-4 text-[hsl(203,100%,59%)]" size={48} />
                  <div className="text-3xl font-bold text-[hsl(212,100%,18%)] mb-2">150+</div>
                  <div className="text-sm text-gray-600">Employees</div>
                </CardContent>
              </Card>
              <Card className="border-2 border-[hsl(203,100%,59%)]">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="mx-auto mb-4 text-[hsl(203,100%,59%)]" size={48} />
                  <div className="text-3xl font-bold text-[hsl(212,100%,18%)] mb-2">8.66L+</div>
                  <div className="text-sm text-gray-600">Citizens Served</div>
                </CardContent>
              </Card>
              <Card className="border-2 border-[hsl(203,100%,59%)]">
                <CardContent className="p-6 text-center">
                  <MapPin className="mx-auto mb-4 text-[hsl(203,100%,59%)]" size={48} />
                  <div className="text-3xl font-bold text-[hsl(212,100%,18%)] mb-2">Pan-India</div>
                  <div className="text-sm text-gray-600">Deployment</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-lg card-hover animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(212,100%,18%)] to-[hsl(203,100%,59%)] flex items-center justify-center">
                    <Target className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[hsl(212,100%,18%)]">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To deliver innovative, scalable, and secure technology solutions that empower government and enterprises to achieve digital excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg card-hover animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(212,100%,18%)] to-[hsl(203,100%,59%)] flex items-center justify-center">
                    <Eye className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[hsl(212,100%,18%)]">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To become a leading technology transformation partner, enabling inclusive and sustainable digital ecosystems across India and beyond.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Recognition & Certification</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center shadow-lg card-hover animate-scale-in">
              <CardContent className="p-8">
                <Award className="mx-auto mb-4 text-[hsl(203,100%,59%)]" size={64} />
                <h3 className="text-xl font-bold mb-2 text-[hsl(212,100%,18%)]">MSME Certified</h3>
                <p className="text-gray-600">Recognized under MSME guidelines</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg card-hover animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8">
                <Award className="mx-auto mb-4 text-[hsl(203,100%,59%)]" size={64} />
                <h3 className="text-xl font-bold mb-2 text-[hsl(212,100%,18%)]">Startup India</h3>
                <p className="text-gray-600">Registered Startup India</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg card-hover animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-8">
                <Award className="mx-auto mb-4 text-[hsl(203,100%,59%)]" size={64} />
                <h3 className="text-xl font-bold mb-2 text-[hsl(212,100%,18%)]">Companies Act 2013</h3>
                <p className="text-gray-600">Private Limited Company</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Leadership Team</span>
            </h2>
            <p className="text-lg text-gray-600">Experienced leaders driving innovation and excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center shadow-lg card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[hsl(212,100%,18%)] to-[hsl(203,100%,59%)] flex items-center justify-center mx-auto mb-4">
                    <Users className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-[hsl(212,100%,18%)] mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-sm font-semibold text-[hsl(203,100%,59%)] mb-2">
                    {leader.role}
                  </p>
                  <p className="text-sm text-gray-600">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-[hsl(212,100%,18%)] mb-6">Strategic Mentors</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {mentors.map((mentor, index) => (
              <Card key={index} className="text-center shadow-md card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-[hsl(212,100%,18%)] mb-1">
                    {mentor.name}
                  </h4>
                  <p className="text-sm text-[hsl(203,100%,59%)] font-semibold">{mentor.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Our Journey</span>
            </h2>
            <p className="text-lg text-gray-600">Milestones that define our growth</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-6 animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-24 h-24 flex-shrink-0 rounded-full bg-gradient-to-br from-[hsl(212,100%,18%)] to-[hsl(203,100%,59%)] flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{milestone.year}</span>
                  </div>
                  <Card className="flex-1 shadow-md card-hover">
                    <CardContent className="p-6">
                      <p className="text-lg font-semibold text-[hsl(212,100%,18%)]">
                        {milestone.event}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
