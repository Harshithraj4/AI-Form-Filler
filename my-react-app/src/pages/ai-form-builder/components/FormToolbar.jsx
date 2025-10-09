import { Bot, Settings, Eye, Save, Download, Share } from 'lucide-react'
import { Button } from '../../../components/ui/Button'

export function FormToolbar({ onAIAssistant, onAISettings }) {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-gray-900">AI Form Builder</h1>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={onAIAssistant}>
              <Bot className="w-4 h-4 mr-2" />
              AI Assistant
            </Button>
            <Button variant="outline" size="sm" onClick={onAISettings}>
              <Settings className="w-4 h-4 mr-2" />
              AI Settings
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <Share className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button size="sm">
            <Save className="w-4 h-4 mr-2" />
            Save Form
          </Button>
        </div>
      </div>
    </div>
  )
}
