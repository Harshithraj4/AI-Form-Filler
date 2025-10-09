import { Header } from '../../components/ui/Header'
import { AIChat } from './components/AIChat'
import { ConnectionIndicator } from './components/ConnectionIndicator'
import { FormField } from './components/FormField'
import { FormPreview } from './components/FormPreview'
import { FormProgress } from './components/FormProgress'

function SmartFormInterface() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Smart Form Interface</h1>
          <p className="text-gray-600 mt-2">
            AI-powered form creation and management
          </p>
        </div>

        {/* Connection Status */}
        <div className="mb-6">
          <ConnectionIndicator />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - AI Chat */}
          <div className="lg:col-span-1">
            <AIChat />
          </div>

          {/* Middle Column - Form Builder */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Form Builder</h2>
              
              {/* Form Progress */}
              <div className="mb-6">
                <FormProgress />
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                <FormField />
                <FormField />
                <FormField />
              </div>
            </div>
          </div>
        </div>

        {/* Form Preview */}
        <div className="mt-8">
          <FormPreview />
        </div>
      </main>
    </div>
  )
}

export default SmartFormInterface
