import { forwardRef } from 'react'
import { Check } from 'lucide-react'
import { cn } from '../../utils/cn'

const Checkbox = forwardRef(({ 
  className, 
  checked, 
  onChange,
  label,
  ...props 
}, ref) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={onChange}
          ref={ref}
          {...props}
        />
        <div
          className={cn(
            'w-4 h-4 border-2 rounded flex items-center justify-center transition-colors',
            checked
              ? 'bg-primary-600 border-primary-600'
              : 'border-gray-300 hover:border-primary-400',
            className
          )}
        >
          {checked && (
            <Check className="w-3 h-3 text-white" />
          )}
        </div>
      </div>
      {label && (
        <span className="text-sm text-gray-700">{label}</span>
      )}
    </label>
  )
})

Checkbox.displayName = 'Checkbox'

export { Checkbox }

