

import './App.css'
import Home from './Pages/home/Home'
import About from "./Pages/about/About"
import Whyus from './Pages/whyus/Whyus'
import Events from './Pages/events/Events'
import Contactus from "./Pages/contactus/Contactus"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Special from './Pages/specials/Special'
import Bookatable from "./Pages/bookatable/Bookatable"
import Gallery from './Pages/gallery/Gallery'

// import Specials from './Pages/specials/Specials'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  

  return (
    <>
    {/* <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/events" component={Events} />
          <Route path="/whyus" component={Whyus} />
          <Route path="/contact-us" component={Contactus} />
        </Switch>
      </div>
    </Router> */}
    
     {/* <Router>
     <Navbar />
      
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact-us' element={<Contactus/>} />
        <Route path='/whyus' element={<Whyus/>} />
        <Route path='/events' element={<Events/>} />
        </Routes>

      
    </Router> */}
   
     
     <Home/>
     <About/>
     
     <Whyus/>
     <Events/>
     <Special/>
     <Gallery/>
     <Bookatable/>
     <Contactus/>
     <Footer/>
     
     
     
     

     
     
    </>
  )
}

export default App
