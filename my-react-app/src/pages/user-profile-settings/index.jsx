import { Header } from '../../components/ui/Header'
import { AIPreferencesSection } from './components/AIPreferencesSection'
import { AppearanceSection } from './components/AppearanceSection'
import { NotificationSection } from './components/NotificationSection'
import { ProfileSection } from './components/ProfileSection'
import { SecuritySection } from './components/SecuritySection'

function UserProfileSettings() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Profile & Settings</h1>
          <p className="text-gray-600 mt-2">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="space-y-8">
          {/* Profile Section */}
          <ProfileSection />

          {/* AI Preferences */}
          <AIPreferencesSection />

          {/* Appearance Settings */}
          <AppearanceSection />

          {/* Notifications */}
          <NotificationSection />

          {/* Security */}
          <SecuritySection />
        </div>
      </main>
    </div>
  )
}

export default UserProfileSettings
