import MaintenanceForm from "@/components/maintenance-form"

export const metadata = {
  title: "Maintenance Requests | Strata Management System",
  description: "Submit a maintenance request for your unit or common areas.",
}

export default function Maintenance() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Maintenance Request</h1>
        <p className="text-xl text-gray-600 mb-8">
          Submit a maintenance request for your unit or common areas. Our team will address your concerns as soon as
          possible.
        </p>

        <MaintenanceForm />
      </div>
    </div>
  )
}

