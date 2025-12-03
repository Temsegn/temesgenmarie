"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Zap, Shield, Globe, Code } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code that stands the test of time.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Optimizing every line of code for maximum efficiency and lightning-fast user experiences.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security First",
      description: "Implementing robust security measures and best practices in every project.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Scale",
      description: "Building solutions that can handle millions of users across different continents.",
    },
  ]

  const timeline = [
    {
      year: "2024-2025",
      title: "Mobile & Backend Developer",
      company: "Dream2024",
      description:
        "Developing cross-platform mobile applications and robust backend systems for various client projects.",
    },
    {
      year: "2024-2025",
      title: "Backend Development Instructor",
      company: "Dream More Education",
      description:
        "Teaching backend development fundamentals and advanced concepts to aspiring developers for 5 months.",
    },
    {
      year: "2024",
      title: "Full Stack Web Developer",
      company: "Alyah Software PLC",
      description:
        "Developed comprehensive attorney system connecting legal professionals with clients through modern web technologies.",
    },
    {
      year: "2024",
      title: "Lead Developer - WisdomWalk",
      company: "Independent Project",
      description:
        "Created innovative application for women's experience sharing and religious discussions, fostering community engagement.",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">About</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Passionate Developer & Educator</h3>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              <p>
                I'm a versatile full-stack developer with expertise in both web and mobile development. Currently
                working at Dream2024 on cutting-edge mobile and backend solutions, while also sharing my knowledge as a
                backend development instructor at Dream More Education.
              </p>
              <p>
                My experience spans from developing comprehensive attorney systems at Alyah Software PLC to creating
                innovative applications like WisdomWalk - a platform for women's experience sharing and religious
                discussions. I specialize in React, React Native, Node.js, and modern backend architectures.
              </p>
              <p>
                Beyond coding, I'm passionate about education and mentoring the next generation of developers. Teaching
                backend development has strengthened my understanding of fundamental concepts while helping others grow
                in their programming journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" className="border-2 bg-transparent">
                View Certifications
              </Button>
            </div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Code className="w-12 h-12 text-white" />
                </div>
                <p className="text-gray-600 dark:text-gray-400">Professional Developer</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">My Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-800">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {value.icon}
                    </motion.div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">My Journey</h3>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start"
                >
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900" />

                  <div className="ml-16">
                    <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-800">
                      <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">{item.company}</p>
                        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
