import { Bell, X, CheckCircle, AlertTriangle, Info } from 'lucide-react'
import { Button } from '../../../components/ui/Button'

const notifications = [
  {
    id: 1,
    type: 'success',
    title: 'Form published successfully',
    message: 'Your "Customer Feedback" form is now live and accepting responses.',
    time: '5 minutes ago',
    unread: true
  },
  {
    id: 2,
    type: 'warning',
    title: 'Low response rate',
    message: 'Your "Event Registration" form has a lower than usual response rate.',
    time: '1 hour ago',
    unread: true
  },
  {
    id: 3,
    type: 'info',
    title: 'AI suggestion available',
    message: 'We have some suggestions to improve your form performance.',
    time: '3 hours ago',
    unread: false
  }
]

export function NotificationCenter() {
  const getNotificationIcon = (type) => {
    switch (type) {
      case 'success':
        return CheckCircle
      case 'warning':
        return AlertTriangle
      case 'info':
        return Info
      default:
        return Bell
    }
  }

  const getNotificationColor = (type) => {
    switch (type) {
      case 'success':
        return 'text-green-600 bg-green-100'
      case 'warning':
        return 'text-yellow-600 bg-yellow-100'
      case 'info':
        return 'text-blue-600 bg-blue-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
            {notifications.filter(n => n.unread).length} new
          </span>
        </div>
      </div>
      
      <div className="space-y-4">
        {notifications.map((notification) => {
          const IconComponent = getNotificationIcon(notification.type)
          const colorClasses = getNotificationColor(notification.type)
          
          return (
            <div
              key={notification.id}
              className={`p-3 rounded-lg border ${
                notification.unread 
                  ? 'bg-primary-50 border-primary-200' 
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${colorClasses}`}>
                  <IconComponent className="w-3 h-3" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {notification.title}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    {notification.time}
                  </p>
                </div>
                <Button variant="ghost" size="sm">
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )
        })}
      </div>
      
      <div className="mt-4 pt-4 border-t">
        <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
          View all notifications
        </button>
      </div>
    </div>
  )
}

