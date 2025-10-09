import { useState } from 'react'
import { X, Copy, Download, Eye } from 'lucide-react'
import { Button } from '../../../components/ui/Button'

export function TemplatePreviewModal({ isOpen, onClose, template }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Template Preview</h2>
            <p className="text-gray-600 mt-1">Preview and customize your template</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="bg-gray-50 rounded-lg p-8 min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center mx-auto mb-6">
                📝
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Form Preview
              </h3>
              <p className="text-gray-600">
                Interactive form preview will be displayed here
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Eye className="w-4 h-4 mr-2" />
              Full Preview
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button>
              <Copy className="w-4 h-4 mr-2" />
              Use Template
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
