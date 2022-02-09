import React from 'react'
import MountContent from './content/content'
import MainNavbar from '../../components/Navbar/Navbar'
import MainFooter from '../../components/Footer/Footer'

const Mount = () => {
    return(
        <>
        <MainNavbar />
        <MountContent />
        <MainFooter />
        </>
    )
}
export default Mount