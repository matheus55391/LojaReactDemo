import { Button, CardActions, CardContent, Box } from '@mui/material'
import { CardProduto, NameProduct, PriceProduct } from './style'

export const CardProduct = () =>{
	return (
		<CardProduto>

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
					src="https://images.kabum.com.br/produtos/fotos/183080/headset-gamer-razer-blackshark-v2-x-surround-7-1-drivers-50mm-p3-verde-rz04-03240600-r3u1_1634388949_m.jpg"
					sx={{ height: '170px'}}
				/>
			</Box>
			<CardContent sx={{padding: '0px 16px 0px 16px'}}>
				<NameProduct >
					Headset Gamer Razer BlackShark V2 X,  Som Surround 7.1, P2, Drivers 50mm - RZ04-03240100-R3U1
				</NameProduct>
				<PriceProduct>
					R$ 289,90
				</PriceProduct>
			</CardContent>
			<CardActions sx={{marginTop: 'auto'}}>
				<Button variant='contained' fullWidth>COMPRAR</Button>
			</CardActions>
		</CardProduto>
	)
}