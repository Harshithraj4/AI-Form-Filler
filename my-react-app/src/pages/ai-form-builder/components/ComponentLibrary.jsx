import { useState } from 'react'
import { 
  Type, 
  Mail, 
  Phone, 
  Calendar, 
  CheckSquare, 
  Radio, 
  Image,
  FileText,
  Star,
  Hash
} from 'lucide-react'

const componentCategories = [
  {
    name: 'Basic Fields',
    components: [
      { type: 'text', label: 'Text Input', icon: Type, description: 'Single line text input' },
      { type: 'email', label: 'Email', icon: Mail, description: 'Email address input' },
      { type: 'phone', label: 'Phone', icon: Phone, description: 'Phone number input' },
      { type: 'number', label: 'Number', icon: Hash, description: 'Numeric input' },
      { type: 'date', label: 'Date', icon: Calendar, description: 'Date picker' },
      { type: 'textarea', label: 'Text Area', icon: FileText, description: 'Multi-line text input' }
    ]
  },
  {
    name: 'Selection Fields',
    components: [
      { type: 'checkbox', label: 'Checkbox', icon: CheckSquare, description: 'Multiple selection' },
      { type: 'radio', label: 'Radio Button', icon: Radio, description: 'Single selection' },
      { type: 'select', label: 'Dropdown', icon: Type, description: 'Select from options' },
      { type: 'rating', label: 'Rating', icon: Star, description: 'Star rating input' }
    ]
  },
  {
    name: 'Media Fields',
    components: [
      { type: 'file', label: 'File Upload', icon: Image, description: 'File upload input' },
      { type: 'image', label: 'Image Upload', icon: Image, description: 'Image upload input' }
    ]
  }
]

export function ComponentLibrary({ onComponentSelect, selectedComponent }) {
  const [activeCategory, setActiveCategory] = useState(0)

  const handleDragStart = (e, component) => {
    e.dataTransfer.setData('application/json', JSON.stringify(component))
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Component Library</h2>
        <p className="text-sm text-gray-600 mt-1">Drag components to build your form</p>
      </div>

      {/* Category Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex">
          {componentCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex-1 px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeCategory === index
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Components Grid */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-2 gap-3">
          {componentCategories[activeCategory].components.map((component, index) => (
            <div
              key={index}
              draggable
              onDragStart={(e) => handleDragStart(e, component)}
              className={`p-3 border rounded-lg cursor-grab hover:shadow-md transition-shadow ${
                selectedComponent?.type === component.type
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
              onClick={() => onComponentSelect(component)}
            >
              <div className="flex items-center space-x-2 mb-2">
                <component.icon className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-900">
                  {component.label}
                </span>
              </div>
              <p className="text-xs text-gray-500">
                {component.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <h3 className="text-sm font-medium text-gray-900 mb-2">AI Suggestions</h3>
        <div className="space-y-2">
          <button className="w-full text-left p-2 text-sm text-primary-600 hover:bg-primary-50 rounded">
            Add validation rules
          </button>
          <button className="w-full text-left p-2 text-sm text-primary-600 hover:bg-primary-50 rounded">
            Optimize form layout
          </button>
          <button className="w-full text-left p-2 text-sm text-primary-600 hover:bg-primary-50 rounded">
            Generate similar fields
          </button>
        </div>
      </div>
    </div>
  )
}

