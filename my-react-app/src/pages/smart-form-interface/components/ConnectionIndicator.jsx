import { Wifi, WifiOff } from 'lucide-react'

export function ConnectionIndicator() {
  const isConnected = true // This would be dynamic in a real app

  return (
    <div className="flex items-center space-x-2">
      <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm ${
        isConnected 
          ? 'bg-green-100 text-green-800' 
          : 'bg-red-100 text-red-800'
      }`}>
        {isConnected ? (
          <Wifi className="w-4 h-4" />
        ) : (
          <WifiOff className="w-4 h-4" />
        )}
        <span>{isConnected ? 'Connected' : 'Disconnected'}</span>
      </div>
    </div>
  )
}
