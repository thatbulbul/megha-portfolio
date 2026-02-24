'use client'

import { useEffect, useRef } from 'react'

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('.testimonial-card')
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-fade-in')
            }, index * 120)
          })
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    })

    if (containerRef.current) observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      quote: 'I had the opportunity to work closely with Megha, and she has been an exceptional Content Writer and Anchor. As a content writer, Megha brings clarity, creativity, and strategy together beautifully. Her ability to understand the audience and craft engaging, meaningful content sets her apart. Whether it was writing scripts, social media content, or campaign ideas, she consistently delivered work that was impactful and well-structured. As an anchor, Megha carries confidence and authenticity on camera. She communicates with clarity, maintains strong screen presence, and connects naturally with the audience. Her preparation, articulation, and professionalism reflect her commitment to excellence. ',
      author: 'Madhav Vij',
      role: 'Senior Marketing Executive',
      initial: 'M'
    },
    {
      quote: 'I’ve had the pleasure of working with Megha, and I can confidently say she brings a rare blend of confidence, creativity, and professionalism to everything she does. As an anchor and content creator, she has a natural on-camera presence that instantly connects with the audience, while her storytelling skills add depth and authenticity to every project. Megha is not only talented but also highly dedicated — she understands creative direction quickly, adapts with ease, and always strives to deliver content that feels fresh and impactful. Any team looking for a strong voice, creative vision, and reliable collaboration would be lucky to have her.',
      author: 'Sagar Rajput',
      role: 'Video Editor',
      initial: 'S'
    }
  ]

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Recommendations</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">What People Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedback from industry leaders and brands who have experienced the commitment to excellence.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card group p-8 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 opacity-0"
            >
              {/* Quote icon */}
              <svg
                className="w-8 h-8 text-primary/30 mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5-6 0-8.812 3.114-9 6.892v12.884c.188 2.546 2.648 4.108 7 4.108z" />
              </svg>

              {/* Quote text */}
              <p className="text-lg text-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{testimonial.initial}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
