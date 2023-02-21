import React from "react"
import GlobalStyles from 'styles/GlobalStyles'
import MainPage from "pages/MainPage"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function App() {

  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </>
  )
}










