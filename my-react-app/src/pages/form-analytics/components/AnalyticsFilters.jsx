import { Calendar, Filter } from 'lucide-react'
import { Button } from '../../../components/ui/Button'
import { Select } from '../../../components/ui/Select'

export function AnalyticsFilters() {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Select>
            <option>All Forms</option>
            <option>Customer Feedback</option>
            <option>Event Registration</option>
            <option>Contact Form</option>
          </Select>
        </div>
        
        <div className="w-full sm:w-48">
          <Select>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
            <option>Last year</option>
          </Select>
        </div>
        
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          More Filters
        </Button>
      </div>
    </div>
  )
}
