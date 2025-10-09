import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

const Button = forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children, 
  ...props 
}, ref) => {
  return (
    <button
      className={cn(
        'btn',
        {
          'btn-primary': variant === 'primary',
          'btn-secondary': variant === 'secondary',
          'btn-outline': variant === 'outline',
          'btn-ghost': variant === 'ghost',
        },
        {
          'btn-sm': size === 'sm',
          'btn-md': size === 'md',
          'btn-lg': size === 'lg',
        },
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export { Button }

