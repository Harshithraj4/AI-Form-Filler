import { useState } from 'react'
import { Bot, Send, X, Sparkles } from 'lucide-react'
import { Button } from './Button'
import { Input } from './Input'

export function AIAssistancePanel({ isOpen, onClose, onSubmit }) {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      onSubmit(message)
      setMessage('')
    }
  }

  const quickPrompts = [
    "Create a contact form",
    "Add validation rules",
    "Make it mobile responsive",
    "Generate form schema"
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">AI Assistant</h2>
              <p className="text-sm text-gray-500">Get help with your forms</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4 text-blue-600" />
            </div>
            <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
              <p className="text-sm">
                Hi! I'm your AI assistant. I can help you create forms, add validation rules, 
                optimize layouts, and much more. What would you like to work on?
              </p>
            </div>
          </div>

          {/* Quick Prompts */}
          <div className="space-y-2">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Quick Actions
            </p>
            <div className="flex flex-wrap gap-2">
              {quickPrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => setMessage(prompt)}
                  className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100 transition-colors"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>{prompt}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-6 border-t">
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask me anything about your form..."
              className="flex-1"
            />
            <Button type="submit" disabled={!message.trim()}>
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
