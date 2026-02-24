'use client'

import { useEffect, useRef } from 'react'

export function AboutSection() {
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const animateCount = (el: HTMLElement, target: number, suffix = '') => {
      let start = 0
      const duration = 1500
      const increment = target / (duration / 16)

      const update = () => {
        start += increment
        if (start < target) {
          el.innerText = Math.floor(start) + suffix
          requestAnimationFrame(update)
        } else {
          el.innerText = target + suffix
        }
      }

      update()
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.about-card')

          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-slide-up')

              // 👉 Animate number
              const numberEl = card.querySelector('.counter') as HTMLElement
              if (numberEl && !numberEl.dataset.started) {
                numberEl.dataset.started = 'true'

                const raw = numberEl.dataset.value || '0'
                const value = parseInt(raw.replace('+', ''))
                const suffix = raw.includes('+') ? '+' : ''

                animateCount(numberEl, value, suffix)
              }
            }, index * 150)
          })
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    })

    if (cardsRef.current) observer.observe(cardsRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-16">
        <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">About</p>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">Professional Journey</h2>
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
          I help brands grow through strategic SEO, powerful on-screen presence, and compelling content creation.
        </p>
      </div>

      {/* Achievement Cards */}
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {[
          { number: '500+', label: 'Media Presentations', description: 'Successfully delivered across major networks and events' },
          { number: '50+', label: 'Real Estate Showcases', description: 'Premium property presentations reaching luxury markets' },
          { number: '7+', label: 'Years Experience', description: 'Building a reputation for excellence and professionalism' }
        ].map((card, index) => (
          <div
            key={index}
            className="about-card group
p-8
rounded-lg
bg-card
border border-border
opacity-0
transition-all duration-500 ease-out
hover:-translate-y-2
hover:scale-[1.02]
hover:shadow-2xl
hover:border-primary/60
hover:bg-card/80
will-change-transform"
          >
            <div className="mb-4">
              {/* ✅ Number now black + animated */}
              <h3
                className="counter font-serif text-4xl font-bold text-black mb-2"
                data-value={card.number}
              >
                0
              </h3>

              <p className="text-sm font-medium text-primary/70 uppercase tracking-wider">
                {card.label}
              </p>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Personal Story */}
      <div className="mt-20 bg-secondary/20 rounded-xl p-8 sm:p-12">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">My Story</h3>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>I started my career with a passion for storytelling and engaging audiences.</p>
          <p>Whether anchoring live broadcasts, presenting luxury real estate, or creating compelling video content, I bring an authentic, refined presence.</p>
          <p>I believe in the power of connection—making complex information accessible and engaging.</p>
        </div>
      </div>
    </section>
  )
}