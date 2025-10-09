import { TrendingUp, TrendingDown } from 'lucide-react'
import { cn } from '../../../utils/cn'

export function MetricCard({ 
  title, 
  value, 
  change, 
  changeType = 'neutral',
  icon,
  className 
}) {
  return (
    <div className={cn(
      'bg-white rounded-lg shadow-sm border p-6',
      className
    )}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        {icon && (
          <div className="text-2xl">{icon}</div>
        )}
      </div>
      
      {change && (
        <div className="mt-4 flex items-center">
          {changeType === 'positive' ? (
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
          ) : changeType === 'negative' ? (
            <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
          ) : null}
          <span className={cn(
            'text-sm font-medium',
            changeType === 'positive' && 'text-green-600',
            changeType === 'negative' && 'text-red-600',
            changeType === 'neutral' && 'text-gray-600'
          )}>
            {change}
          </span>
          <span className="text-sm text-gray-500 ml-1">from last month</span>
        </div>
      )}
    </div>
  )
}
