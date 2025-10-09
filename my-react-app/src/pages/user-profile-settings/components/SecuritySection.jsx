import { Shield, Key, Smartphone } from 'lucide-react'
import { Button } from '../../../components/ui/Button'
import { Input } from '../../../components/ui/Input'
import { Checkbox } from '../../../components/ui/Checkbox'

export function SecuritySection() {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Shield className="w-6 h-6 text-primary-600" />
        <h2 className="text-xl font-semibold text-gray-900">Security</h2>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Password</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Password
              </label>
              <Input type="password" placeholder="Enter current password" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <Input type="password" placeholder="Enter new password" />
            </div>
          </div>
          <Button className="mt-4">Change Password</Button>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Two-Factor Authentication</h3>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Smartphone className="w-6 h-6 text-gray-600" />
              <div>
                <p className="font-medium text-gray-900">Authenticator App</p>
                <p className="text-sm text-gray-600">Use an authenticator app for 2FA</p>
              </div>
            </div>
            <Button variant="outline">Enable</Button>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Session Management</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Chrome on Windows</p>
                <p className="text-sm text-gray-600">Current session • Last active 2 hours ago</p>
              </div>
              <Button variant="outline" size="sm">Revoke</Button>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Safari on macOS</p>
                <p className="text-sm text-gray-600">Last active 1 day ago</p>
              </div>
              <Button variant="outline" size="sm">Revoke</Button>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Privacy Settings</h3>
          <div className="space-y-4">
            <Checkbox label="Allow analytics tracking" defaultChecked />
            <Checkbox label="Share usage data for product improvement" />
            <Checkbox label="Receive security alerts" defaultChecked />
          </div>
        </div>
      </div>
    </div>
  )
}
