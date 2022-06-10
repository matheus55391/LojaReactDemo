import { AppBar, BottomNavigation, BottomNavigationAction } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import ViewListIcon from '@mui/icons-material/ViewList'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const BottomBar = () => { 
	const [value, setValue] = useState(0)
	const navigate = useNavigate()
	return (
		<AppBar			
			sx={{
				display: {xs:'flex', md:'none'},
				top: 'auto', 
				bottom: 0,
				flexDirection: 'column',
			}}
			position="fixed"
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
	)
}