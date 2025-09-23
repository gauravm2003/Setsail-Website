import { Outlet } from 'react-router-dom'
import Navbar from '../widgets/Navbar'
import Footer from '../widgets/Footer'

function LayoutWithNavbar() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer/>
        </>
    )
}

export default LayoutWithNavbar
