import { Palette, Moon, Sun } from 'lucide-react'
import { Button } from '../../../components/ui/Button'
import { Select } from '../../../components/ui/Select'

export function AppearanceSection() {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Palette className="w-6 h-6 text-primary-600" />
        <h2 className="text-xl font-semibold text-gray-900">Appearance</h2>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Theme</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="border-2 border-primary-500 rounded-lg p-4 cursor-pointer">
              <Sun className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
              <p className="text-sm font-medium text-center">Light</p>
            </div>
            <div className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-gray-400">
              <Moon className="w-6 h-6 text-gray-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-center">Dark</p>
            </div>
            <div className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-gray-400">
              <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-gray-600 rounded mx-auto mb-2"></div>
              <p className="text-sm font-medium text-center">Auto</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Color Scheme</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Primary Color
              </label>
              <Select>
                <option>Blue</option>
                <option>Green</option>
                <option>Purple</option>
                <option>Red</option>
                <option>Orange</option>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Accent Color
              </label>
              <Select>
                <option>Default</option>
                <option>Vibrant</option>
                <option>Subtle</option>
                <option>Custom</option>
              </Select>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Layout</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sidebar Width
              </label>
              <Select>
                <option>Compact</option>
                <option>Standard</option>
                <option>Wide</option>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Font Size
              </label>
              <Select>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <Button>Save Appearance</Button>
      </div>
    </div>
  )
}
