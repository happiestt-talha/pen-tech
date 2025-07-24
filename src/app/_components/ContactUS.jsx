"use client"
 import { generatePageMetadata,pageMetadata } from "../../lib/metadata"

import React from "react"

import { MapPin, Mail, Phone, Send, User, MessageSquare } from "lucide-react"
import { useState } from "react"

export const metadata = generatePageMetadata(pageMetadata.contact)
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("idle")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate form submission - replace with actual email service
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Here you would integrate with your email service (EmailJS, Nodemailer, etc.)
      console.log("Form submitted:", formData)

      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Address",
      content: "Johar Town, Lahore, Pakistan",
      gradient: "from-primary to-primary/80",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@pen-tech-solution.com",
      gradient: "from-secondary to-secondary/80",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+92-321-8815888",
      gradient: "from-primary to-secondary",
    },
  ]

  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-tertiary/80 via-tertiary/60 to-secondary/30 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-secondary/15 rounded-full blur-2xl animate-pulse delay-500" />
      <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-primary/10 rounded-full blur-2xl animate-pulse delay-700" />

      {/* Gradient Mesh Overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-secondary/8 to-transparent" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-primary/8 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tertiary/20 to-secondary/10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-primary/20 shadow-lg">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">Get In Touch</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
            Let's Start a
            <span className="bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent">
              {" "}
              Conversation
            </span>
          </h2>

          <p className="text-primary/80 text-lg max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with innovative technology solutions? We'd love to hear from you and
            discuss how we can help achieve your goals.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-secondary/60 mx-auto rounded-full mt-6" />
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon
            return (
              <div
                key={index}
                className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/60 hover:border-secondary/40"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-primary mb-3">{info.title}</h3>
                  <p className="text-primary/80 leading-relaxed">{info.content}</p>

                  {/* Animated Underline */}
                  <div className="w-0 h-0.5 bg-gradient-to-r from-secondary to-secondary/60 rounded-full group-hover:w-full transition-all duration-700 delay-200 mt-4" />
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-secondary/60 rounded-full group-hover:bg-secondary group-hover:scale-150 transition-all duration-300" />
              </div>
            )
          })}
        </div>

        {/* Google Maps and Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Google Maps */}
          <div className="relative">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-4 shadow-xl border border-white/60">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3403.0122542699564!2d74.26208157560949!3d31.468849074237568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI4JzA3LjkiTiA3NMKwMTUnNTIuOCJF!5e0!3m2!1sen!2s!4v1753347111894!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none rounded-2xl" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary mb-3">Send us a Message</h3>
                <p className="text-primary/70">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary/50" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-white/80 border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary/50" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-white/80 border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div className="relative">
                  <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/80 border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/80 border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full px-8 py-4 bg-primary hover:bg-primary/90 disabled:bg-primary/50 rounded-2xl font-bold text-tertiary transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-tertiary/30 border-t-tertiary rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-100/90 backdrop-blur-sm border border-green-300/60 rounded-xl">
                    <p className="text-green-800 text-sm">
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-100/90 backdrop-blur-sm border border-red-300/60 rounded-xl">
                    <p className="text-red-800 text-sm">
                      Sorry, there was an error sending your message. Please try again.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
