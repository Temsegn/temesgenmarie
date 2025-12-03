"use client"

import { Canvas } from "@react-three/fiber"
import { Torus, Float, MeshDistortMaterial } from "@react-three/drei"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Smartphone, Database, Cloud, Zap, Shield } from "lucide-react"

function AnimatedTorus() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Torus args={[1.5, 0.4, 16, 100]} scale={1.5}>
        <MeshDistortMaterial
          color="#ec4899"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.1}
          metalness={0.8}
        />
      </Torus>
    </Float>
  )
}

export default function Services() {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Backend Development",
      description: "Robust server-side applications with modern frameworks and microservices architecture.",
      features: ["API Development", "Database Design", "Server Architecture", "Performance Optimization"],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications with native performance and seamless user experience.",
      features: ["React Native", "Flutter", "iOS Development", "Android Development"],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Solutions",
      description: "Scalable database design and optimization for high-performance applications.",
      features: ["SQL Optimization", "NoSQL Design", "Data Migration", "Performance Tuning"],
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Architecture",
      description: "Cloud-native solutions with automated deployment and scalable infrastructure.",
      features: ["AWS/Azure", "Docker", "Kubernetes", "CI/CD Pipelines"],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Advanced optimization techniques for lightning-fast application performance.",
      features: ["Code Optimization", "Caching Strategies", "Load Balancing", "Monitoring"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & DevOps",
      description: "Comprehensive security implementation and automated deployment workflows.",
      features: ["Security Audits", "Automated Testing", "Monitoring", "Compliance"],
    },
  ]

  return (
    <section id="services" className="py-32 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(236,72,153,0.1),transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">My</span>
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Services
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive development services tailored to transform your ideas into powerful digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Services Grid */}
          <div className="grid gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 border-gray-700/50 hover:border-pink-500/50 transition-all duration-500 backdrop-blur-sm group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-pink-400 group-hover:text-purple-400 transition-colors duration-300 flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-3 py-1 bg-pink-500/10 text-pink-300 text-sm rounded-full border border-pink-500/20"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 3D Element */}
          <div className="h-[600px] relative">
            <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
              <ambientLight intensity={0.4} />
              <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
              <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ec4899" />
              <AnimatedTorus />
            </Canvas>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with cutting-edge technology and exceptional design.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-pink-500/25 transition-all duration-300"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
