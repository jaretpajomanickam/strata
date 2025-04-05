import Image from "next/image"

export default function AnnouncementCard({ announcement }) {
  // Function to get the appropriate badge color and icon based on category
  const getCategoryStyle = (category) => {
    switch (category) {
      case "Meeting":
        return {
          color: "bg-purple-100 text-purple-800",
          icon: "/images/icons/meeting.svg"
        }
      case "Maintenance":
        return {
          color: "bg-yellow-100 text-yellow-800",
          icon: "/images/icons/maintenance.svg"
        }
      case "Notice":
        return {
          color: "bg-blue-100 text-blue-800",
          icon: "/images/icons/notice.svg"
        }
      case "Event":
        return {
          color: "bg-green-100 text-green-800",
          icon: "/images/icons/event.svg"
        }
      case "Safety":
        return {
          color: "bg-red-100 text-red-800",
          icon: "/images/icons/safety.svg"
        }
      case "Rules":
        return {
          color: "bg-gray-100 text-gray-800",
          icon: "/images/icons/rules.svg"
        }
      default:
        return {
          color: "bg-gray-100 text-gray-800",
          icon: "/images/icons/notice.svg"
        }
    }
  }

  const categoryStyle = getCategoryStyle(announcement.category)

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex flex-wrap items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6">
              <Image
                src={categoryStyle.icon}
                alt={`${announcement.category} icon`}
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold">{announcement.title}</h2>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryStyle.color}`}>
            {announcement.category}
          </span>
        </div>
        <p className="text-gray-500 text-sm mb-4">{announcement.date}</p>
        <p className="text-gray-700">{announcement.description}</p>
      </div>
    </div>
  )
}

