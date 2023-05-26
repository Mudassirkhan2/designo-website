
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Locations from './pages/Locations'
import ContactUs from './pages/ContactUs'
import WebDesign from './pages/WebDesign'
import AppDesign from './pages/AppDesign'
import GraphicDesign from './pages/GraphicDesign'
function App() {

  return (
    <div >
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/locations' element={<Locations />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/webDesign' element={<WebDesign />} />
          <Route path='/appDesign' element={<AppDesign />} />
          <Route path='/graphicDesign' element={<GraphicDesign />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  )
}

export default App
