import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// Import Pages Here
import Home from '../pages/Home/Home'
import Mount from '../pages/Mount/Mount'
import Contact from '../pages/Contact/contact'
import Design from '../pages/Design/design'

// Content
const MainNavigation = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/mount' element={<Mount />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/8AEF9uX6FKMrBhiFqUEN' element={<Design />} />
            </Routes>
        </Router>
    )
}
export default MainNavigation