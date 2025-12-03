"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Play, Zap, Code } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Backend")

  const filters = ["Backend", "Full Stack", "Mobile", "Web App"]

  const projects = [
    // BACKEND SECTION - 7 APIs
    {
      id: 1,
      title: "Job Platform API",
      description:
        "Comprehensive job search and recruitment platform backend with matching, application tracking, and recruiter-candidate communication systems.",
      longDescription:
        "A scalable job platform backend that connects job seekers with employers through matching algorithms, real-time communication, and comprehensive application management.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Backend",
      technologies: ["Express", "Node.js", "MongoDB", "REST API", "Cloudinary", "JWT", "Socket.io", "Auth0"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      complexity: "Enterprise",
      features: [
        "Advanced search and filtering",
        "Real-time application tracking",
        "Recruiter dashboard",
        "Resume parsing and analysis",
        "Salary insights and trends",
        "Interview scheduling",
        "Company profile management",
        "Skill assessment integration",
        "Multi-language support",
      ],
      color: "from-blue-600 to-indigo-700",
    },
    {
      id: 2,
      title: "Social Media API",
      description:
        "Full-featured social networking platform backend with real-time feeds, content sharing, social interactions, and advanced privacy controls.",
      longDescription:
        "A comprehensive social media backend supporting user interactions, content management, real-time feeds, and community features with robust privacy and security measures.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Backend",
      technologies: ["Express", "Node.js", "MongoDB", "REST API", "Cloudinary", "JWT", "Socket.io", "Auth0"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      complexity: "Enterprise",
      features: [
        "Real-time news feed",
        "Content sharing and media upload",
        "Social interactions (likes, comments)",
        "Direct messaging system",
        "Friend and follower management",
        "Privacy and security controls",
        "Content moderation tools",
        "Story features",
        "Live streaming support",
      ],
      color: "from-purple-600 to-pink-700",
    },
    {
      id: 3,
      title: "E-commerce API",
      description:
        "Scalable e-commerce platform backend with product management, order processing, payment integration, and inventory management systems.",
      longDescription:
        "A robust e-commerce backend supporting multi-vendor marketplaces, complex product catalogs, order management, and integrated payment processing with real-time inventory tracking.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Backend",
      technologies: ["Express", "Node.js", "MongoDB", "REST API", "Cloudinary", "JWT", "Socket.io", "Auth0"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      complexity: "Enterprise",
      features: [
        "Multi-vendor marketplace",
        "Advanced product search",
        "Real-time inventory management",
        "Multiple payment gateways",
        "Order tracking and fulfillment",
        "Customer review system",
        "Wishlist and favorites",
        "Analytics and reporting",
        "Mobile-responsive design",
      ],
      color: "from-green-600 to-emerald-700",
    },
    {
      id: 4,
      title: "Advanced Auth API",
      description:
        "Enterprise-grade authentication and authorization system with multi-factor authentication, OAuth integration, and advanced security features.",
      longDescription:
        "A comprehensive authentication service supporting multiple auth methods, role-based access control, and enterprise security features with audit logging and compliance support.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Backend",
      technologies: ["Express", "Node.js", "MongoDB", "REST API", "Cloudinary", "JWT", "Socket.io", "Auth0"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      complexity: "Enterprise",
      features: [
        "Multi-factor authentication",
        "OAuth2 and OpenID Connect",
        "Role-based access control",
        "Single sign-on (SSO)",
        "Password policy enforcement",
        "Audit logging and compliance",
        "Rate limiting and security",
        "API key management",
        "Session management",
        "Fraud detection",
      ],
      color: "from-red-600 to-orange-700",
    },
    {
      id: 5,
      title: "Task Management API",
      description:
        "Comprehensive project and task management backend with team collaboration, time tracking, and advanced project analytics.",
      longDescription:
        "A powerful task management system supporting agile workflows, team collaboration, resource management, and detailed project analytics with real-time updates.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Backend",
      technologies: ["Express", "Node.js", "MongoDB", "REST API", "Cloudinary", "JWT", "Socket.io", "Auth0"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      complexity: "Advanced",
      features: [
        "Agile project management",
        "Task assignment and tracking",
        "Team collaboration tools",
        "Time tracking and reporting",
        "Custom workflow automation",
        "File sharing and storage",
        "Real-time notifications",
        "Gantt charts and timelines",
        "Resource management",
        "Performance analytics",
      ],
      color: "from-teal-600 to-cyan-700",
    },
    {
      id: 6,
      title: "WisdomWalk API",
      description:
        "Community platform backend for women's experience sharing and religious discussions with moderated content, prayer requests, and spiritual guidance.",
      longDescription:
        "An empowering platform backend creating safe spaces for women to share experiences, seek guidance, and engage in meaningful religious discussions with community support.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Backend",
      technologies: ["Express", "Node.js", "MongoDB", "REST API", "Cloudinary", "JWT", "Socket.io", "Auth0"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      complexity: "Advanced",
      features: [
        "Safe space for women's stories",
        "Moderated discussion forums",
        "Prayer request system",
        "Spiritual resource library",
        "Community event planning",
        "Mentorship matching",
        "Anonymous posting options",
        "Multi-language support",
        "Content reporting system",
        "Community guidelines enforcement",
      ],
      color: "from-pink-600 to-rose-700",
    },
    {
      id: 7,
      title: "Orthodox API",
      description:
        "Digital library backend for Orthodox Christian books, hymns, and religious content with offline sync, audio streaming, and prayer schedules.",
      longDescription:
        "A comprehensive Orthodox Christian digital library backend providing access to religious literature, traditional hymns, and spiritual resources with offline capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Backend",
      technologies: ["Express", "Node.js", "MongoDB", "REST API", "Cloudinary", "JWT", "Socket.io", "Auth0"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      complexity: "Advanced",
      features: [
        "Extensive Orthodox book library",
        "Traditional hymn collection",
        "Orthodox calendar integration",
        "Offline reading capability",
        "Audio playback system",
        "Prayer reminder notifications",
        "Multilingual content support",
        "Study group functionality",
        "Reading progress tracking",
        "Content sharing and notes",
      ],
      color: "from-indigo-600 to-purple-700",
    },

    // FULL STACK SECTION - 1 Project
    {
      id: 8,
      title: "Attorney-Client Match Maker",
      description:
        "Comprehensive legal platform connecting attorneys with clients through matching algorithms, secure communication, and integrated payment processing.",
      longDescription:
        "A sophisticated full-stack legal technology platform that revolutionizes how attorneys and clients connect with modern web technologies ensuring secure, efficient legal service delivery.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Full Stack",
      technologies: ["React", "Express", "Node.js", "JavaScript", "MongoDB", "REST API", "Socket.io"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      complexity: "Enterprise",
      features: [
        "AI-powered attorney matching",
        "Secure client-attorney communication",
        "Integrated payment processing",
        "Document management system",
        "Case progress tracking",
        "Calendar scheduling",
        "Real-time notifications",
        "Analytics and reporting",
        "Multi-role user management",
        "Compliance and security features",
      ],
      color: "from-blue-600 to-indigo-700",
    },

    // MOBILE SECTION - 5 Apps
    {
      id: 9,
      title: "Finance Tracker App",
      description:
        "Personal finance management mobile app with expense tracking, budget planning, investment monitoring, and intelligent financial insights.",
      longDescription:
        "A comprehensive mobile finance app helping users track expenses, manage budgets, and achieve financial goals through intelligent insights and bank integrations.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Mobile",
      technologies: ["Flutter", "Express", "Firebase", "JavaScript", "Firestore", "REST API", "Hive"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      complexity: "Advanced",
      features: [
        "Budget planning and alerts",
        "Investment portfolio tracking",
        "Financial goal setting",
        "Spending pattern analysis",
        "Bill reminder system",
        "Export financial reports",
        "Multi-currency support",
        "Data visualization charts",
      ],
      color: "from-purple-600 to-violet-700",
    },
    {
      id: 10,
      title: "NileWing Travel App",
      description:
        "Ethiopian travel and tourism mobile app showcasing destinations, cultural experiences, tour booking, and local guide connections.",
      longDescription:
        "A comprehensive travel companion app promoting Ethiopian tourism through immersive content, booking capabilities, and offline functionality.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Mobile",
      technologies: ["Flutter", "Express", "Node.js", "JavaScript", "MongoDB", "REST API", "Socket.io"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      complexity: "Advanced",
      features: [
        "Comprehensive destination guides",
        "Tour package booking system",
        "Local guide marketplace",
        "Cultural experience content",
        "Offline map functionality",
        "Multi-currency payments",
        "Tourist review platform",
        "Weather and travel alerts",
        "Itinerary planning",
        "Emergency contact system",
      ],
      color: "from-orange-600 to-amber-700",
    },
    {
      id: 11,
      title: "Job Search Mobile App",
      description:
        "Cross-platform job search mobile application with matching, real-time notifications, and seamless application management.",
      longDescription:
        "A modern job search app connecting job seekers with opportunities through matching, real-time updates, and streamlined application processes.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Mobile",
      technologies: ["Flutter", "Express", "Node.js", "JavaScript", "MongoDB", "REST API", "Socket.io"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      complexity: "Advanced",
      features: [
        "AI-powered job recommendations",
        "Advanced search and filtering",
        "One-tap job applications",
        "Real-time application tracking",
        "In-app messaging with recruiters",
        "Resume builder and parser",
        "Salary insights and trends",
        "Interview scheduling",
        "Push notifications",
        "Offline job saving",
      ],
      color: "from-green-600 to-emerald-700",
    },
    {
      id: 12,
      title: "Orthodox Mobile App",
      description:
        "Orthodox Christian mobile app providing access to religious books, hymns, prayer schedules, and spiritual resources with offline capabilities.",
      longDescription:
        "A spiritual companion app offering Orthodox Christian literature, traditional hymns, and religious resources with offline reading and audio playback.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Mobile",
      technologies: ["Flutter", "Express", "Node.js", "JavaScript", "MongoDB", "REST API", "Socket.io"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      complexity: "Advanced",
      features: [
        "Extensive Orthodox book library",
        "Traditional hymn collection",
        "Orthodox calendar integration",
        "Offline reading capability",
        "Audio playback system",
        "Prayer reminder notifications",
        "Multilingual content support",
        "Reading progress tracking",
        "Bookmark and notes system",
        "Community study groups",
      ],
      color: "from-indigo-600 to-purple-700",
    },
    {
      id: 13,
      title: "Chat Mobile App",
      description:
        "Real-time messaging mobile application with end-to-end encryption, group chats, media sharing, and voice messages.",
      longDescription:
        "A secure messaging app providing instant communication with advanced features like group management, media sharing, and voice messaging.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Mobile",
      technologies: ["Flutter", "Express", "Node.js", "JavaScript", "MongoDB", "REST API", "Socket.io"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      complexity: "Advanced",
      features: [
        "End-to-end encrypted messaging",
        "Real-time message delivery",
        "Group chat functionality",
        "Media file sharing",
        "Voice message recording",
        "Status updates and stories",
        "Message read receipts",
        "Online/offline status",
        "Message search and backup",
        "Cross-platform synchronization",
      ],
      color: "from-teal-600 to-cyan-700",
    },

    // WEB APP SECTION - 2 Projects
    {
      id: 14,
      title: "E-commerce Web Platform",
      description:
        "Modern e-commerce web application with responsive design, advanced product search, and seamless checkout experience.",
      longDescription:
        "A comprehensive e-commerce web platform providing intuitive shopping experience with modern design, advanced features, and mobile responsiveness.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Web App",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Framer Motion"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      complexity: "Advanced",
      features: [
        "Responsive web design",
        "Advanced product search",
        "Shopping cart and checkout",
        "User account management",
        "Order tracking system",
        "Product reviews and ratings",
        "Wishlist functionality",
        "Payment gateway integration",
        "Admin dashboard",
        "SEO optimization",
      ],
      color: "from-green-600 to-emerald-700",
    },
    {
      id: 15,
      title: "Attorney Match Web App",
      description:
        "Web-based legal platform for attorney-client connections with modern interface, case management, and secure communication.",
      longDescription:
        "A professional web application facilitating attorney-client relationships through modern web technologies and intuitive user experience.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Web App",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Socket.io", "Framer Motion"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      complexity: "Advanced",
      features: [
        "Attorney profile management",
        "Client case dashboard",
        "Secure messaging system",
        "Document sharing platform",
        "Appointment scheduling",
        "Payment processing",
        "Case progress tracking",
        "Legal resource library",
        "Review and rating system",
        "Mobile-responsive design",
      ],
      color: "from-blue-600 to-indigo-700",
    },
  ]

  const filteredProjects = projects.filter((p) => p.category === activeFilter)

  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Featured</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive portfolio showcasing backend APIs, full-stack applications, mobile apps, and web platforms
            across various domains and technologies.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? "default" : "outline"}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {filter}
              <Badge className="ml-2 bg-white/20 text-xs">
                {filter === "Backend" ? "7" : filter === "Mobile" ? "5" : filter === "Web App" ? "2" : "1"}
              </Badge>
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={project.featured ? "md:col-span-2 lg:col-span-2" : ""}
              >
                <Card className="group h-full hover:shadow-2xl transition-all duration-500 border-0 bg-white dark:bg-gray-800 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-blue-600/90 text-white border-0">{project.category}</Badge>
                      </div>
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                            ⭐ Featured
                          </Badge>
                        </div>
                      )}
                    </div>

                    <div className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-700">
                            +{project.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <Button
                          onClick={() => setSelectedProject(project)}
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                        >
                          <Play className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="border-gray-300 dark:border-gray-600 bg-transparent"
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="border-gray-300 dark:border-gray-600 bg-transparent"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 mb-2">
                        {selectedProject.category}
                      </Badge>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{selectedProject.title}</h3>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{selectedProject.complexity} Level</div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      ×
                    </Button>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
                    {selectedProject.longDescription}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Technologies */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Code className="w-5 h-5 mr-2 text-purple-600" />
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Zap className="w-5 h-5 mr-2 text-green-600" />
                        Key Features
                      </h4>
                      <div className="space-y-2">
                        {selectedProject.features.slice(0, 8).map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Demo
                    </Button>
                    <Button variant="outline" className="border-gray-300 dark:border-gray-600 bg-transparent">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
