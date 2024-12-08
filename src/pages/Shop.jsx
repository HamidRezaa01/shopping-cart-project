import Product from "../Components/Product/Product"
import { productList } from '../data/items'

const Shop = () => {

    return (
        <>
            <section className='flex justify-center items-center flex-col md:flex-row container mx-auto flex text-white justify-center gap-4'>
                {productList.map((item) => (
                    <section key={item.id}>
                        <Product product={item} />
                    </section>
                ))}
            </section>
        </>
    )
}

export default Shop