import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom'
import { Component, Register, HomeParent, Consulting, Profil } from 'views'
import { isLogin } from 'utils/auth'

type Props = {
  basename: string
}

const Home = lazy(() => import('views/Home'))

const App: React.FC<Props> = ({ basename }) => {
  const PrivateRoute = ({ wrapperContent = true }) => {
    if (isLogin()) {
      return <Navigate to='/' replace />
    }
    return wrapperContent ? (
      <div className='content' id='content'>
        <Outlet />
      </div>
    ) : (
      <Outlet />
    )
  }

  const ProtectedRoute = ({ wrapperContent = true }) => {
    if (isLogin()) {
      return <Navigate to='/home' replace />
    }
    return wrapperContent ? (
      <div className='content' id='content'>
        <Outlet />
      </div>
    ) : (
      <Outlet />
    )
  }

  return (
    <Suspense fallback={() => 'loading ....'}>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route element={<ProtectedRoute wrapperContent={false} />}>
            <Route path='/register' element={<Register />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route element={<HomeParent />}>
              <Route path='/home' element={<Home />} />
              <Route path='/profile' element={<Profil />} />
              <Route path='/consulting' element={<Consulting />} />
            </Route>
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path='/component' element={<Component />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
