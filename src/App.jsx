import React from 'react'
import './App.css'
import './index.css'

import { Route, Routes } from 'react-router-dom'
import Home from './app/pages/Home/Home'

function App() {


  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
