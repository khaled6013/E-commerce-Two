import React from 'react'
import Navbar from '../components/Navbar'
import NavIn from '../components/NavIn'
import Banner from '../components/Banner'
import Retrun from '../components/Retrun'
import Add from '../components/Add'
import Arrivals from '../components/Arrivals'

const Home = () => {
  return (
    <>
     <Navbar></Navbar>
     <NavIn></NavIn>
     <Banner></Banner>
     <Retrun></Retrun>
     <Add></Add>
     
    </>
  )
}

export default Home