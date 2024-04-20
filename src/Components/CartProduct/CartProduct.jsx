import { getProductData } from '../../data/items'
import { useContext } from 'react'
import { CartContext } from '../../../src/context/CartContext'

const CartProduct = ({ id, quantity, image }) => {
    const productData = getProductData(id)

    const cart = useContext(CartContext)

    return (
        <>
            <section className='flex justify-between '>
                <section>
                    <p>Title :{productData.title}</p>
                    <p>Quantity : {quantity}</p>
                    <p>Price : {quantity * productData.price}</p>
                    <button onClick={() => cart.removeItemFromCart(id)}>Remove</button>
                </section>
                <section>
                    <img src={productData.img} alt="" className='w-12'/>
                </section>
            </section>
        </>
    )
}

export default CartProduct