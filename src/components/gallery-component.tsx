/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/vyj4e8y0ANh
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Archivo } from 'next/font/google'
import { Cormorant_Garamond } from 'next/font/google'

archivo({
  subsets: ['latin'],
  display: 'swap',
})

cormorant_garamond({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
export function GalleryComponent() {
  return (
    <div className="w-full">
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Gallery</h1>
        </div>
      </section>
      <section className="py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Nature</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="group min-w-[280px] max-w-[320px] overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                alt="Nature Image 1"
                width="320"
                height="240"
                className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ aspectRatio: "320/240", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Serene Landscape</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  A breathtaking view of a lush green valley with a winding river.
                </p>
              </div>
            </div>
            <div className="group min-w-[280px] max-w-[320px] overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                alt="Nature Image 2"
                width="320"
                height="240"
                className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ aspectRatio: "320/240", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Majestic Waterfall</h3>
                <p className="text-gray-500 dark:text-gray-400">A powerful waterfall cascading down a rocky cliff.</p>
              </div>
            </div>
            <div className="group min-w-[280px] max-w-[320px] overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                alt="Nature Image 3"
                width="320"
                height="240"
                className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ aspectRatio: "320/240", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Autumn Foliage</h3>
                <p className="text-gray-500 dark:text-gray-400">A vibrant display of fall colors in a lush forest.</p>
              </div>
            </div>
            <div className="group min-w-[280px] max-w-[320px] overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                alt="Nature Image 4"
                width="320"
                height="240"
                className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ aspectRatio: "320/240", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Misty Mountains</h3>
                <p className="text-gray-500 dark:text-gray-400">Majestic peaks shrouded in a veil of mist.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Architecture</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="group min-w-[280px] max-w-[320px] overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                alt="Architecture Image 1"
                width="320"
                height="240"
                className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ aspectRatio: "320/240", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Iconic Skyscraper</h3>
                <p className="text-gray-500 dark:text-gray-400">A towering modern architectural marvel.</p>
              </div>
            </div>
            <div className="group min-w-[280px] max-w-[320px] overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                alt="Architecture Image 2"
                width="320"
                height="240"
                className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ aspectRatio: "320/240", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Historic Cathedral</h3>
                <p className="text-gray-500 dark:text-gray-400">A grand and ornate religious structure.</p>
              </div>
            </div>
            <div className="group min-w-[280px] max-w-[320px] overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                alt="Architecture Image 3"
                width="320"
                height="240"
                className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ aspectRatio: "320/240", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Minimalist Pavilion</h3>
                <p className="text-gray-500 dark:text-gray-400">A sleek and modern architectural structure.</p>
              </div>
            </div>
            <div className="group min-w-[280px] max-w-[320px] overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                alt="Architecture Image 4"
                width="320"
                height="240"
                className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ aspectRatio: "320/240", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Baroque Palace</h3>
                <p className="text-gray-500 dark:text-gray-400">A grand and ornate historical building.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Cityscape</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="group min-w-[280px] max-w-[320px] overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                alt="Cityscape Image 1"
                width="320"
                height="240"
                className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ aspectRatio: "320/240", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Skyline Sunset</h3>
                <p className="text-gray-500 dark:text-gray-400">A breathtaking view of a city skyline at sunset.</p>
              </div>
            </div>
            <div className="group min-w-[280px] max-w-[320px] overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                alt="Cityscape Image 2"
                width="320"
                height="240"
                className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ aspectRatio: "320/240", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Bustling Street</h3>
                <p className="text-gray-500 dark:text-gray-400">A lively and vibrant city street scene.</p>
              </div>
            </div>
            <div className="group min-w-[280px] max-w-[320px] overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                alt="Cityscape Image 3"
                width="320"
                height="240"
                className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ aspectRatio: "320/240", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Neon Lights</h3>
                <p className="text-gray-500 dark:text-gray-400">A vibrant cityscape illuminated by neon lights.</p>
              </div>
            </div>
            <div className="group min-w-[280px] max-w-[320px] overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                alt="Cityscape Image 4"
                width="320"
                height="240"
                className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ aspectRatio: "320/240", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Futuristic Skyline</h3>
                <p className="text-gray-500 dark:text-gray-400">A modern and innovative city skyline.</p>
              </div>
            </div>
            <div className="group min-w-[280px] max-w-[320px] overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                alt="Cityscape Image 5"
                width="320"
                height="240"
                className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ aspectRatio: "320/240", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Nighttime Skyline</h3>
                <p className="text-gray-500 dark:text-gray-400">A breathtaking cityscape at night.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}