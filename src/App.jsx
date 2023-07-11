import { } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Foot from './components/Foot'
import Construction from './pages/Construction'
import Equipment from './pages/Equipment'
import About from './pages/About'
import Leasing from './pages/Leasing'
import Contact from './pages/Contact'
import News from './pages/News'
import NewsInfo from './pages/NewsInfo'
import Technic from './pages/Technic'
import ScrollToTop from './components/ScrollToTop'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Construction />} path='/construction' />
          <Route element={<Equipment />} path='/equipment' />
          <Route element={<About />} path='/about' />
          <Route element={<Leasing />} path='/leasing' />
          <Route element={<Contact />} path='/contacts' />
          <Route element={<News />} path='/news' />
          <Route element={<NewsInfo />} path='/news-info/:id' />
          <Route element={<Technic />} path='/technic/:id' />
        </Routes>
        <Foot />
        <ScrollToTop />
      </BrowserRouter>
    </>
  )
}

export default App
