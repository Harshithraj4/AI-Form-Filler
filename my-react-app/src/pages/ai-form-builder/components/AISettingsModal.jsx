import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from '../../../components/ui/Button'
import { Input } from '../../../components/ui/Input'
import { Checkbox } from '../../../components/ui/Checkbox'
import { Select } from '../../../components/ui/Select'

export function AISettingsModal({ isOpen, onClose }) {
  const [settings, setSettings] = useState({
    aiAssistant: true,
    autoSuggestions: true,
    smartValidation: true,
    formOptimization: true,
    language: 'en',
    creativity: 'balanced',
    responseTime: 'fast'
  })

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-lg font-semibold">AI Settings</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* General AI Settings */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-4">General AI Settings</h3>
            <div className="space-y-4">
              <Checkbox
                checked={settings.aiAssistant}
                onChange={(e) => handleSettingChange('aiAssistant', e.target.checked)}
                label="Enable AI Assistant"
              />
              <Checkbox
                checked={settings.autoSuggestions}
                onChange={(e) => handleSettingChange('autoSuggestions', e.target.checked)}
                label="Auto-generate field suggestions"
              />
              <Checkbox
                checked={settings.smartValidation}
                onChange={(e) => handleSettingChange('smartValidation', e.target.checked)}
                label="Smart validation rules"
              />
              <Checkbox
                checked={settings.formOptimization}
                onChange={(e) => handleSettingChange('formOptimization', e.target.checked)}
                label="Automatic form optimization"
              />
            </div>
          </div>

          {/* AI Behavior */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-4">AI Behavior</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Language
                </label>
                <Select
                  value={settings.language}
                  onChange={(e) => handleSettingChange('language', e.target.value)}
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="zh">Chinese</option>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Creativity Level
                </label>
                <Select
                  value={settings.creativity}
                  onChange={(e) => handleSettingChange('creativity', e.target.value)}
                >
                  <option value="conservative">Conservative</option>
                  <option value="balanced">Balanced</option>
                  <option value="creative">Creative</option>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Response Time Priority
                </label>
                <Select
                  value={settings.responseTime}
                  onChange={(e) => handleSettingChange('responseTime', e.target.value)}
                >
                  <option value="fast">Fast (Basic suggestions)</option>
                  <option value="balanced">Balanced</option>
                  <option value="thorough">Thorough (Detailed analysis)</option>
                </Select>
              </div>
            </div>
          </div>

          {/* Advanced Settings */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-4">Advanced Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  API Key (Optional)
                </label>
                <Input
                  type="password"
                  placeholder="Enter your API key for enhanced features"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end space-x-3 p-6 border-t">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onClose}>
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  )
}

