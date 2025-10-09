import { useState } from 'react'
import { Eye, Heart, Copy, Star } from 'lucide-react'
import { Button } from '../../../components/ui/Button'

export function TemplateCard({ 
  template = {
    id: 1,
    title: 'Contact Form',
    description: 'Professional contact form template',
    category: 'Business',
    rating: 4.8,
    downloads: 1234,
    isFavorite: false,
    image: '/api/placeholder/300/200'
  }
}) {
  const [isFavorite, setIsFavorite] = useState(template.isFavorite)

  const handleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  const handlePreview = () => {
    // Open preview modal
  }

  const handleUse = () => {
    // Use template
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
      {/* Template Image */}
      <div className="aspect-video bg-gray-100 rounded-t-lg flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-2">
            📝
          </div>
          <p className="text-sm text-gray-500">Form Preview</p>
        </div>
      </div>

      {/* Template Info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{template.title}</h3>
          <button
            onClick={handleFavorite}
            className={`p-1 rounded-full transition-colors ${
              isFavorite 
                ? 'text-red-500 hover:text-red-600' 
                : 'text-gray-400 hover:text-red-500'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-3">{template.description}</p>

        {/* Template Stats */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 ml-1">{template.rating}</span>
            </div>
            <span className="text-sm text-gray-500">{template.downloads} uses</span>
          </div>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
            {template.category}
          </span>
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handlePreview}
            className="flex-1"
          >
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button 
            size="sm" 
            onClick={handleUse}
            className="flex-1"
          >
            <Copy className="w-4 h-4 mr-2" />
            Use Template
          </Button>
        </div>
      </div>
    </div>
  )
}
