import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsCartPlus } from "react-icons/bs";

const NavBar = () => {
    const [nav, setNav] = useState(false)

    const navItems = [
        { id: 1, navItem: 'Home' },
        { id: 2, navItem: 'Catalog' },
        { id: 3, navItem: 'Contact' },
        { id: 4, navItem: 'About' },
    ]



    return (
        <section className='container mx-auto flex justify-center items-center mt-4'>
            <h3 className='text-white w-full text-3xl font-bold'>LOGO</h3>

            <ul className='hidden md:flex mr-20'>
                {navItems.map((item) => (
                    <li className='text-white mr-6' key={item.id}><a href='#'>{item.navItem}</a></li>
                ))}
            </ul>

            <span className='flex hidden md:flex border justify-center items-center'>
                <BsCartPlus className='text-white'/>
                <a className='p-2 text-white inline' href="#">Shopping</a>
            </span>

            





        </section>
    )
}

export default NavBar