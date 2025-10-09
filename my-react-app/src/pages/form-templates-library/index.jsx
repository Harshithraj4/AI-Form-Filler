import { Header } from '../../components/ui/Header'
import { EmptyState } from './components/EmptyState'
import { FavoritesSection } from './components/FavoritesSection'
import { FilterToolbar } from './components/FilterToolbar'
import { TemplateCard } from './components/TemplateCard'
import { TemplatePreviewModal } from './components/TemplatePreviewModal'

function FormTemplatesLibrary() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Form Templates</h1>
          <p className="text-gray-600 mt-2">
            Choose from professionally designed form templates
          </p>
        </div>

        {/* Favorites Section */}
        <div className="mb-8">
          <FavoritesSection />
        </div>

        {/* Filter Toolbar */}
        <div className="mb-6">
          <FilterToolbar />
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
        </div>

        {/* Empty State (when no templates match filters) */}
        {/* <EmptyState /> */}

        {/* Template Preview Modal */}
        <TemplatePreviewModal />
      </main>
    </div>
  )
}

export default FormTemplatesLibrary
