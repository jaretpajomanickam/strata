import AnnouncementCard from "@/components/announcement-card"

// This would typically come from a database or API
const announcements = [
  {
    id: 1,
    title: "Annual General Meeting",
    date: "May 15, 2023",
    category: "Meeting",
    description:
      "The Annual General Meeting will be held in the community room at 7:00 PM. All residents are encouraged to attend as we will be discussing the budget for the upcoming year and electing new committee members.",
  },
  {
    id: 2,
    title: "Pool Maintenance Schedule",
    date: "June 1-3, 2023",
    category: "Maintenance",
    description:
      "The swimming pool will be closed for annual maintenance from June 1st to June 3rd. We apologize for any inconvenience and appreciate your understanding.",
  },
  {
    id: 3,
    title: "New Recycling Guidelines",
    date: "April 22, 2023",
    category: "Notice",
    description:
      "Please note the updated recycling guidelines. Soft plastics should no longer be placed in the recycling bins. Instead, please take them to the collection point at the local supermarket.",
  },
  {
    id: 4,
    title: "Community Garden Project",
    date: "May 5, 2023",
    category: "Event",
    description:
      "Join us for the launch of our community garden project! We will be planting vegetables and flowers in the designated area behind Building B. Tools and refreshments will be provided.",
  },
  {
    id: 5,
    title: "Fire Alarm Testing",
    date: "May 10, 2023",
    category: "Safety",
    description:
      "Mandatory fire alarm testing will take place on May 10th between 10:00 AM and 12:00 PM. Please note that the alarms will sound intermittently during this period.",
  },
  {
    id: 6,
    title: "Updated Visitor Parking Rules",
    date: "April 30, 2023",
    category: "Rules",
    description:
      "Effective May 1st, visitor parking will be limited to 48 hours. Visitors staying longer must register with the building manager to avoid having their vehicle towed.",
  },
]

export const metadata = {
  title: "Announcements | Strata Management System",
  description: "Stay informed with the latest news, upcoming events, and important notices from your strata committee.",
}

export default function Announcements() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Announcements</h1>
        <p className="text-xl text-gray-600 mb-8">
          Stay informed with the latest news, upcoming events, and important notices from your strata committee.
        </p>

        <div className="space-y-6">
          {announcements.map((announcement) => (
            <AnnouncementCard key={announcement.id} announcement={announcement} />
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Strata Rules Reminder</h2>
          <div className="space-y-4">
            <p>Please remember these important strata rules:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Quiet hours are from 10:00 PM to 7:00 AM</li>
              <li>No smoking in common areas</li>
              <li>Pets must be kept on leash in common areas</li>
              <li>Balconies should not be used for storage</li>
              <li>Garbage must be properly sorted and disposed of in designated bins</li>
            </ul>
            <p className="font-medium">
              Thank you for your cooperation in making our community a pleasant place to live!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

