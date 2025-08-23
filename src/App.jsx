import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import DetailsPage from './pages/DetailsPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:id" element={<DetailsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App