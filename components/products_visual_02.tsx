"use client";

import Image from "next/image";

export default function ProductsVisual02() {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* <h2 className="text-3xl font-semibold mb-8">
            Products & Solutions
          </h2> */}
  
          <Image
            src="/images/product_solution_01.png"
            alt="UpSkyLabs products and solutions overview"
            width={1400}
            height={800}
            className="rounded-2xl shadow-lg mx-auto"
            priority
          />
        </div>
      </section>
    );
}
