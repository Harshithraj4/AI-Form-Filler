import { Bell, Mail, Smartphone } from 'lucide-react'
import { Button } from '../../../components/ui/Button'
import { Checkbox } from '../../../components/ui/Checkbox'

export function NotificationSection() {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Bell className="w-6 h-6 text-primary-600" />
        <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Email Notifications</h3>
          <div className="space-y-4">
            <Checkbox label="New form responses" defaultChecked />
            <Checkbox label="Form performance reports" />
            <Checkbox label="AI suggestions and insights" defaultChecked />
            <Checkbox label="Account updates" defaultChecked />
            <Checkbox label="Marketing communications" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Push Notifications</h3>
          <div className="space-y-4">
            <Checkbox label="Real-time form responses" />
            <Checkbox label="Weekly analytics summary" defaultChecked />
            <Checkbox label="System maintenance alerts" defaultChecked />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Frequency</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="radio" name="frequency" className="mr-2" defaultChecked />
              <span className="text-sm">Immediate</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="frequency" className="mr-2" />
              <span className="text-sm">Daily digest</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="frequency" className="mr-2" />
              <span className="text-sm">Weekly summary</span>
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <Button>Save Notification Settings</Button>
      </div>
    </div>
  )
}

