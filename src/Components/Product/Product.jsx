import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { GrFormAdd } from 'react-icons/gr'
import { GrFormSubtract } from 'react-icons/gr'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Product = ({ product }) => {
  const cart = useContext(CartContext)

  const productQuantity = cart.getProductQuantity(product.id)

  return (
    <>
      <section className='flex justify-between rounded items-center bg-green-950 w-96 h-72 p-2 mb-36'>
        <section>
          <img src={product.img} alt="" className="w-auto" />
        </section>
        <section className="leading-10">
          <h2 className="text-xl mb-2">{product.title}</h2>
          <p className="text-base text-slate-200 mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, nulla!</p>
          <p>${product.price}</p>
          {productQuantity > 0 ? (
            <>
              <section className='flex justify-around items-center p-0'>
                <p>Quantity : {productQuantity}</p>
                <section className='flex justify-around bg-slate-900 p-2 text-xl cursor-pointer'>
                  <GrFormAdd onClick={() => cart.addItemToCart(product.id)} />
                  <GrFormSubtract onClick={() => cart.removeItemFromCart(product.id)} />
                </section>
              </section>
            </>
          ) : (
            <button className='bg-slate-900 px-4 rounded w-full' onClick={() => cart.addItemToCart(product.id)}>Add to cart</button>
          )}
        </section>
      </section>
    </>
  )
}

export default Product