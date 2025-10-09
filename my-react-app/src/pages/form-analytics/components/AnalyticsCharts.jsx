import { TrendingUp, BarChart3 } from 'lucide-react'

export function AnalyticsCharts() {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Analytics Overview</h3>
        <div className="flex items-center space-x-2">
          <BarChart3 className="w-5 h-5 text-primary-600" />
        </div>
      </div>
      
      <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Analytics charts will be displayed here</p>
        </div>
      </div>
    </div>
  )
}

