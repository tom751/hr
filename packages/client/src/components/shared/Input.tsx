import { ComponentProps, forwardRef } from 'react'

interface Props extends ComponentProps<'input'> {
  label: string
}

const Input = forwardRef<HTMLInputElement, Props>(function ({ label, ...props }, ref) {
  return (
    <>
      <label htmlFor={props.id} className="mb-2 block font-medium text-gray-700">
        {label}
      </label>
      <input
        className="mb-2 block w-full rounded-md border-gray-300 text-gray-700 focus:ring-1 focus:ring-indigo-600"
        ref={ref}
        {...props}
      />
    </>
  )
})

export default Input
