import { Header } from '../../components/ui/Header'
import { AnalyticsCharts } from './components/AnalyticsCharts'
import { AnalyticsFilters } from './components/AnalyticsFilters'
import { FormPerformanceTable } from './components/FormPerformanceTable'
import { HeatMapVisualization } from './components/HeatMapVisualization'
import { MetricsOverview } from './components/MetricsOverview'

function FormAnalytics() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Form Analytics</h1>
          <p className="text-gray-600 mt-2">
            Analyze form performance and user behavior insights
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <AnalyticsFilters />
        </div>

        {/* Metrics Overview */}
        <div className="mb-8">
          <MetricsOverview />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <AnalyticsCharts />
          <HeatMapVisualization />
        </div>

        {/* Performance Table */}
        <FormPerformanceTable />
      </main>
    </div>
  )
}

export default FormAnalytics
