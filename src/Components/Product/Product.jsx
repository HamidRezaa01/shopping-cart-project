

const Product = ({ product }) => {
    return ( 
        <>
          <section className='flex justify-between rounded items-center bg-green-950 w-96 h-64 mt-14 mb-20 p-2'>
            <section>
                <img src={product.img} alt="" className="w-auto"/>
            </section>
            <section className="leading-10">
                <h2 className="text-xl mb-2">{product.title}</h2>
                <p className="text-base mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, nulla!</p>
                <p>${product.price}</p>
                <button className='bg-slate-900 px-4 rounded'>Add to cart</button>
            </section>
          </section>
        </>
    )
}

export default Product