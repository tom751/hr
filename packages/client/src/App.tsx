import Login from '@/components/auth/Login'
import Dashboard from '@/components/dashboard'
import ProtectedRoute from '@/components/ProtectedRoute'
import RelayEnvironment from '@/relay'
import { Suspense } from 'react'
import { loadQuery, RelayEnvironmentProvider } from 'react-relay'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRouteQueryDefault, { ProtectedRouteQuery } from '@/components/__generated__/ProtectedRouteQuery.graphql'

const initialQueryRef = loadQuery<ProtectedRouteQuery>(RelayEnvironment, ProtectedRouteQueryDefault, {})

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={null}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute queryRef={initialQueryRef} />}>
              <Route path="/" element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </RelayEnvironmentProvider>
  )
}

export default App
