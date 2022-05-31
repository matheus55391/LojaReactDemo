import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Profile } from './pages'

export const AppRoutes = () =>{
	return(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/profile" element={<Profile/>} />
			</Routes>
		</BrowserRouter>
	)
}