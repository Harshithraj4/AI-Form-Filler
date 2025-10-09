import { User, Camera } from 'lucide-react'
import { Button } from '../../../components/ui/Button'
import { Input } from '../../../components/ui/Input'

export function ProfileSection() {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Avatar */}
        <div className="md:col-span-1">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <User className="w-12 h-12 text-primary-600" />
            </div>
            <Button variant="outline" size="sm">
              <Camera className="w-4 h-4 mr-2" />
              Change Photo
            </Button>
          </div>
        </div>

        {/* Form Fields */}
        <div className="md:col-span-2 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <Input placeholder="Enter first name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <Input placeholder="Enter last name" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <Input type="email" placeholder="Enter email address" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bio
            </label>
            <textarea 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              rows={3}
              placeholder="Tell us about yourself..."
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <Button>Save Changes</Button>
      </div>
    </div>
  )
}
