'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
export function ContentSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('.content-item')
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-fade-in')
            }, index * 80)
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

  const content = [
  {
    category: 'Real Estate',
    title: 'Noida Authority Plot Scheme 2026',
    excerpt: 'Under this scheme The Noida Authority has introduced various plot schemes across different categories of real estate.',
    date: 'December 2025',
    link: 'https://bop.in/property-consultant-noida-noida-authority-plot-scheme/',
    image:'images/blog-noida-auction.webp'
  },
   {
    category: 'Real Estate',
    title: 'Under Construction vs Ready-to-Move',
    excerpt: 'It has become much more important to be aware of all costs associated with establishing your living situation.',
    date: 'January 2026',
    link: 'https://bop.in/company-real-estate-under-construction-vs-ready-to-move-homes/',
    image:'images/blog-ready.webp'
  },
   {
    category: 'Real Estate',
    title: 'What Buyers & the Best Real Estate Company to Buy',
    excerpt: 'A quick breakdown of UP’s new title-based property registry rule and what it means for Delhi-NCR buyers.',
    date: 'November 2025',
    link: 'https://bop.in/property-consultant-noida-noida-authority-plot-scheme/',
    image:'images/blog-property-fraud.webp'
  },
{
    category: 'Real Estate',
    title: 'Real Estate Brokers in Delhi NCR Guide Buyers on YEIDA  ',
    excerpt: 'This YEIDA scheme will also offer a total of 973 plots across Sector 15C, Sector 18, and Sector 24A',
    date: 'December 2025',
    link: 'https://bop.in/real-estate-brokers-in-delhi-ncr-yeida-plot-scheme-2026/',
    image:'images/blog-brokers.webp'
  }
  
]

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Content Writing</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">Blogs</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Insights, tips, and behind-the-scenes perspectives on media, real estate presentation, and professional content creation.
          </p>
        </div>

        {/* Content Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.map((item, index) => (
            <Link href={item.link} className="block" key={index}>
              <article
                className="content-item group rounded-lg border border-border hover:border-primary/50 bg-card hover:bg-secondary/30 transition-all duration-300 opacity-0 cursor-pointer overflow-hidden"
              >
              {/* IMAGE */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-medium text-primary/70 uppercase tracking-wider">
                  {item.category}
                </span>
                <span className="text-xs text-muted-foreground">{item.date}</span>
              </div>
              
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 line-clamp-2">
                {item.excerpt}
              </p>
              
              <button className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                Read Article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
