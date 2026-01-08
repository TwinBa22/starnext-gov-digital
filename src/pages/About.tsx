import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, TrendingUp, MapPin, Target, Eye, User } from "lucide-react";
import AbhishekWagh from "@/assets/team/Abhishek_Wagh.png";
import RishikeshOza from "@/assets/team/Rishikesh_Oza.png";
import PavanHasabnis from "@/assets/team/Pavan_Hasabnis.png";
import TanmayHalaye from "@/assets/team/Tanmay_Halaye.png";
import ChinranjanDas from "@/assets/team/Chintranjan_Das.png";
import KrishnanRamesh from "@/assets/team/Krishnan_Ramesh.png";

const About = () => {
  const leadership = [
    {
      name: "Abhishek Wagh",
      role: "Director, Strategy & Government Affairs",
      description: "Leading strategic initiatives and government partnerships.",
      image: AbhishekWagh,
    },
    {
      name: "Rishikesh Oza",
      role: "Director, Strategy & Operations",
      description: "Driving operational excellence and project delivery.",
      image: RishikeshOza,
    },
    {
      name: "Pavan Hasabnis",
      role: "Director, Cloud Engineering & Infrastructure",
      description: "Oversees cloud architecture, infrastructure modernization, and large-scale system deployments. Ensures security, scalability, and high availability across all cloud environments.",
      image: PavanHasabnis,
    },
    {
      name: "Tanmay Halaye",
      role: "Director, Technology & Client Success",
      description: "Overseeing technical innovation and implementation, while managing client relations and business development. Ensures delivery excellence across solutions and projects.",
      image: TanmayHalaye,
    },
  ];

  const advisors = [
    {
      name: "Chintranjan Das",
      role: "Strategic Advisor, Procurement & Vendor Management",
      description: "Advises on procurement frameworks, vendor negotiations, and cost optimization strategies. Ensures compliant, transparent, and efficient procurement operations.",
      image: ChinranjanDas,
    },
    {
      name: "Krishnan Ramesh",
      role: "Technical Advisor, Finance & Planning",
      description: "Guides financial planning, budgeting, and cost control across technical projects. Ensures financial sustainability and investment alignment with organizational goals.",
      image: KrishnanRamesh,
    },
  ];

  const milestones = [
    { 
      date: "AUG 2020", 
      title: "Social Justice Department, Maharashtra",
      achievements: [
        "Launched the Caste Certificate Verification Information System",
        "8.66+ lakh applicants served",
        "5.90+ lakh digital certificates issued with secure digital signatures",
        "₹15.65+ Cr revenue generated"
      ]
    },
    { 
      date: "MAY 2022", 
      title: "Maharashtra Tribal Department (TRTI, Pune)",
      achievements: [
        "Developed and launched an E-Commerce portal for SHGs and tribal artisans",
        "130+ SHGs and artisans onboarded; 400+ PAN India users",
        "₹3.4+ lakh in revenue generated till date"
      ]
    },
    { 
      date: "OCT 2023", 
      title: "TASMAC, Tamil Nadu",
      achievements: [
        "Developed and implemented Smart Excise Track & Trace Monitoring System",
        "38 depots and 5,500 retail shops integrated for full transparency and compliance"
      ]
    },
    { 
      date: "AUG 2024", 
      title: "Team Growth & Expansion",
      achievements: [
        "150+ Full-Time Employees",
        "70+ Contractual & Field Staff",
        "20+ Interns & Trainees (Tech & Support)"
      ]
    },
    { 
      date: "MAY 2025", 
      title: "Computerisation of Forensic Science Laboratories (FSL), MH",
      achievements: [
        "Jan 2024 – Project Kick-off",
        "Aug 2024 – Data Centre Inauguration",
        "Oct 2024 – Phase 1 Applications Live",
        "Dec 2024 – Phase 2 Applications Live",
        "May 2025 – Project Go-Live across all locations"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About StarNext Innovations</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            A trusted partner in driving digital transformation for government and enterprise sectors across India
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="animate-fade-in text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">
                <span className="gradient-text">Who We Are</span>
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                StarNext Innovations is a trusted partner in driving digital transformation for government and enterprise sectors. With proven expertise in Data Centre design & deployment, IT infrastructure rollouts, cloud-native solutions (AWS, Azure), and enterprise software development, we deliver scalable and secure digital ecosystems that support mission-critical operations.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 mt-8">
                <span className="gradient-text">We specialize in:</span>
              </h3>
              
              <div className="text-left space-y-3 max-w-4xl mx-auto">
                <div className="flex items-start space-x-3">
                  <span className="text-secondary text-xl mt-1">✓</span>
                  <p className="text-lg text-gray-700">Large-scale infrastructure implementation including server rooms, CCTV, access control, UPS, and network backbones.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-secondary text-xl mt-1">✓</span>
                  <p className="text-lg text-gray-700">Cloud computing & migration services, including AWS architecture design, hosting, and scalable app deployment.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-secondary text-xl mt-1">✓</span>
                  <p className="text-lg text-gray-700">Custom-built software systems such as Document Management, HRMS, Inventory, Visitor Management, and Mobile Field Apps tailored for public sector efficiency.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-secondary text-xl mt-1">✓</span>
                  <p className="text-lg text-gray-700">Security-first approach with integrated CERT-IN audits, SEIM-SOAR, and endpoint protection services.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-secondary text-xl mt-1">✓</span>
                  <p className="text-lg text-gray-700">Our commitment to innovation, sustainability, and social accountability drives every engagement, enabling clients to adapt quickly in an ever-evolving digital landscape.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-scale-in mt-12">
              <Card className="border-2 border-secondary shadow-lg">
                <CardContent className="p-6 text-center">
                  <Award className="mx-auto mb-4 text-secondary" size={48} />
                  <div className="text-3xl font-bold text-primary mb-2">13+</div>
                  <div className="text-sm text-gray-600">Government Labs Digitized</div>
                </CardContent>
              </Card>
              <Card className="border-2 border-secondary shadow-lg">
                <CardContent className="p-6 text-center">
                  <Users className="mx-auto mb-4 text-secondary" size={48} />
                  <div className="text-3xl font-bold text-primary mb-2">150+</div>
                  <div className="text-sm text-gray-600">Employees</div>
                </CardContent>
              </Card>
              <Card className="border-2 border-secondary shadow-lg">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="mx-auto mb-4 text-secondary" size={48} />
                  <div className="text-3xl font-bold text-primary mb-2">8.66L+</div>
                  <div className="text-sm text-gray-600">Citizens Served</div>
                </CardContent>
              </Card>
              <Card className="border-2 border-secondary shadow-lg">
                <CardContent className="p-6 text-center">
                  <MapPin className="mx-auto mb-4 text-secondary" size={48} />
                  <div className="text-3xl font-bold text-primary mb-2">Pan-India</div>
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
                  <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center">
                    <Target className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To deliver innovative, scalable, and secure technology solutions that empower government and enterprises to achieve digital excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg card-hover animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center">
                    <Eye className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
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
                <Award className="mx-auto mb-4 text-secondary" size={64} />
                <h3 className="text-xl font-bold mb-2 text-primary">MSME Certified</h3>
                <p className="text-gray-600">Recognized under MSME guidelines</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg card-hover animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8">
                <Award className="mx-auto mb-4 text-secondary" size={64} />
                <h3 className="text-xl font-bold mb-2 text-primary">Startup India</h3>
                <p className="text-gray-600">Registered Startup India</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg card-hover animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-8">
                <Award className="mx-auto mb-4 text-secondary" size={64} />
                <h3 className="text-xl font-bold mb-2 text-primary">Companies Act 2013</h3>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center shadow-lg card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  {leader.image ? (
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-secondary/20">
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-4 border-4 border-secondary/20">
                      <User className="text-primary" size={48} />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-sm font-semibold text-secondary mb-3">
                    {leader.role}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              <span className="gradient-text">Advisory Body</span>
            </h3>
            <p className="text-gray-600">Strategic guidance and expertise</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <Card key={index} className="text-center shadow-lg card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary/20">
                    <img 
                      src={advisor.image} 
                      alt={advisor.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {advisor.name}
                  </h3>
                  <p className="text-sm font-semibold text-secondary mb-3">
                    {advisor.role}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">{advisor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manpower Strength */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Our Manpower Strength</span>
            </h2>
            <p className="text-lg text-gray-600 mb-2">Total Strength: 190+ Professionals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="shadow-lg card-hover animate-fade-in">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <h3 className="text-lg font-bold text-primary mb-3">Software Development</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Full-stack Engineers</li>
                  <li>• Backend/API Engineers</li>
                  <li>• Mobile Developers</li>
                  <li>• Cloud Engineers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg card-hover animate-fade-in" style={{ animationDelay: "0.05s" }}>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <h3 className="text-lg font-bold text-primary mb-3">AI, Data Science & CV Engineers</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Computer Vision</li>
                  <li>• NLP/LLMs</li>
                  <li>• Predictive Analytics</li>
                  <li>• GIS AI Models</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg card-hover animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <h3 className="text-lg font-bold text-primary mb-3">Quality Assurance</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Test Script Automation</li>
                  <li>• UAT Teams</li>
                  <li>• Performance Testing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg card-hover animate-fade-in" style={{ animationDelay: "0.15s" }}>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <h3 className="text-lg font-bold text-primary mb-3">Project Management</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• PM/Delivery Managers</li>
                  <li>• PMU Professionals</li>
                  <li>• Government Coordination</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg card-hover animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <h3 className="text-lg font-bold text-primary mb-3">Infrastructure & DevOps</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• DC/DR</li>
                  <li>• Cloud DevOps</li>
                  <li>• Network & Security</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg card-hover animate-fade-in" style={{ animationDelay: "0.25s" }}>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">60+</div>
                <h3 className="text-lg font-bold text-primary mb-3">Digitization & DMS Ops</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Scanning Teams</li>
                  <li>• Indexing & Metadata</li>
                  <li>• QA Teams</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg card-hover animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <h3 className="text-lg font-bold text-primary mb-3">Field Deployment & Support</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• On-site Engineers</li>
                  <li>• Network Teams</li>
                  <li>• Hardware Installation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg card-hover animate-fade-in" style={{ animationDelay: "0.35s" }}>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <h3 className="text-lg font-bold text-primary mb-3">Helpdesk & Support</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 24/7 L1/L2 Support</li>
                  <li>• Ticket Resolution</li>
                  <li>• Remote & Field Support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg card-hover animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <h3 className="text-lg font-bold text-primary mb-3">Administration, Finance & HR</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Financial Management</li>
                  <li>• Human Resources</li>
                  <li>• Administrative Support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Our Journey</span>
            </h2>
            <p className="text-lg text-gray-600">Milestones that define our growth</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-32 h-32 flex-shrink-0 rounded-full hero-gradient flex flex-col items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{milestone.date.split(' ')[0]}</span>
                    <span className="text-white font-bold text-2xl">{milestone.date.split(' ')[1]}</span>
                  </div>
                  <Card className="flex-1 shadow-lg card-hover">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-4">
                        {milestone.title}
                      </h3>
                      <ul className="space-y-2">
                        {milestone.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-secondary mt-1">✓</span>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
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
