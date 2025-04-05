import Image from "next/image"
import { Mail } from "lucide-react"

export default function ProfileCard({ member }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64 w-full">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold">{member.name}</h3>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">{member.role}</span>
        </div>
        <p className="text-gray-600 mb-4">{member.bio}</p>
        <div className="flex items-center text-gray-700">
          <Mail className="w-5 h-5 mr-2" />
          <a href={`mailto:${member.email}`} className="hover:underline">
            {member.email}
          </a>
        </div>
      </div>
    </div>
  )
}

