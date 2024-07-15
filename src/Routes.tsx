import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Rules from './Pages/Rules'

export default function RoutesContainer() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/rules' element={<Rules />} />
    </Routes>
  )
}
