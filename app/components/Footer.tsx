"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart, ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    if (typeof window !== "undefined" && window.scrollTo) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const footerLinks = {
    Services: ["Backend Development", "Mobile Apps", "API Design", "Cloud Architecture", "DevOps", "Consulting"],
    Resources: ["Blog", "Case Studies", "Open Source", "Documentation", "Tutorials", "Best Practices"],
    Company: ["About", "Experience", "Testimonials", "Certifications", "Speaking", "Mentoring"],
    Connect: ["LinkedIn", "GitHub", "Twitter", "Email", "Calendar", "Resume"],
  }

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:temesgen.marie@email.com", label: "Email" },
  ]

  return (
    <footer className="relative bg-gray-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h3 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Temesgen Marie
                </span>
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Elite backend and mobile developer crafting scalable solutions for global businesses. Transforming ideas
                into powerful digital experiences that drive growth and innovation.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* CTA */}
              <div className="space-y-3">
                <p className="text-sm text-gray-400">Ready to start your project?</p>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Get In Touch
                </Button>
              </div>
            </motion.div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-6 text-white">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center text-gray-400 mb-4 md:mb-0"
              >
                <span>© {currentYear} Temesgen Marie. All rights reserved.</span>
                <span className="mx-2">•</span>
                <span className="flex items-center">
                  Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> and lots of coffee
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6"
              >
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Terms of Service
                </a>
                <Button
                  onClick={scrollToTop}
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <ArrowUp className="w-5 h-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
