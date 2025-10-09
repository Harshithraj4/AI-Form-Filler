import { Link } from 'react-router-dom'
import { Menu, X, User, Bell, Settings } from 'lucide-react'
import { useState } from 'react'
import { Button } from './Button'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Dashboard', href: '/' },
    { name: 'AI Form Builder', href: '/ai-form-builder' },
    { name: 'Templates', href: '/templates' },
    { name: 'Analytics', href: '/analytics' },
    { name: 'Smart Forms', href: '/smart-forms' }
  ]

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-xl font-bold text-gray-900">FormBuilder</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <Link to="/settings">
              <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </Link>
            <Link to="/settings">
              <button className="flex items-center space-x-2 p-2 text-gray-600 hover:text-primary-600 transition-colors">
                <User className="w-5 h-5" />
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-primary-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/settings"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Settings
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}