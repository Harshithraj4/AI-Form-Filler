import { forwardRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../utils/cn'

const Select = forwardRef(({ 
  className, 
  children, 
  placeholder = "Select an option...",
  ...props 
}, ref) => {
  return (
    <div className="relative">
      <select
        className={cn(
          'input pr-10 appearance-none cursor-pointer',
          className
        )}
        ref={ref}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {children}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
    </div>
  )
})

Select.displayName = 'Select'

export { Select }

