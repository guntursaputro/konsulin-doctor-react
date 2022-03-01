import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

type Props = {
  basename: string
}

const Home = lazy(() => import('views/Home'))

const App: React.FC<Props> = ({ basename }) => {
  return (
    <Suspense fallback={() => 'loading ....'}>
      <BrowserRouter basename={basename}>
        <div className='content' id='content'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
