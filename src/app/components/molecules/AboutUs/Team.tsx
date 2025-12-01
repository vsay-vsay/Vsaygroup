import { people } from "@/app/constants";
import Image from "next/image";

export default function Team() {
  return (
    <div className="relative overflow-hidden py-20 lg:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-8 max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Meet our{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                leadership
              </span>
            </h2>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {people.map((person, index) => (
            <div
              key={person.name}
              className="group relative overflow-hidden rounded-3xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/50 dark:border-gray-800/50 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] p-8 text-center"
            >
              {/* Profile Image */}
              <div className="relative mx-auto mb-6 aspect-square w-28 h-28 sm:w-32 sm:h-32 overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-100/50 to-purple-100/50 dark:from-indigo-900/30 dark:to-purple-900/30 border-4 border-white/60 dark:border-gray-800/60 shadow-2xl group-hover:shadow-white/50 group-hover:scale-110 transition-all duration-500">
                <Image
                  src={person.imageUrl}
                  alt={person.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 128px, (max-width: 1024px) 144px, 160px"
                />
                {/* Glow ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-pink-500/30 rounded-3xl blur-xl scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 line-clamp-1">
                {person.name}
              </h3>

              {/* Role */}
              <p className="text-sm font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                {person.role}
              </p>

              {/* Social links placeholder */}
              <div className="flex justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-8 h-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-white/50 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer">
                  <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
