import { useEffect, useState } from 'react'
import Footer from '../Components/Base/Footer'
import Header from '../Components/Base/Header'
import Drawer from '../Components/Base/Drawer'
import { Link, useLocation } from 'react-router-dom'

export default function Base(props) {

    //init statee
    const [isOpen, setIsOpen] = useState(false)

    const location = useLocation()

    //items for the menu
    const menuItems = [
        { title: 'Home', href: '/', active: location.pathname === '/' ? true : false },
        { title: 'Blogs', href: '/blogs', active: location.pathname === '/login' ? true : false },
    ]

    useEffect(() => {
        window.document.title = props.pageTitle || 'Page Not Found'
    }, [])

    //handles the menu opening 
    const handleMenu = async () => {
        setIsOpen(true)
    }

    return (
        <>
            {/* Header Componenet */}
            <Header
                pageTitle={props.pageTitle}
                setMenu={handleMenu}

            />
            {props.children}
            {/* Footer Component */}
            <Footer />
            {/* Drawer Component */}
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>

                {
                    menuItems.map((item) => {
                        return (
                            <Link key={item.href} to={item.href} className={`text-xl ml-2 ${item.active ? 'font-semibold' : ''}`}>
                                {item.title}
                            </Link>
                        )
                    })
                }

            </Drawer>
        </>

    )
}