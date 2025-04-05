import Link from "next/link"
import { Building, Megaphone, Users } from "lucide-react"
import Hero from "@/components/hero"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero
        title="Effortless Strata Management for Your Community!"
        description="Simplify your strata living experience with our comprehensive management system. Easily submit maintenance requests, stay updated with announcements, and connect with your committee members."
      />

      {/* Features Section */}
      <div className="py-12 bg-gray-50 rounded-xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How We Help Your Community</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Maintenance Management</h3>
              <p className="text-gray-600">
                Submit and track maintenance requests easily. Get timely updates on the status of your requests.
              </p>
              <Link href="/maintenance" className="text-blue-600 font-medium inline-block mt-4 hover:underline">
                Submit Request →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Megaphone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Announcements</h3>
              <p className="text-gray-600">
                Stay informed with the latest news, upcoming events, and important notices from your strata committee.
              </p>
              <Link href="/announcements" className="text-blue-600 font-medium inline-block mt-4 hover:underline">
                View Announcements →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Committee Information</h3>
              <p className="text-gray-600">
                Connect with your strata committee members. Find contact details and roles of key personnel.
              </p>
              <Link href="/committee" className="text-blue-600 font-medium inline-block mt-4 hover:underline">
                Meet the Committee →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join our community of satisfied residents and experience hassle-free strata living.
        </p>
        <Link
          href="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
        >
          Contact Us Today
        </Link>
      </div>
    </div>
  )
}

