"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function Blog() {
  const posts = [
    {
      title: "Building Scalable Microservices with Node.js and Kubernetes",
      excerpt:
        "Learn how to architect and deploy microservices that can handle millions of requests while maintaining high availability and performance.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Backend",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      trending: true,
      tags: ["Node.js", "Kubernetes", "Microservices", "DevOps"],
    },
    {
      title: "React Native vs Flutter: A 2024 Performance Comparison",
      excerpt:
        "An in-depth analysis of React Native and Flutter performance, development experience, and ecosystem maturity based on real-world projects.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Mobile",
      readTime: "12 min read",
      date: "Dec 10, 2024",
      trending: false,
      tags: ["React Native", "Flutter", "Mobile", "Performance"],
    },
    {
      title: "Implementing Zero-Downtime Deployments with Blue-Green Strategy",
      excerpt:
        "Step-by-step guide to implementing blue-green deployments for critical applications, ensuring seamless updates without service interruption.",
      image: "/placeholder.svg?height=300&width=500",
      category: "DevOps",
      readTime: "10 min read",
      date: "Dec 5, 2024",
      trending: true,
      tags: ["DevOps", "Deployment", "AWS", "CI/CD"],
    },
    {
      title: "Optimizing Database Performance: Advanced PostgreSQL Techniques",
      excerpt:
        "Advanced PostgreSQL optimization techniques that helped reduce query times by 90% and improved overall application performance.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Database",
      readTime: "15 min read",
      date: "Nov 28, 2024",
      trending: false,
      tags: ["PostgreSQL", "Database", "Performance", "Optimization"],
    },
    {
      title: "Building Real-time Applications with WebSockets and Redis",
      excerpt:
        "Complete guide to building scalable real-time applications using WebSockets, Redis, and Node.js for instant communication.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Backend",
      readTime: "11 min read",
      date: "Nov 20, 2024",
      trending: false,
      tags: ["WebSockets", "Redis", "Real-time", "Node.js"],
    },
    {
      title: "Mobile App Security: Best Practices for 2024",
      excerpt:
        "Essential security practices for mobile applications, including encryption, authentication, and protection against common vulnerabilities.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Security",
      readTime: "9 min read",
      date: "Nov 15, 2024",
      trending: true,
      tags: ["Security", "Mobile", "Authentication", "Encryption"],
    },
  ]

  const categories = ["All", "Backend", "Mobile", "DevOps", "Database", "Security"]

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Latest</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Insights
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Sharing knowledge and insights about modern development practices, architecture decisions, and emerging
            technologies.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white dark:bg-gray-800">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <Image
                    src={posts[0].image || "/placeholder.svg"}
                    alt={posts[0].title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-0">🔥 Featured</Badge>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                      {posts[0].category}
                    </Badge>
                    {posts[0].trending && (
                      <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {posts[0].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{posts[0].excerpt}</p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      {posts[0].date}
                      <Clock className="w-4 h-4 ml-4 mr-2" />
                      {posts[0].readTime}
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-fit">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.slice(1).map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-800 group cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        {post.category}
                      </Badge>
                    </div>
                    {post.trending && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </Badge>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 2 && (
                        <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-700 text-xs">
                          +{post.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4"
          >
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
