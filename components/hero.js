import Link from "next/link"
import Image from "next/image"

export default function Hero({ title, description }) {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.jpg"
          alt="Modern building exterior"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 py-12 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">{title}</h1>
          <p className="text-xl text-gray-200 mb-8">{description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/maintenance"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Submit a Request
            </Link>
            <Link
              href="/announcements"
              className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors"
            >
              View Announcements
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

