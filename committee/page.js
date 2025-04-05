import ProfileCard from "@/components/profile-card"

const committeeMembers = [
  {
    name: "Sarah Johnson",
    role: "Chairperson",
    email: "sarah.johnson@example.com",
    bio: "Sarah has been a resident for 5 years and is passionate about creating a vibrant community for all residents.",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Michael Chen",
    role: "Secretary",
    email: "michael.chen@example.com",
    bio: "Michael brings his organizational skills to ensure smooth communication between residents and management.",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Priya Patel",
    role: "Treasurer",
    email: "priya.patel@example.com",
    bio: "With a background in finance, Priya manages the strata funds and budget with precision and transparency.",
    image: "/placeholder-user.jpg",
  },
  {
    name: "David Wilson",
    role: "Maintenance Coordinator",
    email: "david.wilson@example.com",
    bio: "David oversees all maintenance activities and ensures timely resolution of building issues.",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Emma Rodriguez",
    role: "Social Committee Lead",
    email: "emma.rodriguez@example.com",
    bio: "Emma organizes community events and activities to foster a sense of belonging among residents.",
    image: "/placeholder-user.jpg",
  },
  {
    name: "James Taylor",
    role: "Landscaping Coordinator",
    email: "james.taylor@example.com",
    bio: "James ensures our common areas and gardens are well-maintained and beautiful throughout the year.",
    image: "/placeholder-user.jpg",
  },
]

export const metadata = {
  title: "Committee Members | Strata Management System",
  description: "Meet our dedicated committee members who work tirelessly to ensure our community thrives.",
}

export default function Committee() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Meet Your Committee</h1>
        <p className="text-xl text-gray-600">
          Our dedicated committee members work tirelessly to ensure our community thrives. Feel free to reach out to
          them with any questions or concerns.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {committeeMembers.map((member, index) => (
          <ProfileCard key={index} member={member} />
        ))}
      </div>
    </div>
  )
}

