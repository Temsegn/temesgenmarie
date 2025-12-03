"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Star, Users, Lightbulb, Monitor, Heart, Briefcase, GraduationCap, Shield } from "lucide-react"

export default function Achievements() {
  const nonTechnicalCertifications = [
    {
      id: 1,
      title: "Computing Association Committee Member",
      issuer: "University Computing Association",
      year: "2023-2024",
      icon: <Users className="w-6 h-6" />,
      description: "Active committee member contributing to computing community initiatives",
      badge: "💻",
      color: "from-blue-500 to-blue-700",
    },
    {
      id: 2,
      title: "Digital Literacy Training",
      issuer: "Digital Skills Foundation",
      year: "2023",
      icon: <Monitor className="w-6 h-6" />,
      description: "Completed comprehensive digital literacy training program",
      badge: "📚",
      color: "from-teal-500 to-teal-700",
    },
    {
      id: 3,
      title: "Student Union Representative",
      issuer: "Bahir Dar University (BDU)",
      year: "2022-2024",
      icon: <Heart className="w-6 h-6" />,
      description: "Student union representative advocating for student rights and welfare",
      badge: "🎓",
      color: "from-red-500 to-red-700",
    },
    {
      id: 4,
      title: "Employability Certification",
      issuer: "Career Development Institute",
      year: "2022",
      icon: <Briefcase className="w-6 h-6" />,
      description: "Professional development and career advancement training",
      badge: "💼",
      color: "from-purple-500 to-purple-700",
    },
    {
      id: 5,
      title: "Redefining Life Club Member",
      issuer: "Bahir Dar University (BDU)",
      year: "2023-2024",
      icon: <Lightbulb className="w-6 h-6" />,
      description: "Active member in personal development and life skills club",
      badge: "💡",
      color: "from-yellow-500 to-yellow-700",
    },
    {
      id: 6,
      title: "Helping Club Volunteer",
      issuer: "Bahir Dar University (BDU)",
      year: "2022-2024",
      icon: <Heart className="w-6 h-6" />,
      description: "Volunteer work supporting community service and student welfare",
      badge: "❤️",
      color: "from-red-500 to-red-700",
    },
    {
      id: 7,
      title: "First Aid Training",
      issuer: "Red Cross Society",
      year: "2023",
      icon: <Shield className="w-6 h-6" />,
      description: "Certified in basic first aid and emergency response procedures",
      badge: "🚑",
      color: "from-green-500 to-green-700",
    },
  ]

  const achievements = [
    {
      title: "Happy Clients",
      value: "8+",
      description: "Satisfied clients with quality solutions",
      icon: <Star className="w-8 h-8" />,
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Years Experience",
      value: "1+",
      description: "Professional development and continuous learning",
      icon: <Award className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Students Mentored",
      value: "20+",
      description: "Aspiring developers guided in their journey",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Achievements &</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive collection of technical certifications, professional achievements, and community
            contributions that demonstrate expertise and commitment to continuous learning.
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-800 text-center group">
                <CardContent className="p-8">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {achievement.icon}
                  </motion.div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {achievement.value}
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{achievement.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Non-Technical Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Leadership & Community</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nonTechnicalCertifications.map((cert, index) => (
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
                        {cert.icon}
                      </div>
                      <div className="text-2xl">{cert.badge}</div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{cert.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{cert.issuer}</span>
                      <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
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
