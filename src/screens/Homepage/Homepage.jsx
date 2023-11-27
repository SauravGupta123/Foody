import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/footer'
import './Homepage.css'
import Cards from '../../components/Cards'
import Carausal from '../../components/Carausal'


function Homepage() {
  return (
    <div>
    

      <Navbar />
      <div className='Carausal'>
          <Carausal/>
      </div>


      <div className="cards">
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      </div>
     
      
    
      <Footer />
    </div>
  )
}

export default Homepage
