import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Main from './pages/main/index.jsx'
import Character from './pages/character/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/:page' element={<Main />} />
        <Route path='/character/:characterId' element={<Character />} />
        <Route path='*' element={<Navigate to={'/1'} />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
