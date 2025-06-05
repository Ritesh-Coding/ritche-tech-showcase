
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Code, Database, Server, Monitor } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "experience", "education", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const skills = {
    programming: ["Python", "JavaScript", "TypeScript", "C/C++"],
    frontend: ["React.js", "Redux", "Tailwind CSS", "Bootstrap"],
    backend: ["Django", "Flask", "Node.js", "Express.js", "FastAPI"],
    databases: ["MySQL", "PostgreSQL"],
    tools: ["GCP BigQuery", "Luzmo", "JWT Authentication", "Django Channels"]
  };

  const projects = [
    {
      title: "HRMS - Human Resource Management Service",
      description: "A comprehensive full-stack web application for managing human resources with advanced features for employee management and real-time communication.",
      tech: ["Django", "React", "PostgreSQL"],
      features: [
        "Employee attendance tracking",
        "Leave management system", 
        "User roles and permissions",
        "Profile editing capabilities",
        "JWT authentication",
        "Real-time chat via Django Channels",
        "Notification system"
      ],
      type: "Full-Stack Web Application"
    },
    {
      title: "UrbanClap Clone - Service Booking Platform",
      description: "A complete clone of the UrbanClap web application featuring comprehensive service booking and management capabilities.",
      tech: ["Node.js", "Express.js", "MySQL", "Bootstrap"],
      features: [
        "Service booking system",
        "Appointment scheduling",
        "Advanced service search",
        "Role-based service management",
        "User authentication system"
      ],
      type: "Service Booking Platform"
    },
    {
      title: "Twindo - Real-time Data Analytics Dashboard",
      description: "Advanced analytics dashboard leveraging GCP BigQuery for processing large datasets and providing real-time business intelligence.",
      tech: ["GCP BigQuery", "Luzmo"],
      features: [
        "Large dataset processing and analysis",
        "Query performance optimization",
        "Real-time dynamic reporting",
        "Interactive dashboard design",
        "Cross-functional team collaboration",
        "Data pipeline streamlining"
      ],
      type: "Analytics Platform"
    },
    {
      title: "MyBoxRox - Virtual Land System",
      description: "Production-level web application for virtual land claim and purchase system with comprehensive frontend and backend integration.",
      tech: ["Django", "React"],
      features: [
        "Virtual land management",
        "Purchase and claim system",
        "Responsive UI design",
        "API integration optimization",
        "Component rendering fixes",
        "Data handling improvements"
      ],
      type: "Virtual Land Platform"
    },
    {
      title: "DSD - Doctor-Patient Consultation Platform",
      description: "Medical consultation platform with enhanced user experience through optimized search, sorting, and dynamic listing features.",
      tech: ["Flask", "React"],
      features: [
        "Doctor-patient consultation system",
        "Dynamic listing and search",
        "Advanced sorting capabilities",
        "API interaction optimization",
        "System performance improvements",
        "User experience enhancements"
      ],
      type: "Healthcare Platform"
    }
  ];

  const experience = [
    {
      title: "Full Stack Developer",
      company: "eSparkBiz Technologies",
      period: "01/2024 - Present",
      projects: [
        {
          name: "Twindo - Real-time Data Analytics Dashboard",
          description: "Extensively worked with GCP BigQuery to process and analyze large datasets, optimize query performance, and integrate with Luzmo for real-time, dynamic business intelligence reporting.",
          achievements: [
            "Designed and developed interactive dashboards in Luzmo",
            "Collaborated with cross-functional teams to streamline data pipelines", 
            "Enhanced dashboard functionality through data-driven decision-making"
          ]
        },
        {
          name: "DSD - Doctor-Patient Consultation Platform",
          description: "Contributed to production web app by resolving frontend and backend issues, optimizing API interactions, and implementing features like dynamic listing, search, and sorting.",
          achievements: [
            "Improved user experience and system performance",
            "Implemented dynamic search and sorting features",
            "Optimized API interactions for better performance"
          ]
        }
      ]
    }
  ];

  const education = [
    {
      degree: "B. Tech, Computer Engineering",
      institution: "GECM – Government Engineering College Modasa",
      period: "2020 – 2024",
      grade: "8.54 CGPA"
    },
    {
      degree: "12th Standard",
      institution: "Nelson Higher Secondary School (Gujarat Board)",
      period: "2019 – 2020", 
      grade: "70%"
    },
    {
      degree: "10th Standard",
      institution: "Ahmedabad Kerala Samajam School (Gujarat Board)",
      period: "2017 – 2018",
      grade: "83%"
    }
  ];

  const handleDownloadResume = () => {
    toast({
      title: "Resume Download",
      description: "Resume download feature will be available soon!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-slate-800">Ritesh Jaiswal</h1>
            <div className="hidden md:flex space-x-6">
              {["About", "Skills", "Projects", "Experience", "Education", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase() 
                      ? "text-blue-600" 
                      : "text-slate-600 hover:text-blue-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
              Ritesh Jaiswal
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Passionate Fullstack Developer with expertise in React, Django, Flask, and GCP BigQuery
            </p>
            <p className="text-lg text-slate-500 mb-12 max-w-4xl mx-auto">
              Skilled in integrating complex APIs to ensure seamless functionality across multiple platforms 
              and proficient in state management using Redux to enhance user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg"
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                onClick={handleDownloadResume}
                className="px-8 py-3 text-lg border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="sm" asChild>
                <a href="mailto:riteshjaiswala@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com/Ritesh-Coding" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://linkedin.com/in/ritesh-jaiswal-453885212" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                I'm a passionate Fullstack Developer with a strong foundation in modern web technologies. 
                My expertise spans across React for dynamic frontend experiences, Django and Flask for robust 
                backend solutions, and GCP BigQuery for data analytics.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Known for delivering efficient, scalable solutions and working collaboratively to achieve 
                project goals. I excel at integrating complex APIs and managing application state to create 
                seamless user experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-slate-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  Ahmedabad, Gujarat
                </div>
                <div className="flex items-center text-slate-600">
                  <Phone className="w-4 h-4 mr-2" />
                  +917573060549
                </div>
                <div className="flex items-center text-slate-600">
                  <Mail className="w-4 h-4 mr-2" />
                  riteshjaiswala@gmail.com
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-6xl font-bold">
                RJ
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="w-5 h-5 mr-2 text-blue-600" />
                  Programming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Monitor className="w-5 h-5 mr-2 text-green-600" />
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Server className="w-5 h-5 mr-2 text-purple-600" />
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="w-5 h-5 mr-2 text-orange-600" />
                  Database & Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[...skills.databases, ...skills.tools].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <Badge variant="outline" className="mb-2">{project.type}</Badge>
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-400" />
                  </div>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-slate-700 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} className="bg-blue-100 text-blue-800">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-slate-700 mb-2">Key Features:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {project.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">Professional Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-blue-600">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="outline">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {exp.projects.map((project, projIndex) => (
                      <div key={projIndex}>
                        <h4 className="font-semibold text-slate-800 mb-2">{project.name}</h4>
                        <p className="text-slate-600 mb-3">{project.description}</p>
                        <ul className="text-sm text-slate-600 space-y-1">
                          {project.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                        {projIndex < exp.projects.length - 1 && <Separator className="mt-4" />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">{edu.degree}</h3>
                      <p className="text-slate-600">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">{edu.period}</Badge>
                      <p className="text-sm text-slate-600 mt-1">{edu.grade}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">Get In Touch</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:riteshjaiswala@gmail.com" className="text-blue-600 hover:underline">
                  riteshjaiswala@gmail.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Github className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">GitHub</h3>
                <a href="https://github.com/Ritesh-Coding" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  github.com/Ritesh-Coding
                </a>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Linkedin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <a href="https://linkedin.com/in/ritesh-jaiswal-453885212" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  linkedin.com/in/ritesh-jaiswal
                </a>
              </CardContent>
            </Card>
          </div>

          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3"
            asChild
          >
            <a href="mailto:riteshjaiswala@gmail.com">
              Let's Work Together
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Ritesh Jaiswal. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
