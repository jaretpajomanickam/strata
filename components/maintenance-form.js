"use client"

import { useState } from "react"
import { Upload, CheckCircle } from "lucide-react"

export default function MaintenanceForm() {
  const [formData, setFormData] = useState({
    name: "",
    unitNumber: "",
    description: "",
    photo: null,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [requests, setRequests] = useState([])
  const [photoPreview, setPhotoPreview] = useState(null)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData((prev) => ({
        ...prev,
        photo: file,
      }))

      // Create preview URL
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotoPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // In a real app, you would upload the photo to a service like Cloudinary
      // and get a URL back to store in your database

      // Create a request object to send to the API
      const requestData = {
        name: formData.name,
        unitNumber: formData.unitNumber,
        description: formData.description,
        photoUrl: photoPreview ? "photo-url-would-go-here" : null,
        timestamp: new Date().toISOString(),
      }

      // Send the request to the API
      const response = await fetch("/api/maintenance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit request")
      }

      // Add to local state for display
      const newRequest = {
        ...requestData,
        id: result.requestId || Date.now(),
        status: "Pending",
        dateSubmitted: new Date().toLocaleDateString(),
      }

      setRequests((prev) => [newRequest, ...prev])

      // Reset form
      setFormData({
        name: "",
        unitNumber: "",
        description: "",
        photo: null,
      })
      setPhotoPreview(null)

      // Show success message
      setSubmitted(true)

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err) {
      console.error("Error submitting maintenance request:", err)
      setError(err.message || "An error occurred while submitting your request")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {submitted && (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6 flex items-start">
          <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium">Request submitted successfully!</p>
            <p>Your maintenance request has been received. We'll review it shortly.</p>
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6">
          <p className="font-medium">Error</p>
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="unitNumber" className="block text-gray-700 font-medium mb-2">
              Unit Number
            </label>
            <input
              type="text"
              id="unitNumber"
              name="unitNumber"
              value={formData.unitNumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
            Issue Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Upload Photo of Issue (Optional)</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
            <div className="space-y-1 text-center">
              {photoPreview ? (
                <div className="mb-3">
                  <img
                    src={photoPreview || "/placeholder.svg"}
                    alt="Preview"
                    className="mx-auto h-32 object-cover rounded"
                  />
                </div>
              ) : (
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
              )}
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="photo"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                >
                  <span>Upload a file</span>
                  <input
                    id="photo"
                    name="photo"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </button>
      </form>

      {requests.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Recent Requests</h2>
          <div className="space-y-4">
            {requests.map((request) => (
              <div key={request.id} className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-600">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">
                      {request.name} - Unit {request.unitNumber}
                    </h3>
                    <p className="text-gray-600 text-sm">Submitted on {request.dateSubmitted}</p>
                  </div>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                    {request.status}
                  </span>
                </div>
                <p className="mt-2">{request.description}</p>
                {request.photoUrl && (
                  <div className="mt-3">
                    <img src={photoPreview || "/placeholder.svg"} alt="Issue" className="h-20 rounded" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

