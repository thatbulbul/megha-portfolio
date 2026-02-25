'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
    title: 'Political News | Ground Report',
    category: 'Anchor & Script Writer',
    description: 'Delhi Election 2025 - जनता किसे वोट देगी? | Public Opinion | Ground Report',
    link: 'https://youtu.be/ORCtQFM9ibI?si=Sre0wPCisLXl9i5F',
    image: 'images/work/political-news.png'
  },
  {
    title: 'Live Media Event',
    category: 'Broadcasting',
    description: 'Professional anchoring for network broadcast, delivering confident on-camera presence',
    link: 'https://drive.google.com/drive/folders/1IfYCQZgO9rt_fCfjwW_uuoA_AlgB5fWF',
    image: 'images/work/news-anchor.png'
  },
  {
    title: 'Anchoring',
    category: 'Religious Content',
    description: 'Maha Shivratri 2025 | महाशिवरात्रि के चार प्रहर का शुभ मुहूर्त और महत्व | Maha Shivratri Kab Hai',
    link: 'https://www.youtube.com/watch?v=QZ_zGi1wpHU',
    image: 'images/work/maha-shivratri.png'
  },
{
  title: 'News Story Coverage',
  category: 'Live News Coverage',
  description: 'On-camera presentation covering a major political rally in Patna, highlighting real-time updates, responsible journalism, and composed live news delivery.',
  link: 'https://drive.google.com/file/d/104T4SE36RTgWnGmJp2L5aAqw2dgwdxGH/view?usp=drivesdk',
  image: '/images/work/patna-blast.png'
},
  {
  title: 'Tasty-Food | Food Vlog',
  category: 'Food & Beverage',
  description: 'On-ground food vlogging and anchoring for a news channel segment, showcasing local flavours with engaging presentation, live interaction, and energetic storytelling.',
  link: 'https://drive.google.com/file/d/1ZNPS-_Kr_0jGnBzHo1m2iWpQhaQpuyjg/view?usp=drivesdk',
  image: '/images/work/food-vlog.png'
},
 {
  title: 'Diwali | On-Ground Coverage',
  category: 'Festive News Coverage',
  description: 'On-ground festive reporting capturing the spirit of Diwali through live interactions, cultural highlights, and engaging on-camera presentation for a news-style segment.',
  link: 'https://drive.google.com/file/d/10SWlm2dYtQ5Di5JEsQ2FhX2cZ_NGHIYs/view?usp=drivesdk',
  image: '/images/work/diwali.png'
}
]

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Media Highlights</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">Long-Form Media & Showreels </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
 A collection of long-format anchoring, on-ground reporting, and feature segments showcasing storytelling, confident presentation, and impactful visual narratives.
          </p>
        </div>

        {/* Works Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {works.map((work, index) => (
            <Link href={work.link} key={index} className="block">
              <div className="work-item group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 opacity-0 cursor-pointer hover:-translate-y-1 hover:shadow-xl">

                {/* IMAGE AREA */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* DARK HOVER OVERLAY */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <svg className="w-14 h-14 text-white opacity-80 group-hover:scale-110 transition-transform"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <p className="text-xs font-medium text-primary/70 uppercase tracking-wider mb-2">
                    {work.category}
                  </p>

                  <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {work.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {work.description}
                  </p>

                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                    View Project →
                  </span>
                </div>

              </div>
            </Link>
          ))}
        </div>

        
      </div>
    </section>
  )
}
