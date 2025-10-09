import { Search, Filter } from 'lucide-react'
import { Input } from '../../../components/ui/Input'
import { Select } from '../../../components/ui/Select'
import { Button } from '../../../components/ui/Button'

export function FilterToolbar() {
  const categories = [
    'All Categories',
    'Business',
    'E-commerce',
    'Education',
    'Healthcare',
    'Marketing',
    'Surveys',
    'Events'
  ]

  const sortOptions = [
    'Most Popular',
    'Newest',
    'Highest Rated',
    'Most Downloaded'
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search templates..."
              className="pl-10"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="w-full sm:w-48">
          <Select>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>
        </div>

        {/* Sort */}
        <div className="w-full sm:w-48">
          <Select>
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </div>

        {/* Filter Button */}
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </div>
    </div>
  )
}

