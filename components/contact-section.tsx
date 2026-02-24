'use client'

import { useEffect, useRef, useState } from 'react'

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    })

    if (formRef.current) observer.observe(formRef.current)

    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await fetch("https://script.google.com/macros/s/AKfycbw5nApLPJ3dQ3PFTis4QVJwS7a7QWlBhTV6z5fsbOKMVb5DDI4CkFfpG1zLZE3AhWQD/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        }
      })

      setSubmitted(true)

      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', email: '', subject: '', message: '' })
      }, 3000)

    } catch (err) {
      console.error("Error submitting form", err)
    }
  }

  const socialLinks = [
    {
      name: 'Instagram',
      icon: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z',
      url: 'https://www.instagram.com/meghashrma199?igsh=MXh0djRhcHl5NjIybQ%3D%3D&utm_source=qr'
    },
    {
      name: 'LinkedIn',
      icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z',
      url: 'https://www.linkedin.com/in/megha-chandan-0273781a4?utm_source=share_via&utm_content=profile&utm_medium=member_ios'
    },
    {
      name: 'Email',
      icon: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
      url: 'mailto:meghachandan321@gmail.com'
    }
  ]

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center relative">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
            Get in Touch
          </p>

          {/* TITLE + CAT VIDEO */}
          <div className="relative flex items-center gap-4">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
              Let's Connect
            </h2>

            {/* CAT VIDEO */}
            <video
              src="/videos/cat-2.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-14 sm:w-20 pointer-events-none mb-9"
            />
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Interested in collaborating or learning more about my work? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 opacity-0"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="Project inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-black text-white rounded-lg hover:bg-white hover:text-black hover:outline hover:outline-2 hover:outline-black transition-all duration-300 font-medium"
            >
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Connect With Me</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're interested in discussing a project, exploring collaboration opportunities, or simply want to reach out—I'm here to listen and create something exceptional together.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="font-serif text-lg font-bold text-foreground">meghachandan321@gmail.com</p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <p className="font-serif text-lg font-bold text-foreground">(+91) 91496 51744</p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="font-serif text-lg font-bold text-foreground">Noida, Uttar Pradesh</p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm font-medium text-foreground mb-4">Follow</p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="w-10 h-10 rounded-lg border border-border bg-card hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 flex items-center justify-center"
                    title={link.name}
                  >
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={link.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
