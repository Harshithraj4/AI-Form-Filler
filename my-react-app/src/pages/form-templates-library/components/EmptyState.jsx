import { Search, Filter } from 'lucide-react'
import { Button } from '../../../components/ui/Button'

export function EmptyState() {
  return (
    <div className="text-center py-12">
      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Search className="w-12 h-12 text-gray-400" />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        No templates found
      </h3>
      
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        Try adjusting your search criteria or filters to find the perfect template for your needs.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Clear Filters
        </Button>
        <Button>
          Browse All Templates
        </Button>
      </div>
    </div>
  )
}

