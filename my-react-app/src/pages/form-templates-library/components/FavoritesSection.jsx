import { Heart } from 'lucide-react'
import { TemplateCard } from './TemplateCard'

const favoriteTemplates = [
  {
    id: 1,
    title: 'Customer Feedback',
    description: 'Collect customer satisfaction data',
    category: 'Business',
    rating: 4.9,
    downloads: 2567,
    isFavorite: true
  },
  {
    id: 2,
    title: 'Event Registration',
    description: 'Register attendees for events',
    category: 'Events',
    rating: 4.7,
    downloads: 1890,
    isFavorite: true
  }
]

export function FavoritesSection() {
  if (favoriteTemplates.length === 0) {
    return null
  }

  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <Heart className="w-5 h-5 text-red-500 fill-current" />
        <h2 className="text-xl font-semibold text-gray-900">Favorite Templates</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {favoriteTemplates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </div>
  )
}

