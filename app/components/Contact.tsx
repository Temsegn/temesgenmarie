"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", phone: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "temesgen.marie@email.com",
      href: "mailto:temesgen.marie@email.com",
      description: "Best for detailed project discussions",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+251 912 345 678",
      href: "tel:+251912345678",
      description: "Available Mon-Fri, 9 AM - 6 PM EAT",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Bahir Dar, Ethiopia",
      href: "#",
      description: "Open to remote & on-site projects",
    },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/temesgen-marie", label: "GitHub", color: "hover:text-gray-600" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/temesgen-marie",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    { icon: Twitter, href: "https://twitter.com/temesgen_marie", label: "Twitter", color: "hover:text-blue-400" },
    {
      icon: Instagram,
      href: "https://instagram.com/temesgen_marie",
      label: "Instagram",
      color: "hover:text-pink-600",
    },
    {
      icon: Facebook,
      href: "https://facebook.com/temesgen.marie",
      label: "Facebook",
      color: "hover:text-blue-700",
    },
    { icon: Youtube, href: "https://youtube.com/@temesgen-marie", label: "YouTube", color: "hover:text-red-600" },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Let's Build</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Together
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into powerful digital solutions? Let's discuss your project and explore how we
            can work together to achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="hover:shadow-xl transition-shadow duration-300 border-0 bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center">
                  <Send className="w-6 h-6 mr-3 text-blue-600" />
                  Start Your Project
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-400">
                  Fill out the form below and I'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Thank you for reaching out. I'll review your message and get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="+251 912 345 678"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        name="message"
                        placeholder="Tell me about your project, goals, and any specific requirements..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <Card className="border-0 bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{info.title}</h4>
                      <a href={info.href} className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                        {info.value}
                      </a>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Media Links */}
            <Card className="border-0 bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 hover:shadow-md`}
                    >
                      <social.icon className="w-5 h-5 mr-3" />
                      <span className="text-sm font-medium">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="border-0 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse" />
                  <span className="text-green-700 dark:text-green-400 font-semibold">Available for New Projects</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Currently accepting new client projects and collaborations. Response time: Within 24 hours.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
