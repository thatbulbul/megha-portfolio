'use client'

import Link from 'next/link'
import Image from 'next/image'

export function PodcastSection() {
  const podcasts = [
    {
      title: 'Power Talk with Geeta Shakya',
      description: ' BJP MP & Mahila Morcha State President Geeta Shakya',
      link: 'https://drive.google.com/file/d/1_8nbbmImbDNY7I5wZVUxqQScY7GhxKSc/view?usp=drivesdk',
      duration: '18 min',
      image:'/images/podcast/podcast-1.png'
    },
    {
      title: 'Naresh Bansal — Exclusive Talk',
      description: ' A Conversation with BJP Rajya Sabha MP Naresh Bansal',
      link: 'https://drive.google.com/file/d/1N4lj0F1jqcfepxgJ90Y0DXXyGdRCZHRC/view?usp=drivesdk',
      duration: '11 min',
      image:'/images/podcast/podcast-2.png'
    }
  ]

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
            Audio Content
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Podcasts & Interviews
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl">
            Listen to in-depth conversations about media, content creation, and professional insights from the industry.
          </p>
        </div>

        {/* Podcasts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {podcasts.map((podcast, index) => (
            <Link href={podcast.link} key={index} className="block">
              <div className="group rounded-xl overflow-hidden border border-border bg-card hover:border-primary/50 hover:shadow-xl transition-all duration-300 cursor-pointer">
                
                {/* Podcast Image */}
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={podcast.image}
                    alt={podcast.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {podcast.title}
                    </h3>
                    <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {podcast.duration}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {podcast.description}
                  </p>

                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                    Listen Now →
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
