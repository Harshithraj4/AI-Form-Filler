import { useState } from 'react'
import { Eye, Copy, Download } from 'lucide-react'
import { Button } from '../../../components/ui/Button'

export function SchemaPreview() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('json')

  const sampleSchema = {
    "form": {
      "title": "Customer Feedback Form",
      "description": "Help us improve our services",
      "fields": [
        {
          "id": "name",
          "type": "text",
          "label": "Full Name",
          "required": true,
          "validation": {
            "minLength": 2,
            "maxLength": 100
          }
        },
        {
          "id": "email",
          "type": "email",
          "label": "Email Address",
          "required": true,
          "validation": {
            "pattern": "^[^@]+@[^@]+\\.[^@]+$"
          }
        },
        {
          "id": "rating",
          "type": "rating",
          "label": "Overall Rating",
          "required": true,
          "options": {
            "maxRating": 5
          }
        }
      ]
    }
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    // You could add a toast notification here
  }

  if (!isOpen) {
    return (
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4"
      >
        <Eye className="w-4 h-4 mr-2" />
        View Schema
      </Button>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-lg font-semibold">Form Schema Preview</h2>
          <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
            ×
          </Button>
        </div>

        {/* Tabs */}
        <div className="border-b">
          <div className="flex">
            {['json', 'yaml', 'typescript'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="bg-gray-900 rounded-lg p-4 relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-400">Form Schema</span>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(JSON.stringify(sampleSchema, null, 2))}
                  className="text-gray-400 hover:text-white"
                >
                  <Copy className="w-4 h-4 mr-1" />
                  Copy
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <Download className="w-4 h-4 mr-1" />
                  Download
                </Button>
              </div>
            </div>
            <pre className="text-green-400 text-sm overflow-x-auto">
              <code>{JSON.stringify(sampleSchema, null, 2)}</code>
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end space-x-3 p-6 border-t">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Close
          </Button>
          <Button>
            Export Schema
          </Button>
        </div>
      </div>
    </div>
  )
}

