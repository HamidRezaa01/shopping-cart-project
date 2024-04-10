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

    const handlerNav = () => {
        setNav(!nav)
    }


    return (
        <section className='container mx-auto flex justify-center items-center mt-4'>
            <h3 className='text-white w-full text-3xl font-bold'>LOGO</h3>

            <ul className='hidden md:flex mr-20'>
                {navItems.map((item) => (
                    <li className='text-white mr-6' key={item.id}><a href='#'>{item.navItem}</a></li>
                ))}
            </ul>

            <span className='bg-green-900 flex hidden md:flex px-4 rounded justify-center items-center'>
                <BsCartPlus className='text-white' />
                <a className='p-2 text-white inline' href="#">Shopping</a>
            </span>

            <section onClick={handlerNav} className='block md:hidden text-white'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </section>

            <ul className={
                nav ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-blue-950 ease-in-out duration-500'
                    : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
            }>
                <section>
                    <h3 className='text-white w-full text-3xl font-bold p-2'>LOGO</h3>
                    {navItems.map((item) => (
                        <li className=' p-4 border-b rounded-xl duration-300 text-white' key={item.id}>{item.navItem}</li>
                    ))}
                    <span className='w-full flex bg-green-900 curser-pointer justify-center p-4 items-center'>
                        <BsCartPlus className='text-white' />
                        <a className='text-white inline ml-2' href="#">Shopping</a>
                    </span>
                </section>
            </ul>
        </section>
    )
}

export default NavBar