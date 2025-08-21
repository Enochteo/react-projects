import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './routes/Layout.jsx'
import DetailView from './routes/DetailView.jsx'
import NotFound from './routes/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<App />}/>
          <Route path='coin/:symbol' element={<DetailView />} />
          <Route path='*' element={ <NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
