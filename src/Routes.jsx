import { Route, Routes } from 'react-router-dom'
import { Account, Cart, Home, Categories, NotFound, } from './pages'

export const AppRoutes = () =>{
	return(
		
		<Routes>
			<Route path="/" element={<Home/>} />
			<Route path="/categorias" element={<Categories/>} />
			<Route path="/carrinho" element={<Cart/>} />
			<Route path="/minha-conta" element={<Account/>} />

			<Route path="*" element={<NotFound/>} />
		</Routes>

	)
}