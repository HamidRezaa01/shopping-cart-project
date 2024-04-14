
const productList = [
    {id: 2, title: 'Green Leafed Plant', price: 99.74, img: '/images/product.png'},
    {id: 3, title: 'Green Succulent', price: 98.94, img: '/images/product.png'},
    {id: 4, title: 'Swiss Cheese Plant', price: 99.74, img: '/images/product.png'},
]

const getProductData = (productID) => {
    let product = productList.find((item) => item.id === productID)

    return product
}

export { productList, getProductData }