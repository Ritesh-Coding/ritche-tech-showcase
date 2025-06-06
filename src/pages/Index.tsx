import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Code, Database, Server, Monitor, Sparkles, Building2, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ProfessionalImage from "@/components/ProfessionalImage";

const Index = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState("hero");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

      // Parallax effect
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach((element, index) => {
        const rate = scrolled * -0.5 * (index + 1);
        (element as HTMLElement).style.transform = `translateY(${rate}px)`;
      });

      // Reveal animations
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        }
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    // Create floating particles
    createParticles();
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const createParticles = () => {
    const container = document.createElement('div');
    container.className = 'floating-particles';
    document.body.appendChild(container);

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 15 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
      container.appendChild(particle);
    }
  };

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

  const allProjects = [
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
      type: "Live Project - Analytics Platform",
      gradient: "from-purple-400 to-pink-600",
      isLive: true,
      hasLink: false
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
      type: "Live Project - Healthcare Platform",
      gradient: "from-teal-400 to-blue-600",
      isLive: true,
      hasLink: false
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
      type: "Live Project - Virtual Land Platform",
      gradient: "from-orange-400 to-red-600",
      isLive: true,
      hasLink: true
    },
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
      type: "Personal Project - Full-Stack Web Application",
      gradient: "from-blue-400 to-purple-600",
      isLive: false,
      hasLink: true
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
      type: "Personal Project - Service Booking Platform",
      gradient: "from-green-400 to-blue-600",
      isLive: false,
      hasLink: true
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
      degree: "H.S.C (Higher Secondary Certificate)",
      institution: "Nelson Higher Secondary School (Gujarat Board)",
      period: "2019 – 2020", 
      grade: "70%"
    },
    {
      degree: "S.S.C (Secondary School Certificate)",
      institution: "Ahmedabad Kerala Samajam School (Gujarat Board)",
      period: "2017 – 2018",
      grade: "83%"
    }
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/f877cc32-5952-4aba-b351-8fda5893dce7.png';
    link.download = 'Ritesh_Jaiswal_Resume.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Resume Downloaded",
      description: "Ritesh Jaiswal's resume has been downloaded successfully!",
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle animation-delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle animation-delay-2000"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 glass z-50 border-b border-white/20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold gradient-text-animated">Ritesh Jaiswal</h1>
            <div className="hidden md:flex space-x-6">
              {["About", "Skills", "Projects", "Experience", "Education", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-110 ${
                    activeSection === item.toLowerCase() 
                      ? "text-blue-600 glow-text" 
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
      <section id="hero" className="relative pt-20 pb-16 px-4 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="reveal">
            <div className="mb-8">
              {/* <Sparkles className="w-12 h-12 mx-auto text-blue-600 animate-pulse-glow" /> */}
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-slate-800 mb-6 glow-text">
              <span className="typewriter">Ritesh Jaiswal</span>
            </h1>
            <p className="text-xl md:text-3xl gradient-text-animated mb-8 max-w-4xl mx-auto font-medium">
              Passionate Fullstack Developer with expertise in React, Django, Flask, and GCP BigQuery
            </p>
            <p className="text-lg text-slate-600 mb-12 max-w-4xl mx-auto">
              Skilled in integrating complex APIs to ensure seamless functionality across multiple platforms 
              and proficient in state management using Redux to enhance user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button 
                onClick={() => scrollToSection("contact")}
                className="neon-button px-8 py-4 text-lg font-semibold animate-pulse-glow"
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                onClick={handleDownloadResume}
                className="gradient-border px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform"
              >
                <Download className="w-5 h-5 mr-2 animate-bounce-gentle" />
                Download Resume
              </Button>
            </div>

            <div className="flex justify-center space-x-8">
              <Button variant="ghost" size="sm" asChild className="hover:scale-125 transition-transform hover:bg-transparent">
                <a href="mailto:riteshjaiswala@gmail.com" className="p-0 bg-transparent border-none">
                  <Mail className="w-6 h-6 text-blue-600 animate-float" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="hover:scale-125 transition-transform hover:bg-transparent">
                <a href="https://github.com/Ritesh-Coding" target="_blank" rel="noopener noreferrer" className="p-0 bg-transparent border-none">
                  <Github className="w-6 h-6 text-slate-700 animate-float" style={{animationDelay: '1s'}} />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="hover:scale-125 transition-transform hover:bg-transparent">
                <a href="https://linkedin.com/in/ritesh-jaiswal-453885212" target="_blank" rel="noopener noreferrer" className="p-0 bg-transparent border-none">
                  <Linkedin className="w-6 h-6 text-blue-600 animate-float" style={{animationDelay: '2s'}} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-12 reveal gradient-text-animated">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
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
                <div className="flex items-center text-slate-600 glass p-3 rounded-lg">
                  <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                  Ahmedabad, Gujarat
                </div>
                <div className="flex items-center text-slate-600 glass p-3 rounded-lg">
                  <Phone className="w-4 h-4 mr-2 text-green-600" />
                  +917573060549
                </div>
                <div className="flex items-center text-slate-600 glass p-3 rounded-lg">
                  <Mail className="w-4 h-4 mr-2 text-purple-600" />
                  riteshjaiswala@gmail.com
                </div>
              </div>
            </div>
            <div className="relative reveal">
              <div className="w-full h-80 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                  alt="Professional developer"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-12 reveal gradient-text-animated">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="magnetic-card gradient-border stagger-item hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-base">
                  <Code className="w-4 h-4 mr-2 text-blue-600 tech-icon" />
                  Programming
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1">
                  {skills.programming.map((skill) => (
                    <Badge key={skill} variant="secondary" className="skill-pulse hover:scale-110 transition-transform text-xs px-1.5 py-0.5">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="magnetic-card gradient-border stagger-item hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-base">
                  <Monitor className="w-4 h-4 mr-2 text-green-600 tech-icon" />
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1">
                  {skills.frontend.map((skill) => (
                    <Badge key={skill} variant="secondary" className="skill-pulse hover:scale-110 transition-transform text-xs px-1.5 py-0.5">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="magnetic-card gradient-border stagger-item hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-base">
                  <Server className="w-4 h-4 mr-2 text-purple-600 tech-icon" />
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1">
                  {skills.backend.map((skill) => (
                    <Badge key={skill} variant="secondary" className="skill-pulse hover:scale-110 transition-transform text-xs px-1.5 py-0.5">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="magnetic-card gradient-border stagger-item hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-base">
                  <Database className="w-4 h-4 mr-2 text-orange-600 tech-icon" />
                  Database & Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1">
                  {[...skills.databases, ...skills.tools].map((skill) => (
                    <Badge key={skill} variant="secondary" className="skill-pulse hover:scale-110 transition-transform text-xs px-1.5 py-0.5">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Combined Projects Section */}
      <section id="projects" className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-12 reveal gradient-text-animated">Projects & Professional Work</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {allProjects.map((project, index) => (
              <Card key={index} className="tilt-card magnetic-card gradient-border group overflow-hidden reveal">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <CardHeader className="relative z-10">
                  <div className="flex justify-between items-start">
                    <div>
                      {project.hasLink ? (
                        <CardTitle className="text-xl mb-2 gradient-text-animated">{project.title}</CardTitle>
                      ) : (
                        <CardTitle className="text-xl mb-2 gradient-text-animated">{project.title}</CardTitle>
                      )}
                      <Badge variant="outline" className={`mb-2 glass ${project.isLive ? 'bg-green-50 text-green-700 border-green-200' : 'bg-blue-50 text-blue-700 border-blue-200'}`}>
                        {project.type}
                      </Badge>
                    </div>
                    {project.hasLink && <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors animate-bounce-gentle" />}
                  </div>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-slate-700 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-110 transition-transform">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-slate-700 mb-2">Key Features:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {project.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-start hover:text-blue-600 transition-colors">
                          <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse-glow"></span>
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
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-12 reveal gradient-text-animated">Professional Experience</h2>
          <div className="space-y-8">
            <Card className="magnetic-card gradient-border reveal">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <CardTitle className="text-xl mb-2 gradient-text-animated">Full Stack Developer</CardTitle>
                    <div className="flex items-center text-slate-600 mb-2">
                      <Building2 className="w-4 h-4 mr-2 text-blue-600" />
                      <span className="font-semibold">EsparkBiz Technologies</span>
                    </div>
                    <div className="flex items-center text-slate-500">
                      <Calendar className="w-4 h-4 mr-2 text-green-600" />
                      <span>01/2024 - Present</span>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-700 border-green-200">Current Position</Badge>
                </div>
                <CardDescription className="text-base">
                  Working as a Full Stack Developer, contributing to various web development projects using modern technologies and frameworks.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-sm text-slate-700 mb-3">Key Responsibilities & Achievements:</h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-start hover:text-blue-600 transition-colors">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse-glow"></span>
                    Developing and maintaining full-stack web applications using React, Django, and Flask
                  </li>
                  <li className="flex items-start hover:text-blue-600 transition-colors">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse-glow"></span>
                    Collaborating with cross-functional teams to deliver high-quality software solutions
                  </li>
                  <li className="flex items-start hover:text-blue-600 transition-colors">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse-glow"></span>
                    Implementing responsive designs and optimizing application performance
                  </li>
                  <li className="flex items-start hover:text-blue-600 transition-colors">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse-glow"></span>
                    Working with databases and API integrations for seamless functionality
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-12 reveal gradient-text-animated">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="magnetic-card gradient-border reveal">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 gradient-text-animated">{edu.degree}</h3>
                      <p className="text-slate-600">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="glass">{edu.period}</Badge>
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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 reveal gradient-text-animated">Get In Touch</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto reveal">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="magnetic-card gradient-border reveal stagger-item">
              <CardContent className="pt-6 text-center">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4 animate-bounce-gentle" />
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:riteshjaiswala@gmail.com" className="text-blue-600 hover:underline">
                  riteshjaiswala@gmail.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="magnetic-card gradient-border reveal stagger-item">
              <CardContent className="pt-6 text-center">
                <Github className="w-8 h-8 text-blue-600 mx-auto mb-4 animate-bounce-gentle" style={{animationDelay: '0.2s'}} />
                <h3 className="font-semibold mb-2">GitHub</h3>
                <a href="https://github.com/Ritesh-Coding" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  github.com/Ritesh-Coding
                </a>
              </CardContent>
            </Card>
            
            <Card className="magnetic-card gradient-border reveal stagger-item">
              <CardContent className="pt-6 text-center">
                <Linkedin className="w-8 h-8 text-blue-600 mx-auto mb-4 animate-bounce-gentle" style={{animationDelay: '0.4s'}} />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <a href="https://linkedin.com/in/ritesh-jaiswal-453885212" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  linkedin.com/in/ritesh-jaiswal
                </a>
              </CardContent>
            </Card>
          </div>

          <Button 
            size="lg" 
            className="neon-button px-8 py-4 text-lg font-semibold reveal animate-pulse-glow"
            asChild
          >
            <a href="mailto:riteshjaiswala@gmail.com">
              Let's Work Together
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white py-8 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="text-slate-400">
            © 2024 Ritesh Jaiswal.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
