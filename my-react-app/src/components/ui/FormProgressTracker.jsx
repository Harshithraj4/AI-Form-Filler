import { CheckCircle, Circle, Clock } from 'lucide-react'
import { cn } from '../../utils/cn'

export function FormProgressTracker({ 
  steps = [], 
  currentStep = 0, 
  orientation = 'horizontal' 
}) {
  const getStepStatus = (index) => {
    if (index < currentStep) return 'completed'
    if (index === currentStep) return 'current'
    return 'upcoming'
  }

  const getStepIcon = (index, status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'current':
        return <Circle className="w-5 h-5 text-blue-600" />
      default:
        return <Circle className="w-5 h-5 text-gray-300" />
    }
  }

  if (orientation === 'vertical') {
    return (
      <div className="space-y-4">
        {steps.map((step, index) => {
          const status = getStepStatus(index)
          return (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                {getStepIcon(index, status)}
              </div>
              <div className="min-w-0 flex-1">
                <div className={cn(
                  'text-sm font-medium',
                  status === 'completed' && 'text-green-600',
                  status === 'current' && 'text-blue-600',
                  status === 'upcoming' && 'text-gray-500'
                )}>
                  {step.title}
                </div>
                {step.description && (
                  <div className="text-xs text-gray-500 mt-1">
                    {step.description}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <nav aria-label="Progress">
      <ol className="flex items-center justify-between">
        {steps.map((step, index) => {
          const status = getStepStatus(index)
          const isLast = index === steps.length - 1

          return (
            <li key={index} className="relative flex-1">
              <div className="flex items-center">
                {/* Step */}
                <div className={cn(
                  'flex items-center justify-center w-8 h-8 rounded-full border-2',
                  status === 'completed' && 'bg-green-600 border-green-600',
                  status === 'current' && 'bg-blue-600 border-blue-600',
                  status === 'upcoming' && 'bg-white border-gray-300'
                )}>
                  {status === 'completed' ? (
                    <CheckCircle className="w-5 h-5 text-white" />
                  ) : (
                    <span className={cn(
                      'text-sm font-medium',
                      status === 'current' && 'text-white',
                      status === 'upcoming' && 'text-gray-500'
                    )}>
                      {index + 1}
                    </span>
                  )}
                </div>

                {/* Connector Line */}
                {!isLast && (
                  <div className={cn(
                    'flex-1 h-0.5 mx-4',
                    index < currentStep ? 'bg-green-600' : 'bg-gray-300'
                  )} />
                )}
              </div>

              {/* Step Info */}
              <div className="mt-2 text-center">
                <div className={cn(
                  'text-sm font-medium',
                  status === 'completed' && 'text-green-600',
                  status === 'current' && 'text-blue-600',
                  status === 'upcoming' && 'text-gray-500'
                )}>
                  {step.title}
                </div>
                {step.description && (
                  <div className="text-xs text-gray-500 mt-1">
                    {step.description}
                  </div>
                )}
              </div>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
