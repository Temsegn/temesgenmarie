"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "FinTech Global",
      location: "New York, USA",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Temesgen delivered an exceptional backend architecture that scaled our payment platform to handle millions of transactions. His expertise in microservices and security is unmatched. The system has been running flawlessly for over a year with 99.9% uptime.",
      project: "Payment Processing Platform",
    },
    {
      name: "Marcus Chen",
      role: "Product Manager",
      company: "HealthTech Solutions",
      location: "Singapore",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The mobile app Temesgen built for our healthcare platform exceeded all expectations. The user experience is intuitive, performance is lightning-fast, and the integration with our backend systems is seamless. Our user satisfaction increased by 85%.",
      project: "Healthcare Mobile App",
    },
    {
      name: "Elena Rodriguez",
      role: "Founder & CEO",
      company: "EcoTech Innovations",
      location: "Barcelona, Spain",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Working with Temesgen was a game-changer for our sustainability platform. His full-stack expertise helped us build a comprehensive solution that now serves 200+ companies globally. The real-time analytics and reporting features are phenomenal.",
      project: "Sustainability Dashboard",
    },
    {
      name: "David Kim",
      role: "Engineering Director",
      company: "RetailTech Corp",
      location: "Seoul, South Korea",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Temesgen's AI-powered inventory system revolutionized our retail operations. The predictive analytics reduced our inventory costs by 30% and improved stock availability to 95%. His technical skills and business understanding are exceptional.",
      project: "AI Inventory Management",
    },
    {
      name: "Jennifer Walsh",
      role: "VP of Technology",
      company: "CloudScale Enterprise",
      location: "London, UK",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The microservices platform Temesgen architected handles 100M+ API requests daily without breaking a sweat. His expertise in Kubernetes, monitoring, and auto-scaling saved us millions in infrastructure costs. Truly world-class work.",
      project: "Enterprise Microservices Platform",
    },
    {
      name: "Ahmed Hassan",
      role: "Technical Lead",
      company: "DevTools Inc",
      location: "Dubai, UAE",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Temesgen's open-source contributions to our developer tools suite have been invaluable. His code quality, documentation, and collaborative approach make him an ideal team member. The tools he built improved our team's productivity by 40%.",
      project: "Developer Productivity Suite",
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Client</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Testimonials
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Trusted by industry leaders and innovative companies worldwide. Here's what clients say about working with
            me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-800 group">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-blue-600 dark:text-blue-400 opacity-50" />
                  </div>

                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                  {/* Project */}
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full">
                      {testimonial.project}
                    </span>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { metric: "98%", label: "Client Satisfaction" },
              { metric: "50+", label: "Global Clients" },
              { metric: "100+", label: "Projects Delivered" },
              { metric: "15+", label: "Countries Served" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.metric}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
