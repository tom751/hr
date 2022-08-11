import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { graphql, useLazyLoadQuery } from 'react-relay'
import { object, string } from 'zod'
import { LoginUsersQuery } from './__generated__/LoginUsersQuery.graphql'

const schema = object({
  email: string().email().min(1).trim(),
  password: string().min(1),
}).required()

interface LoginForm {
  email: string
  password: string
}

export default function Login() {
  const data = useLazyLoadQuery<LoginUsersQuery>(
    graphql`
      query LoginUsersQuery {
        users {
          fullName
        }
      }
    `,
    {}
  )
  const { register, handleSubmit } = useForm<LoginForm>({ resolver: zodResolver(schema) })
  console.log(data)

  function submit(params: LoginForm) {
    console.log(params)
  }

  return (
    <div className="min-h-screen bg-gray-100 bg-cover bg-bottom bg-repeat-x pt-72">
      <div className="m-auto mb-10 max-w-lg text-center">
        <h1 className="text-4xl font-semibold text-gray-700">
          <span className="text-indigo-600">Sign in</span> to your account
        </h1>
        {data.users.map((u) => (
          <p>{u.fullName}</p>
        ))}
      </div>
      <div className="m-auto max-w-lg rounded-lg bg-white p-12 shadow-lg">
        <form onSubmit={handleSubmit(submit)}>
          <Input label="Email address" type="email" {...register('email')} />
          <Input label="Password" type="password" {...register('password')} />
          <Button className="mt-4 w-full" type="submit">
            Sign in
          </Button>
        </form>
      </div>
    </div>
  )
}
