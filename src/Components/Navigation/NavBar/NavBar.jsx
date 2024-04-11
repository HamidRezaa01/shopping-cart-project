import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsCartPlus } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import headerImageOne from '../../../assets/images/image1.webp'
import headerImageTwo from '../../../assets/images/image2.webp'

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
        <>
            <section className='container mx-auto flex justify-center items-center mt-4 p-4'>
                <h3 className='text-white w-full text-3xl font-bold'>LOGO</h3>

                <ul className='hidden md:flex mr-20'>
                    {navItems.map((item) => (
                        <li className='text-white mr-6' key={item.id}><a href='#'>{item.navItem}</a></li>
                    ))}
                </ul>

                <span className='bg-green-800 flex hidden md:flex px-4 rounded justify-center items-center'>
                    <BsCartPlus className='text-white' />
                    <a className='p-2 text-white inline' href="#">Shopping</a>
                </span>

                <section onClick={handlerNav} className='block md:hidden text-white'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </section>

                <ul className={
                    nav ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-blue-950 ease-in-out duration-300'
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

            <section className='flex flex-col md:flex-row justify-around container mx-auto text-white mt-40'>
                <section>
                    <h1 className='font-bold text-5xl mb-10'>Make a beutiful garden With<br /> your Own hand</h1>
                    <p className='text-base mb-10'>Find your dreams plant for your home<br />decoration with us and we will make it happen</p>
                    <section>
                        <button className='flex justify-center rounded items-center border border-green-800 px-4 py-4 '>
                            <GoArrowRight className='mr-2' />
                            Explore more
                        </button>
                    </section>
                </section>
                <section className='flex flex-col md:flex-row gap-4'>
                    <img src={headerImageOne} alt="" className='w-full md:w-72'/>
                    <img src={headerImageTwo} alt="" className='w-full md:w-72 md:mt-20'/>
                </section>
            </section>
        </>
    )
}

export default NavBar