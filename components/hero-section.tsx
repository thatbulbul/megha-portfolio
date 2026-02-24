'use client'

export function HeroSection() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Desktop Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="images/hero-image.png"
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
      >
        <source src="videos/hero-video-2.mp4" type="video/mp4" />
      </video>

      {/* Mobile Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="images/mob-image.png"
        className="md:hidden absolute inset-0 w-full h-full object-cover"
      >
        <source src="videos/mob-video.mp4" type="video/mp4" />
      </video>
    </section>
  )
}
