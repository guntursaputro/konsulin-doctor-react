import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom'
import {
  Component,
  Login,
  HomeParent,
  ConsultingDetail,
  PasswordInput,
  VerifyOtp,
  PasswordReset,
  PersonalInfo,
  Faq,
  PrivacyPolicy,
  Help,
  ProfileChange,
  ConsultingSessionParent,
  SetScheduleParent,
  AddRecommendation,
  ChangeRecommendation,
} from 'views'
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
            <Route path='/login' element={<Login />} />
            <Route path='/password-input' element={<PasswordInput />} />
            <Route path='/verify-otp' element={<VerifyOtp />} />
            <Route path='/password-reset' element={<PasswordReset />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route element={<HomeParent />}>
              <Route path='/home' />
              <Route path='/consulting/:type' />
              <Route path='/profile' />
            </Route>
            <Route
              path='/consulting/detail/:name'
              element={<ConsultingDetail />}
            />
            <Route path='/personal-info' element={<PersonalInfo />} />
            <Route path='/profile-change' element={<ProfileChange />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/help' element={<Help />} />
            <Route path='/add-recommendation' element={<AddRecommendation />} />
            <Route
              path='/change-recommendation'
              element={<ChangeRecommendation />}
            />
            <Route element={<SetScheduleParent />}>
              <Route path='/schedule/:type' />
            </Route>
            <Route element={<ConsultingSessionParent />}>
              <Route path='/consulting-sesion/:type' />
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
