
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Locations from './components/Locations'
import Footer from './components/Footer'
function App() {

  return (
    <div >
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/locations' element={<Locations />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  )
}

export default App
