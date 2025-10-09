import { Header } from '../../components/ui/Header'
import { ConnectionStatus } from '../../components/ui/ConnectionStatus'
import { ActivityFeed } from './components/ActivityFeed'
import { AIUsagePanel } from './components/AIUsagePanel'
import { MetricCard } from './components/MetricCard'
import { NotificationCenter } from './components/NotificationCenter'
import { QuickActions } from './components/QuickActions'
import { RecentFormsTable } from './components/RecentFormsTable'

function DashboardOverview() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Connection Status */}
        <div className="mb-6">
          <ConnectionStatus />
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Welcome back! Here's what's happening with your forms.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Forms"
            value="24"
            change="+12%"
            changeType="positive"
            icon="📝"
          />
          <MetricCard
            title="Responses"
            value="1,234"
            change="+8%"
            changeType="positive"
            icon="📊"
          />
          <MetricCard
            title="Completion Rate"
            value="87%"
            change="+3%"
            changeType="positive"
            icon="✅"
          />
          <MetricCard
            title="AI Suggestions"
            value="156"
            change="+23%"
            changeType="positive"
            icon="🤖"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <QuickActions />
            <RecentFormsTable />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <AIUsagePanel />
            <ActivityFeed />
            <NotificationCenter />
          </div>
        </div>
      </main>
    </div>
  )
}

export default DashboardOverview
