import React from 'react'
import HomeContent from './Content/Content'
import MainNavbar from '../../components/Navbar/Navbar'
import MainFooter from '../../components/Footer/Footer'

const Home = () => {
    return(
        <>
        <MainNavbar />
        <HomeContent />
        <MainFooter />
        </>
    )
}
export default Home