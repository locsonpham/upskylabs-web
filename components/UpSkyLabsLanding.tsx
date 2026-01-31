"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Battery, Cpu, Shield, Network, Plane } from "lucide-react";
import ProductsVisual01 from "./products_visual_01";
import ProductsVisual02 from "./products_visual_02";
import HeaderSection from "./header_section";

export default function UpSkyLabsLanding() {
  return (
    
    <div className="bg-white text-neutral-900 min-h-screen">
     
      {/* Hero */}
      {/* <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Engineering the Core of <span className="text-sky-600">Future Air Mobility</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-600 max-w-xl">
              UpSkyLabs is a specialized UAV R&D lab developing AI-powered propulsion and smart energy systems for next-generation autonomous aerial platforms.
            </p>
            <div className="mt-8 flex gap-4">
              <Button className="bg-sky-600 hover:bg-sky-700">Talk to Our Engineering Team</Button>
              <Button variant="outline">Explore Technology</Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="h-80 rounded-2xl bg-gradient-to-br from-blue-600/20 to-transparent shadow-2xl" />
        </div>
      </section> */}

      <HeaderSection />

      {/* About */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold">About UpSkyLabs</h2>
        <p className="mt-6 text-neutral-600">
          We advance Unmanned Aerial Vehicle technologies and system foundations required to safely integrate autonomous flight into everyday life.
        </p>
      </section>

      {/* Focus */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold text-center mb-12">Future Air Mobility Focus</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Drone Delivery", "Urban Air Mobility", "Regional Air Mobility"].map((item) => (
            <Card key={item} className="bg-white border border-neutral-200 border-neutral-200">
              <CardContent className="p-8 text-center text-lg font-medium">{item}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-neutral-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-16">Core Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{ icon: Plane, title: "UAV Platforms" }, { icon: Battery, title: "Smart Batteries" }, { icon: Cpu, title: "High-Power ESC" }, { icon: Shield, title: "Autonomous Flight" }, { icon: Network, title: "APIs & UTM" }, { icon: Rocket, title: "System Integration" }].map(({ icon: Icon, title }) => (
              <Card key={title} className="bg-white border border-neutral-200 border-neutral-200">
                <CardContent className="p-8">
                  <Icon className="w-8 h-8 text-sky-600" />
                  <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      {/* <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold">AI-Powered Propulsion & Smart Energy</h2>
        <p className="mt-6 text-neutral-600">
          Industrial-grade ESC and battery systems engineered for safety, efficiency, and scalability.
        </p>
      </section> */}

      <ProductsVisual01 />

      {/* Value */}
      {/* <section className="bg-neutral-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {["Energy Efficiency", "Operational Reliability", "Fleet Scalability"].map((item) => (
              <div key={item}>
                <h3 className="text-xl font-semibold">{item}</h3>
                <p className="mt-2 text-neutral-500">Designed for real-world autonomous operations</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <ProductsVisual02 />

      {/* Vision */}
      <section className="max-w-4xl mx-auto px-6 py-32 text-center">
        <blockquote className="text-3xl md:text-4xl font-light text-gray-800">
          “The sky as an intelligent, reliable transportation layer.”
        </blockquote>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-neutral-500">
          <span>UpSkyLabs · Da Nang, Vietnam</span>
          <span>info@upskylabs.com</span>
        </div>
      </footer>
    </div>
  );
}
