import { Bot, Settings } from 'lucide-react'
import { Button } from '../../../components/ui/Button'
import { Checkbox } from '../../../components/ui/Checkbox'
import { Select } from '../../../components/ui/Select'

export function AIPreferencesSection() {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Bot className="w-6 h-6 text-primary-600" />
        <h2 className="text-xl font-semibold text-gray-900">AI Preferences</h2>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">AI Assistant Settings</h3>
          <div className="space-y-4">
            <Checkbox label="Enable AI suggestions" defaultChecked />
            <Checkbox label="Auto-generate form fields" />
            <Checkbox label="Smart validation rules" defaultChecked />
            <Checkbox label="Form optimization suggestions" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">AI Behavior</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Response Style
              </label>
              <Select>
                <option>Conservative</option>
                <option>Balanced</option>
                <option>Creative</option>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Language
              </label>
              <Select>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <Button>Save Preferences</Button>
      </div>
    </div>
  )
}

