import { ComponentProps, forwardRef } from 'react'

interface Props extends ComponentProps<'input'> {
  label: string
}

const Input = forwardRef<HTMLInputElement, Props>(function Input({ label, ...props }, ref) {
  return (
    <>
      <label htmlFor={props.id} className="mb-2 block font-medium text-gray-700 dark:text-gray-50">
        {label}
      </label>
      <input
        className="mb-2 block w-full rounded-md border-gray-300 text-gray-700 focus:border-indigo-600 focus:outline-none focus:ring-0 dark:border-gray-500 dark:bg-transparent dark:text-gray-50 dark:focus:border-indigo-500"
        ref={ref}
        {...props}
      />
    </>
  )
})

export default Input
