import React from "react";
import { Meteors } from "@/app/components/atom/meteors";
import { CheckCircle } from "lucide-react";

export default function MeteorsCards() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
        
        {/* Card 1 */}
        <div className="relative w-full">
          <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
          <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 sm:px-6 py-6 sm:py-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CheckCircle className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600 mb-3 sm:mb-4" />

            <h1 className="relative z-50 mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-gray-900">
              Meteors because they&apos;re cool
            </h1>

            <p className="relative z-50 mb-4 sm:mb-6 text-sm sm:text-base font-normal text-gray-600 line-clamp-3">
              I don&apos;t know what to write so I&apos;ll just paste something
              cool here. One more sentence because lorem ipsum is just
              unacceptable. Won&apos;t ChatGPT the shit out of this.
            </p>

            <button className="rounded-lg border border-gray-300 px-4 py-1.5 sm:py-2 text-sm sm:text-base text-gray-700 hover:bg-gray-50 transition-colors duration-200">
              Explore
            </button>

            <Meteors number={20} />
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative w-full">
          <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
          <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 sm:px-6 py-6 sm:py-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-3 sm:mb-4 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-gray-300 bg-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="relative z-50 mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-gray-900">
              Meteors because they&apos;re cool
            </h1>

            <p className="relative z-50 mb-4 sm:mb-6 text-sm sm:text-base font-normal text-gray-600 line-clamp-3">
              I don&apos;t know what to write so I&apos;ll just paste something
              cool here. One more sentence because lorem ipsum is just
              unacceptable. Won&apos;t ChatGPT the shit out of this.
            </p>

            <button className="rounded-lg border border-gray-300 px-4 py-1.5 sm:py-2 text-sm sm:text-base text-gray-700 hover:bg-gray-50 transition-colors duration-200">
              Explore
            </button>

            <Meteors number={20} />
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative w-full">
          <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
          <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 sm:px-6 py-6 sm:py-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-3 sm:mb-4 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-gray-300 bg-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="relative z-50 mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-gray-900">
              Meteors because they&apos;re cool
            </h1>

            <p className="relative z-50 mb-4 sm:mb-6 text-sm sm:text-base font-normal text-gray-600 line-clamp-3">
              I don&apos;t know what to write so I&apos;ll just paste something
              cool here. One more sentence because lorem ipsum is just
              unacceptable. Won&apos;t ChatGPT the shit out of this.
            </p>

            <button className="rounded-lg border border-gray-300 px-4 py-1.5 sm:py-2 text-sm sm:text-base text-gray-700 hover:bg-gray-50 transition-colors duration-200">
              Explore
            </button>

            <Meteors number={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
