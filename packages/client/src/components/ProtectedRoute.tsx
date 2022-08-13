import useUserStore from '@/stores/user'
import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import AppShell from './layout/AppShell'
import { ProtectedRouteQuery } from './__generated__/ProtectedRouteQuery.graphql'

interface Props {
  queryRef: PreloadedQuery<ProtectedRouteQuery, {}>
}

export default function ProtectedRoute({ queryRef }: Props) {
  const location = useLocation()
  const user = useUserStore((state) => state.user)
  const setUser = useUserStore((state) => state.setUser)
  const data = usePreloadedQuery<ProtectedRouteQuery>(
    graphql`
      query ProtectedRouteQuery {
        me {
          id
          email
          fullName
        }
      }
    `,
    queryRef
  )

  if (!user && data.me) {
    setUser(data.me)
  }

  if (!user && !data.me) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return (
    <AppShell>
      <Outlet />
    </AppShell>
  )
}
