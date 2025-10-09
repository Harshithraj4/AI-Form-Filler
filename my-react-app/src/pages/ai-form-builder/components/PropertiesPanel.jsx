import { useState } from 'react'
import { Input } from '../../../components/ui/Input'
import { Checkbox } from '../../../components/ui/Checkbox'
import { Select } from '../../../components/ui/Select'

export function PropertiesPanel({ selectedComponent }) {
  const [properties, setProperties] = useState({
    label: selectedComponent?.label || '',
    placeholder: selectedComponent?.placeholder || '',
    required: selectedComponent?.required || false,
    validation: selectedComponent?.validation || 'none'
  })

  const handlePropertyChange = (key, value) => {
    setProperties(prev => ({
      ...prev,
      [key]: value
    }))
  }

  if (!selectedComponent) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Component Selected</h3>
          <p className="text-gray-600">
            Select a component from the library or form editor to configure its properties.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Properties</h3>
        <p className="text-sm text-gray-600 mt-1">
          Configure the selected {selectedComponent.label || selectedComponent.type} component
        </p>
      </div>

      {/* Properties Form */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Basic Properties */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-3">Basic Properties</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Label
              </label>
              <Input
                value={properties.label}
                onChange={(e) => handlePropertyChange('label', e.target.value)}
                placeholder="Field label"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Placeholder
              </label>
              <Input
                value={properties.placeholder}
                onChange={(e) => handlePropertyChange('placeholder', e.target.value)}
                placeholder="Placeholder text"
              />
            </div>

            <div>
              <Checkbox
                checked={properties.required}
                onChange={(e) => handlePropertyChange('required', e.target.checked)}
                label="Required field"
              />
            </div>
          </div>
        </div>

        {/* Validation */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-3">Validation</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Validation Type
              </label>
              <Select
                value={properties.validation}
                onChange={(e) => handlePropertyChange('validation', e.target.value)}
              >
                <option value="none">No validation</option>
                <option value="email">Email format</option>
                <option value="url">URL format</option>
                <option value="number">Numbers only</option>
                <option value="phone">Phone format</option>
                <option value="custom">Custom regex</option>
              </Select>
            </div>

            {properties.validation === 'custom' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Custom Pattern
                </label>
                <Input
                  placeholder="Enter regex pattern"
                />
              </div>
            )}
          </div>
        </div>

        {/* Styling */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-3">Styling</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Width
              </label>
              <Select>
                <option value="full">Full width</option>
                <option value="half">Half width</option>
                <option value="third">Third width</option>
                <option value="quarter">Quarter width</option>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Alignment
              </label>
              <Select>
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
