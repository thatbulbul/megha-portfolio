'use client'

import { useEffect, useRef } from 'react'

export function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('.timeline-item')
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-slide-up')
            }, index * 120)
          })
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    })

    if (timelineRef.current) observer.observe(timelineRef.current)

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      company: 'BOP.in',
      role: 'Anchor & Content Writer',
      date: 'March 2025 - Present',
      points: [
        'Anchor and creative content writer for the team-crafting engaging real estate videos and website content across all digital channels.'
      ]
    },
    {
      company: 'Yellow straw advertising, Noida',
      role: 'Producer Anchor',
      date: 'Jan 2024 - March 2025',
      points: [
        'News & lifestyle senior anchor and producer for Sakarni India channel'
      ]
    },
    {
      company: 'NBC Bharat, Delhi',
      role: 'Anchor, Reporter & Script Writer',
      date: 'Jan 2023 - Jan 2024',
      points: [
        'Drafting daily news updates, scriptwriting, and live updates on current issues.',
        'Reporting of daily news from the field.'
      ]
    },
    {
      company: 'TheNewsNow, Jammu',
      role: 'Anchor, Reporter & Script Writer',
      date: 'July 2021 - Nov 2022',
      points: [
        'Drafting daily news updates, scriptwriting, and live updates on current issues.',
        'Reporting of daily news from the field.'
      ]
    },
    {
      company: 'One100 News, Noida',
      role: 'Anchor & Script Writer',
      date: 'June 2020 - Jun 2021',
      points: [
        'Daily news anchoring and scriptwriting.'
      ]
    },
    {
      company: 'India TV, Noida',
      role: 'Anchor & Script Writer',
      date: 'Nov 2019 - Dec 2019',
      points: [
        'Daily news anchoring and scriptwriting.'
      ]
    },
    {
      company: 'IAANTV, Delhi',
      role: 'Anchor & Script Writer',
      date: 'May 2019 - Oct 2019',
      points: [
        '6 Months Internship on News Anchoring & voice over on subjects & news alloted'
      ]
    }
  ]

  const brands = [
    'Premium Networks',
    'Luxury Real Estate',
    'Corporate Communications',
    'Production Houses',
    'Media Platforms',
    'Brand Collaborations'
  ]

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Background</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">Experience & Collaborations</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A trajectory marked by growth, professional excellence, and meaningful collaborations with industry-leading brands and networks.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative mb-20">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-border -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`timeline-item relative flex flex-col md:flex-row items-center md:items-start opacity-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-1/2 px-0 md:px-8">
                    <div className="bg-card border-2 border-black rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-500">
                      <div className="flex justify-between items-start mb-2 gap-3">
                        <div>
                          <h3 className="font-semibold text-lg text-foreground">
                            {exp.company}
                          </h3>
                          <p className="text-primary/80 text-sm">{exp.role}</p>
                        </div>
                        <p className="text-xs text-muted-foreground whitespace-nowrap">
                          {exp.date}
                        </p>
                      </div>

                      <ul className="mt-3 space-y-1 text-muted-foreground text-sm list-disc pl-5">
                        {exp.points.map((p, i) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:flex items-center justify-center w-10">
                    <span className="w-4 h-4 rounded-full bg-primary border-4 border-background z-10"></span>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Brands */}
        <div>
          <h3 className="font-serif text-2xl font-bold text-foreground mb-8 text-center">Trusted By</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors text-center"
              >
                <p className="font-medium text-foreground">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
