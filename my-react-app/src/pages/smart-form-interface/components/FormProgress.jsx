import { FormProgressTracker } from '../../../components/ui/FormProgressTracker'

export function FormProgress() {
  const steps = [
    { title: 'Basic Info', description: 'Form details' },
    { title: 'Fields', description: 'Add form fields' },
    { title: 'Validation', description: 'Set rules' },
    { title: 'Styling', description: 'Customize appearance' }
  ]

  return (
    <div>
      <FormProgressTracker steps={steps} currentStep={1} />
    </div>
  )
}
