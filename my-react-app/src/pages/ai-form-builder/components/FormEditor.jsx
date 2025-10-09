import { useState } from 'react'
import { Plus, Trash2, Copy, Eye } from 'lucide-react'
import { Button } from '../../../components/ui/Button'

export function FormEditor({ selectedComponent, onComponentSelect }) {
  const [formFields, setFormFields] = useState([
    {
      id: 1,
      type: 'text',
      label: 'Full Name',
      placeholder: 'Enter your full name',
      required: true,
      order: 1
    },
    {
      id: 2,
      type: 'email',
      label: 'Email Address',
      placeholder: 'Enter your email',
      required: true,
      order: 2
    }
  ])

  const handleDrop = (e) => {
    e.preventDefault()
    const componentData = JSON.parse(e.dataTransfer.getData('application/json'))
    
    const newField = {
      id: Date.now(),
      type: componentData.type,
      label: componentData.label,
      placeholder: `Enter ${componentData.label.toLowerCase()}`,
      required: false,
      order: formFields.length + 1
    }

    setFormFields([...formFields, newField])
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleFieldSelect = (field) => {
    onComponentSelect(field)
  }

  const handleFieldDelete = (fieldId) => {
    setFormFields(formFields.filter(field => field.id !== fieldId))
  }

  const handleFieldDuplicate = (fieldId) => {
    const fieldToDuplicate = formFields.find(field => field.id === fieldId)
    if (fieldToDuplicate) {
      const duplicatedField = {
        ...fieldToDuplicate,
        id: Date.now(),
        label: `${fieldToDuplicate.label} (Copy)`,
        order: formFields.length + 1
      }
      setFormFields([...formFields, duplicatedField])
    }
  }

  const renderFieldInput = (field) => {
    const baseClasses = "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
    
    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            className={`${baseClasses} min-h-[100px] resize-none`}
            placeholder={field.placeholder}
            disabled
          />
        )
      case 'select':
        return (
          <select className={baseClasses} disabled>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        )
      case 'checkbox':
        return (
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" disabled />
              <span className="text-sm text-gray-600">Option 1</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" disabled />
              <span className="text-sm text-gray-600">Option 2</span>
            </label>
          </div>
        )
      case 'radio':
        return (
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="radio" name={`radio-${field.id}`} className="mr-2" disabled />
              <span className="text-sm text-gray-600">Option 1</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name={`radio-${field.id}`} className="mr-2" disabled />
              <span className="text-sm text-gray-600">Option 2</span>
            </label>
          </div>
        )
      default:
        return (
          <input
            type={field.type}
            className={baseClasses}
            placeholder={field.placeholder}
            disabled
          />
        )
    }
  }

  return (
    <div className="h-full flex flex-col">
      {/* Editor Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Form Editor</h2>
          <p className="text-sm text-gray-600 mt-1">Drag components from the library to build your form</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button size="sm">
            Save Form
          </Button>
        </div>
      </div>

      {/* Form Canvas */}
      <div
        className="flex-1 bg-white rounded-lg border-2 border-dashed border-gray-300 p-6 overflow-y-auto"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {formFields.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <Plus className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-lg font-medium text-gray-900 mb-2">Start Building Your Form</p>
              <p className="text-gray-600">
                Drag components from the library to create your form fields
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {formFields
              .sort((a, b) => a.order - b.order)
              .map((field) => (
                <div
                  key={field.id}
                  className={`p-4 border rounded-lg transition-all ${
                    selectedComponent?.id === field.id
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleFieldSelect(field)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-900">
                        {field.label}
                      </span>
                      {field.required && (
                        <span className="text-red-500">*</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleFieldDuplicate(field.id)
                        }}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleFieldDelete(field.id)
                        }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  {renderFieldInput(field)}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  )
}
