import { useContext } from 'react'
import { CartContext } from '../contexts'

export const useCart = () =>{
	const {	products, addProduct, removeProduct } = useContext(CartContext)
	return {products, addProduct, removeProduct }
}