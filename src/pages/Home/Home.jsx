import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import RelatedDeals from '../../components/RelatedDeals/RelatedDeals'
import Main from '../../components/Main/Main'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Main/>
        <RelatedDeals/>
        <Footer/>
    </div>
  )
}

export default Home;