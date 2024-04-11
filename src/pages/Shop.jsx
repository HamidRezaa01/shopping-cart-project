import Product from "../Components/Product/Product"
import { productList } from '../data/items'

const Shop = () => {
    return (
        <>
            <section className='container mx-auto flex text-white justify-around'>
              {productList.map((item) => (
                <section key={item.id}>
                    <Product product={item}/>
                </section>
            ))}
            </section>
        </>
    )
}

export default Shop