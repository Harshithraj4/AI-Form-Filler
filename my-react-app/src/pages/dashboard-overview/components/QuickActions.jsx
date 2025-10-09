import { Plus, Zap, BarChart3, Layout, Bot } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../../../components/ui/Button'

const quickActions = [
  {
    title: 'Create New Form',
    description: 'Start building a new form from scratch',
    icon: Plus,
    href: '/form-builder',
    variant: 'primary'
  },
  {
    title: 'AI Form Builder',
    description: 'Let AI help you create forms',
    icon: Bot,
    href: '/smart-forms',
    variant: 'outline'
  },
  {
    title: 'View Analytics',
    description: 'Check form performance and insights',
    icon: BarChart3,
    href: '/analytics',
    variant: 'outline'
  },
  {
    title: 'Browse Templates',
    description: 'Choose from pre-built templates',
    icon: Layout,
    href: '/templates',
    variant: 'outline'
  }
]

export function QuickActions() {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quickActions.map((action, index) => (
          <Link key={index} to={action.href}>
            <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className={`
                    w-10 h-10 rounded-lg flex items-center justify-center
                    ${action.variant === 'primary' 
                      ? 'bg-primary-100 text-primary-600' 
                      : 'bg-gray-100 text-gray-600'
                    }
                  `}>
                    <action.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-900">
                    {action.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {action.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
