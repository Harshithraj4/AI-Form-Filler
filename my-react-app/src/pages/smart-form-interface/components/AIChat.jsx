import { useState } from 'react'
import { Bot, Send, Sparkles } from 'lucide-react'
import { Button } from '../../../components/ui/Button'
import { Input } from '../../../components/ui/Input'

export function AIChat() {
  const [message, setMessage] = useState('')

  const quickPrompts = [
    "Create a contact form",
    "Add validation rules",
    "Make it mobile responsive"
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm border h-[600px] flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">AI Assistant</h3>
            <p className="text-sm text-gray-600">Ask me anything about your form</p>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4 text-primary-600" />
            </div>
            <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
              <p className="text-sm">Hi! I'm here to help you create amazing forms. What would you like to build today?</p>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <p className="text-xs font-medium text-gray-500 uppercase">Quick Actions</p>
          {quickPrompts.map((prompt, index) => (
            <button
              key={index}
              onClick={() => setMessage(prompt)}
              className="w-full text-left p-2 text-sm bg-primary-50 text-primary-700 rounded hover:bg-primary-100 transition-colors"
            >
              <Sparkles className="w-3 h-3 inline mr-2" />
              {prompt}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1"
          />
          <Button size="sm">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

