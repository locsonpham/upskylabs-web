"use client";

import Image from "next/image";

export default function HeaderSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      
      {/* Background Image – clear, no blur */}
      <Image
        src="/images/header_bg.jpg"
        alt="UpSkyLabs future air mobility background"
        fill
        priority
        className="object-cover"
      />

      {/* OPTIONAL: very light contrast layer (safe to remove) */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-white/10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-neutral-900">
            Engineering <br />
            the Core of <br />
            <span className="text-blue-600">Future Air Mobility</span>
          </h1>

          <p className="mt-6 text-neutral-800 max-w-xl">
            UpSkyLabs is a specialized UAV R&D lab developing AI-powered
            propulsion and smart energy systems for next-generation autonomous
            aerial platforms.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
              Talk to Our Engineering Team
            </button>

            <button className="px-6 py-3 rounded-lg border border-neutral-300 text-neutral-900 hover:bg-neutral-100 transition">
              Explore Technology
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
