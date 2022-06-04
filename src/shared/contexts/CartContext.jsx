import { createContext, useState } from 'react'

export const CartContext = createContext()

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
	// eslint-disable-next-line no-unused-vars
	const [products, setProducts] = useState([])
    
	const addProduct = () =>{
	}

	const removeProduct = () =>{}

	const value = {
		products,
		addProduct,
		removeProduct
	}

	return(
		<CartContext.Provider value={value}>
			{children}
		</CartContext.Provider>
	)
}