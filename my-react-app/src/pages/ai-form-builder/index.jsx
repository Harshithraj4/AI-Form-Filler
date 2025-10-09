import { useState } from 'react'
import { Header } from '../../components/ui/Header'
import { AIAssistancePanel } from '../../components/ui/AIAssistancePanel'
import { AISettingsModal } from './components/AISettingsModal'
import { ComponentLibrary } from './components/ComponentLibrary'
import { FormEditor } from './components/FormEditor'
import { FormToolbar } from './components/FormToolbar'
import { PropertiesPanel } from './components/PropertiesPanel'
import { SchemaPreview } from './components/SchemaPreview'

function AIFormBuilder() {
  const [showAIAssistant, setShowAIAssistant] = useState(false)
  const [showAISettings, setShowAISettings] = useState(false)
  const [selectedComponent, setSelectedComponent] = useState(null)

  const handleAISubmit = (message) => {
    console.log('AI Assistant message:', message)
    // Handle AI assistant interactions
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex h-[calc(100vh-64px)]">
        {/* Left Sidebar - Component Library */}
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
          <ComponentLibrary 
            onComponentSelect={setSelectedComponent}
            selectedComponent={selectedComponent}
          />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Toolbar */}
          <FormToolbar 
            onAIAssistant={() => setShowAIAssistant(true)}
            onAISettings={() => setShowAISettings(true)}
          />

          {/* Form Editor */}
          <div className="flex-1 flex">
            <div className="flex-1 p-6">
              <FormEditor 
                selectedComponent={selectedComponent}
                onComponentSelect={setSelectedComponent}
              />
            </div>

            {/* Right Sidebar - Properties */}
            <div className="w-80 bg-white border-l border-gray-200">
              <PropertiesPanel selectedComponent={selectedComponent} />
            </div>
          </div>
        </div>
      </div>

      {/* AI Assistant Panel */}
      <AIAssistancePanel
        isOpen={showAIAssistant}
        onClose={() => setShowAIAssistant(false)}
        onSubmit={handleAISubmit}
      />

      {/* AI Settings Modal */}
      <AISettingsModal
        isOpen={showAISettings}
        onClose={() => setShowAISettings(false)}
      />

      {/* Schema Preview Modal */}
      <SchemaPreview />
    </div>
  )
}

export default AIFormBuilder
