import { MetricCard } from '../../dashboard-overview/components/MetricCard'

export function MetricsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard
        title="Total Responses"
        value="2,456"
        change="+15%"
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
        title="Avg. Time"
        value="3.2m"
        change="-12%"
        changeType="positive"
        icon="⏱️"
      />
      <MetricCard
        title="Bounce Rate"
        value="23%"
        change="-5%"
        changeType="positive"
        icon="📈"
      />
    </div>
  )
}

