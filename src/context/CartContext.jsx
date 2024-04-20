import { createContext } from 'react';
import { useState } from 'react';
import { getProductData } from '../data/items';

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addItemToCart: () => {},
    deleteFromCart: () => {},
    removeItemFromCart: () => {},
    getTotalAmount: () => {}
})


export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([])

    const getProductQuantity = (id) => {
        const quantity = cartProducts.find((item) => item.id === id)?.quantity

        if (quantity === undefined) {
            return 0
        }

        return quantity
    }

    const addItemToCart = (id) => {
        const quantity = getProductQuantity(id)

        if (quantity === 0) {
            setCartProducts([...cartProducts, { id: id, quantity: 1 }])
        } else {
            setCartProducts(
                cartProducts.map((item) => (
                    item.id === id ? { ...item, quantity: quantity + 1 } : item
                ))
            )
        }
    }

    const deleteFromCart = (id) => {
        setCartProducts((cartProducts) => {
            cartProducts.filter((item) => {
                return item.id != id
            })
        })
    }

    const removeItemFromCart = (id) => {
        const quantity = getProductQuantity(id)

        if (quantity === 1) {
            deleteFromCart(id)
        } else {
            setCartProducts(
                cartProducts.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        }
    }

    const getTotalAmount = () => {
        let totalAmount = 0

        cartProducts.map((item) => {
            const productData = getProductData(item.id)

            totalAmount += Math.floor(productData.price) * item.quantity
        })

        return totalAmount
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addItemToCart,
        removeItemFromCart,
        deleteFromCart,
        getTotalAmount,
    }

    return (
        <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
    )
}



