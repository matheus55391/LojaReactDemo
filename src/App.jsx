import { BottomNavigation, BottomNavigationAction, Box, CssBaseline, ThemeProvider, } from '@mui/material'
import { LightTheme } from './themes'
import { useState } from 'react'
import { AppRoutes } from './Routes'

import HomeIcon from '@mui/icons-material/Home'
import ViewListIcon from '@mui/icons-material/ViewList'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'


export const App = () => {
	const [value, setValue] = useState(0)
	return (
		<ThemeProvider theme={LightTheme}>
			<Box
				display={'flex'}
				flexDirection={'column'}
				height={'100vh'}
				margin={0}				
			>
				<Box
					height={'100%'}
					bgcolor={'red'}
					overflowY={'auto'}
				>
					<AppRoutes/>				
				</Box>
				<Box
					mt={'auto'}
					display={{xs:'flex', md:'none'}}
					flexDirection={'column'}		
					
				>
					<BottomNavigation
						showLabels
						value={value}
						onChange={(event, newValue)=>setValue(newValue)}
						
					>
						<BottomNavigationAction label="Home" icon={<HomeIcon />} />
						<BottomNavigationAction label="Categorias" icon={<ViewListIcon />} />
						<BottomNavigationAction label="Carrinho" icon={<ShoppingCartIcon />} />
						<BottomNavigationAction label="Minha Conta" icon={<AccountCircleIcon />} />
					</BottomNavigation>	
				</Box>
	
			</Box>
			<CssBaseline/>
		</ThemeProvider>
	)
}
