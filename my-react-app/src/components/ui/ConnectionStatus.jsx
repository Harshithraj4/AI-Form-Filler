import { useState, useEffect } from 'react'
import { Wifi, WifiOff, AlertCircle } from 'lucide-react'
import { cn } from '../../utils/cn'

export function ConnectionStatus() {
  const [status, setStatus] = useState('online')
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const handleOnline = () => {
      setStatus('online')
      setShowBanner(true)
      setTimeout(() => setShowBanner(false), 3000)
    }

    const handleOffline = () => {
      setStatus('offline')
      setShowBanner(true)
    }

    const handleSlowConnection = () => {
      setStatus('slow')
      setShowBanner(true)
      setTimeout(() => setShowBanner(false), 5000)
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    // Simulate slow connection detection
    const checkConnection = () => {
      const startTime = Date.now()
      fetch('/favicon.ico', { method: 'HEAD' })
        .then(() => {
          const duration = Date.now() - startTime
          if (duration > 3000) {
            handleSlowConnection()
          }
        })
        .catch(() => {
          handleOffline()
        })
    }

    const interval = setInterval(checkConnection, 30000)
    checkConnection()

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
      clearInterval(interval)
    }
  }, [])

  const getStatusConfig = () => {
    switch (status) {
      case 'online':
        return {
          icon: Wifi,
          text: 'Connected',
          className: 'bg-green-100 text-green-800 border-green-200',
          iconClassName: 'text-green-600'
        }
      case 'offline':
        return {
          icon: WifiOff,
          text: 'Offline',
          className: 'bg-red-100 text-red-800 border-red-200',
          iconClassName: 'text-red-600'
        }
      case 'slow':
        return {
          icon: AlertCircle,
          text: 'Slow Connection',
          className: 'bg-yellow-100 text-yellow-800 border-yellow-200',
          iconClassName: 'text-yellow-600'
        }
      default:
        return {
          icon: Wifi,
          text: 'Unknown',
          className: 'bg-gray-100 text-gray-800 border-gray-200',
          iconClassName: 'text-gray-600'
        }
    }
  }

  const config = getStatusConfig()
  const Icon = config.icon

  return (
    <>
      {/* Status Indicator */}
      <div className="flex items-center space-x-2">
        <div className={cn(
          'flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border',
          config.className
        )}>
          <Icon className={cn('w-3 h-3', config.iconClassName)} />
          <span>{config.text}</span>
        </div>
      </div>

      {/* Connection Banner */}
      {showBanner && (
        <div className={cn(
          'fixed top-4 right-4 z-50 max-w-sm',
          'animate-slide-up'
        )}>
          <div className={cn(
            'flex items-center space-x-3 p-4 rounded-lg shadow-lg border',
            config.className
          )}>
            <Icon className={cn('w-5 h-5', config.iconClassName)} />
            <div>
              <p className="font-medium">
                {status === 'online' && 'Connection Restored'}
                {status === 'offline' && 'Connection Lost'}
                {status === 'slow' && 'Slow Connection Detected'}
              </p>
              <p className="text-xs opacity-75">
                {status === 'online' && 'You are back online'}
                {status === 'offline' && 'Please check your internet connection'}
                {status === 'slow' && 'Your connection seems slow'}
              </p>
            </div>
            <button
              onClick={() => setShowBanner(false)}
              className="ml-2 opacity-50 hover:opacity-100"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  )
}
