import { Bot, Zap, TrendingUp } from 'lucide-react'

export function AIUsagePanel() {
  const usageStats = [
    { label: 'Forms Generated', value: '12', icon: Bot },
    { label: 'AI Suggestions', value: '89', icon: Zap },
    { label: 'Time Saved', value: '4.2h', icon: TrendingUp }
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">AI Usage</h3>
        <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
          <Bot className="w-5 h-5 text-primary-600" />
        </div>
      </div>
      
      <div className="space-y-4">
        {usageStats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                <stat.icon className="w-4 h-4 text-gray-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {stat.label}
              </span>
            </div>
            <span className="text-sm font-semibold text-gray-900">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">This month</span>
          <span className="font-medium text-green-600">+23%</span>
        </div>
      </div>
    </div>
  )
}
