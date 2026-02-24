'use client'

import Link from 'next/link'
import Image from 'next/image'

export function ReelsSection() {
  const reels = [
    {
      title: 'Railway में लड़ाई हो जाए तो कौन करेगा कार्रवाई? GRP या RPF?',
      link: 'https://youtube.com/shorts/QfzBut6HoWg?si=OpfT5Mt9ZxPHRMk0',
      image: '/images/reels/railway.png'
    },
    {
      title: 'Delhi is voting, and the public has spoken!',
      link: 'https://youtube.com/shorts/ZSOEhn8xgvA?si=5M-XwBgX9wHXLGkQ',
      image: '/images/reels/political.png'
    },
    {
      title: 'This Diwali, let’s bring home more than just lights ',
      link: 'https://www.instagram.com/reel/DQCLKt6E5b9/',
      image: '/images/reels/diwali.png'
    },
    {
      title: 'Client Testimonials',
      link: 'https://drive.google.com/file/d/1TtUX2VBkbeSMVA1olahY4d73P0CkzYKR/view?usp=drivesdk',
      image: '/images/reels/testimonials.jpeg'
    },
    {
      title: 'Real Estate Project',
      link: 'https://drive.google.com/file/d/1MVM7w1Gg5oTZr23o5fMpTo7uPuQ6RBw9/view?usp=drivesdk',
      image: '/images/reels/real-estate.jpeg'
    
    },
    {
      title: 'Reporting from the BOP office where celebrations are in full swing!',
      link: 'https://www.instagram.com/reel/DSFWy1RjxPA/?igsh=YW9kOWphamxkZWFl',
      image: '/images/reels/Bop-office.png'
    
    },
    {
      title: 'Real Estate Project ads',
      link: 'https://drive.google.com/file/d/1-gQE5MjEtS3lM8LeDJtiApWiYX1LLFFf/view?usp=drivesdk',
      image: '/images/reels/ads-video.jpeg'
    
    },
    {
      title: 'Interview of street people in Delhi',
      link: 'https://drive.google.com/file/d/1zd-lo_xyv69fuB2taNXBWwMrP6voqn7n/view?usp=drivesdk',
      image: '/images/reels/on-ground.jpeg'
    
    }
  ]

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
            Short-Form Content
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Reels & Shorts
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl">
            Quick, engaging vertical videos featuring on-ground moments, food highlights, festive coverage, and expressive media storytelling crafted for modern digital platforms.
          </p>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {reels.map((reel, index) => (
            <Link href={reel.link} key={index} className="block">
              <div className="group relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer">
                
                <Image
                  src={reel.image}
                  alt={reel.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

               {/* Dark overlay */}
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">

  {/* Play Button */}
  <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center text-black text-xl z-10">
    ▶
  </div>

  {/* Title Overlay */}
  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
    <p className="text-white text-xs sm:text-sm font-medium line-clamp-2">
      {reel.title}
    </p>
  </div>

</div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
