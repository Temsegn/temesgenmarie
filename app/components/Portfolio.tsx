"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Backend", "Mobile", "Full Stack", "Cloud"]

  const projects = [
    {
      title: "E-Commerce Microservices Platform",
      description:
        "Scalable microservices architecture with Docker containerization, API Gateway, and real-time analytics dashboard.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Backend",
      technologies: ["Node.js", "Docker", "Kubernetes", "Redis", "PostgreSQL", "GraphQL"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "FinTech Mobile Application",
      description:
        "Cross-platform financial app with biometric authentication, real-time transactions, and advanced security features.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Mobile",
      technologies: ["React Native", "TypeScript", "Firebase", "Stripe", "Redux"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description:
        "Real-time data visualization platform with machine learning insights and predictive analytics capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Full Stack",
      technologies: ["Python", "React", "TensorFlow", "D3.js", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
    },
    {
      title: "Cloud-Native IoT Platform",
      description:
        "Serverless IoT data processing platform with real-time monitoring and automated scaling capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Cloud",
      technologies: ["AWS Lambda", "DynamoDB", "IoT Core", "CloudWatch"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
    },
    {
      title: "Healthcare Management System",
      description:
        "Comprehensive healthcare platform with patient management, appointment scheduling, and telemedicine features.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Full Stack",
      technologies: ["Django", "React", "PostgreSQL", "WebRTC", "Docker"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
    },
    {
      title: "Real-time Chat Application",
      description:
        "High-performance chat application with end-to-end encryption, file sharing, and video calling capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Backend",
      technologies: ["Socket.io", "Node.js", "MongoDB", "WebRTC", "Redis"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
    },
  ]

  const filteredProjects = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="portfolio" className="py-32 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Featured</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions that demonstrate technical excellence and creative problem-solving
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? "default" : "outline"}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400"
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br from-gray-900/60 to-gray-800/40 border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 backdrop-blur-sm group hover:scale-105 ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">{project.category}</Badge>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-white font-bold text-xl mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-purple-900/30 text-purple-300 border-purple-700/30 hover:bg-purple-800/40 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 hover:bg-blue-400/10 px-8 py-4 text-lg rounded-full transition-all duration-300"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
