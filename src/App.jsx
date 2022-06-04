import { AppBar, BottomNavigation, BottomNavigationAction, Box, CssBaseline, ThemeProvider, } from '@mui/material'
import { LightTheme } from './themes'
import { useState } from 'react'
import { AppRoutes } from './Routes'
import { useNavigate } from 'react-router-dom'
import { CartProvider } from './shared/contexts'

import HomeIcon from '@mui/icons-material/Home'
import ViewListIcon from '@mui/icons-material/ViewList'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

export const App = () => {
	const [value, setValue] = useState(0)
	const navigate = useNavigate()
	return (
		<CartProvider>


			<ThemeProvider theme={LightTheme}>


				<Box
					display={'flex'}
					flexDirection={'column'}
					height={'100vh'}
					margin={0}				
				>
					<Box
						height={'100%'}
						overflowY={'auto'}
					>
						<AppRoutes/>				
					</Box>
					<AppBar			
						sx={{
							display: {xs:'flex', md:'none'},
							top: 'auto', 
							bottom: 0
						}}
						position="fixed"
						flexDirection={'column'}
					>
						
						<BottomNavigation
							showLabels
							value={value}
							onChange={(event, newValue)=>setValue(newValue)}

						>
							<BottomNavigationAction onClick={()=>navigate('/')} label="Home" icon={<HomeIcon />}							/>
							<BottomNavigationAction onClick={()=>navigate('/categorias')} label="Categorias" icon={<ViewListIcon />} 		/>
							<BottomNavigationAction onClick={()=>navigate('/carrinho')} label="Carrinho" icon={<ShoppingCartIcon />} 		/>
							<BottomNavigationAction onClick={()=>navigate('/minha-conta')} label="Minha Conta" icon={<AccountCircleIcon />} />
						</BottomNavigation>	
					</AppBar>
	
				</Box>
				<CssBaseline/>

			</ThemeProvider>
		</CartProvider>
	)
}
