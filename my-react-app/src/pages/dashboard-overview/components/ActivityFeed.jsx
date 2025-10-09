import { Clock, User, Bot, Plus } from 'lucide-react'

const activities = [
  {
    id: 1,
    type: 'form_created',
    user: 'John Doe',
    action: 'created a new form',
    target: 'Customer Feedback Form',
    time: '2 hours ago',
    icon: Plus
  },
  {
    id: 2,
    type: 'ai_suggestion',
    user: 'AI Assistant',
    action: 'suggested improvements for',
    target: 'Event Registration',
    time: '4 hours ago',
    icon: Bot
  },
  {
    id: 3,
    type: 'response_received',
    user: 'Sarah Wilson',
    action: 'submitted a response to',
    target: 'Product Survey',
    time: '6 hours ago',
    icon: User
  },
  {
    id: 4,
    type: 'form_updated',
    user: 'Mike Johnson',
    action: 'updated',
    target: 'Contact Form',
    time: '1 day ago',
    icon: Plus
  }
]

export function ActivityFeed() {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'form_created':
        return Plus
      case 'ai_suggestion':
        return Bot
      case 'response_received':
        return User
      default:
        return Clock
    }
  }

  const getActivityColor = (type) => {
    switch (type) {
      case 'form_created':
        return 'text-blue-600 bg-blue-100'
      case 'ai_suggestion':
        return 'text-purple-600 bg-purple-100'
      case 'response_received':
        return 'text-green-600 bg-green-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
      
      <div className="space-y-4">
        {activities.map((activity) => {
          const IconComponent = getActivityIcon(activity.type)
          const colorClasses = getActivityColor(activity.type)
          
          return (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${colorClasses}`}>
                <IconComponent className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">
                  <span className="font-medium">{activity.user}</span>{' '}
                  {activity.action}{' '}
                  <span className="font-medium text-primary-600">
                    {activity.target}
                  </span>
                </p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          )
        })}
      </div>
      
      <div className="mt-4 pt-4 border-t">
        <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
          View all activity
        </button>
      </div>
    </div>
  )
}

