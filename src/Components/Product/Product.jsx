

const Product = ({ product }) => {
    return ( 
        <>
          <section className='flex justify-between items-center bg-green-950 w-96 h-64 mt-10 mb-20 p-2'>
            <section>
                <img src={product.img} alt="" className="w-auto"/>
            </section>
            <section className="leading-10">
                <h2 className="text-xl">{product.title}</h2>
                <p className="text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, nulla!</p>
                <p>${product.price}</p>
                <button className='bg-slate-900 px-4'>Add to cart</button>
            </section>
          </section>
        </>
    )
}

export default Product