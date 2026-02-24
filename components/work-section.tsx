'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export function WorkSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('.work-item')
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-fade-in')
            }, index * 100)
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

  const works = [
    {
      title: 'Premium Real Estate Showcase',
      category: 'Real Estate Presentation',
      description: 'Luxury property presentation with cinematic cinematography'
    },
    {
      title: 'Live Media Event',
      category: 'Broadcasting',
      description: 'Professional anchoring for major network broadcast'
    },
    {
      title: 'Corporate Communications',
      category: 'Content Creation',
      description: 'Executive messaging and corporate presentation'
    },
    {
      title: 'Product Launch Event',
      category: 'Live Presentation',
      description: 'Dynamic product showcase with audience engagement'
    },
    {
      title: 'Documentary Narration',
      category: 'Voice & Presence',
      description: 'Professional narration for documentary series'
    },
    {
      title: 'Real Estate Portfolio',
      category: 'Multimedia Presentation',
      description: 'Interactive property showcase with smooth transitions'
    }
  ]

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Featured Work</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">Showreel & Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A curated selection of my most compelling media presentations, anchoring work, and content creation projects.
          </p>
        </div>

        {/* Works Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {works.map((work, index) => (
            <div
              key={index}
              className="work-item group rounded-lg overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 opacity-0 cursor-pointer"
            >
              {/* Placeholder image area */}
              <div className="relative w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-center z-10">
                  <svg className="w-16 h-16 text-primary/30 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-muted-foreground">Video Content</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs font-medium text-primary/70 uppercase tracking-wider mb-2">{work.category}</p>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {work.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{work.description}</p>
                <button className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-white hover:text-black hover:outline hover:outline-2 hover:outline-black transition-all duration-300 font-medium inline-flex items-center gap-2">
            View Full Showreel
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
