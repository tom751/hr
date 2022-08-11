import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '@/components/auth/Login'
import { RelayEnvironmentProvider } from 'react-relay'
import RelayEnvironment from '@/relay'
import { Suspense } from 'react'

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={null}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </RelayEnvironmentProvider>
  )
}

export default App
