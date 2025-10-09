export function FormField() {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-medium text-gray-700">Field Label</label>
        <span className="text-xs text-gray-500">Required</span>
      </div>
      <input 
        type="text" 
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        placeholder="Enter value..."
      />
    </div>
  )
}

