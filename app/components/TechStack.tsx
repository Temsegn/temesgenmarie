"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TechStack() {
  const categories = [
    {
      title: "Backend Development",
      icon: "🚀",
      skills: [
        { name: "Node.js", level: 95 },
        { name: "Express", level: 92 },
        { name: "Python", level: 90 },
        { name: "PHP", level: 85 },
        { name: "Firebase", level: 80 },
      ],
    },
    {
      title: "Mobile Development",
      icon: "📱",
      skills: [
        { name: "Flutter", level: 92 },
        { name: "React Native", level: 88 },
      ],
    },
    {
      title: "Database & Storage",
      icon: "🗄️",
      skills: [
        { name: "MongoDB", level: 93 },
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 87 },
        { name: "Hive", level: 82 },
        { name: "SharedPreferences", level: 80 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: [
        { name: "AWS", level: 90 },
        { name: "Docker", level: 88 },
      ],
    },
  ]

  const tools = [
    { name: "Git", category: "Version Control" },
    { name: "VS Code", category: "IDE" },
    { name: "Android Studio", category: "Development" },
    { name: "Postman", category: "API Testing" },
    { name: "Swagger", category: "API Testing" },
    { name: "Figma", category: "Design" },
    { name: "Jira", category: "Project Management" },
    { name: "Slack", category: "Communication" },
    { name: "GitHub", category: "CI/CD" },
    { name: "Discord", category: "Communication" },
    { name: "Zoom", category: "Collaboration" },
    { name: "Trello", category: "Project Management" },
  ]

  const technicalCertifications = [
    {
      id: 1,
      title: "GitHub Certified Developer",
      issuer: "GitHub",
      year: "2024",
      description: "Advanced Git workflows, collaboration, and DevOps practices",
      badge: "🏆",
      color: "from-gray-600 to-gray-800",
    },
    {
      id: 2,
      title: "Python Professional Certification",
      issuer: "Python Institute",
      year: "2023",
      description: "Advanced Python programming and software development",
      badge: "🐍",
      color: "from-blue-600 to-blue-800",
    },
    {
      id: 3,
      title: "Machine Learning Specialist",
      issuer: "Coursera",
      year: "2023",
      description: "Deep learning, neural networks, and AI model development",
      badge: "🤖",
      color: "from-purple-600 to-purple-800",
    },
    {
      id: 4,
      title: "Responsive Web Design Certification",
      issuer: "freeCodeCamp",
      year: "2022",
      description: "Modern responsive design principles and techniques",
      badge: "📱",
      color: "from-green-600 to-green-800",
    },
    {
      id: 5,
      title: "UI/UX Design Professional",
      issuer: "Adobe",
      year: "2022",
      description: "User experience design and interface development",
      badge: "🎨",
      color: "from-pink-600 to-pink-800",
    },
    {
      id: 6,
      title: "Computer Science Fundamentals",
      issuer: "MIT OpenCourseWare",
      year: "2021",
      description: "Core computer science principles and algorithms",
      badge: "💻",
      color: "from-indigo-600 to-indigo-800",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Tech</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Stack</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise across modern development technologies, with deep knowledge in backend architecture,
            mobile development, and cloud infrastructure.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-white dark:bg-gray-800">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-3">{category.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                  </div>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                          <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{skill.level}%</span>
                        </div>
                        <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Tools & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white dark:bg-gray-800 cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {tool.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{tool.category}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Technical Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalCertifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-800 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                      >
                        <span className="text-lg">{cert.badge}</span>
                      </div>
                      <div className="text-2xl">{cert.badge}</div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{cert.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{cert.issuer}</span>
                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        {cert.year}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
