import { useState, useContext, lazy, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import { RequireAuth} from './contexts/AuthContext'
import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/signup'
// import Collections from './pages/collections'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'

const Collections = lazy(()=>import('./pages/collections'))

const Loading = () =><h1>Loading</h1>


const queryClient = new QueryClient()

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
   <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/collections' element={
        <RequireAuth>
          <Suspense fallback={<Loading />} >
            <Collections />
          </Suspense>
        </RequireAuth>
      } />

    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<SignUp />} />
   </Routes>
   </QueryClientProvider>
  )
}

export default App
