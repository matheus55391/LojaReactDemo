import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
	// eslint-disable-next-line no-unused-vars
	const [products, setProducts] = useState([])
    
	const addProduct = (productId) =>{

		const index = products.findIndex(product => product.productId === productId)
		if(index >= 0){
			let productsNew = products
			productsNew[index].amountInCart += 1
			setProducts(productsNew)
		}else{
			const newProduct = { productId: productId, amountInCart: 1 }
			setProducts([...products, newProduct])
		}
	}

	const removeProduct = () =>{}

	const value = {
		products,
		addProduct,
		removeProduct
	}

	useEffect(() =>{
		console.log(products)
	})
	return(
		<CartContext.Provider value={value}>
			{children}
		</CartContext.Provider>
	)
}