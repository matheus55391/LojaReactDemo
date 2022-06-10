import { Button, CardActions, CardContent, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { CardProduto, NameProduct, PriceProduct } from './style'

export const CardProduct = (props) =>{
	const navigate = useNavigate()
	const NavToProductPage = () =>{
		console.log(props.id)
		navigate('/produto/' + props.id)
	}
	
	return (
		<CardProduto
			sx={{
				maxWidth: { xs: '100%', md: '300px'},
				margin: { xs: '10px'}
			}}
		>

			<Box
				sx={{
					display: 'flex', 
					alignItems: 'center',
					justifyContent: 'center',
					minHeight: '170px',				
					maxHeight: '170px',
					marginTop: 1
				}}
			>
				<Box
					component="img"				
					src={props.img}
					sx={{ height: '170px'}}
				/>
			</Box>
			<CardContent sx={{padding: '0px 16px 0px 16px'}}>
				<NameProduct onClick={NavToProductPage} >
					{props.name}
				</NameProduct>
				<PriceProduct>
					R$ {props.value}
				</PriceProduct>
			</CardContent>
			<CardActions sx={{marginTop: 'auto'}}>
				<Button variant='contained' fullWidth>COMPRAR</Button>
			</CardActions>
		</CardProduto>
	)
}