import { Box, Button, Typography, useTheme } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../shared/services/api'
import ShoppingCartIcon  from '@mui/icons-material/ShoppingCart'
export const Product = () =>{
	let { id } = useParams()
	const [product, setProduct] = useState({})

	useEffect(()=>{
		
		api.get('/Product/' + id)
			.then((res) =>{
				console.log(res.data)
				setProduct(res.data)
			})
			.catch((err) =>{
				console.log('error!!'+ err) 
			})

	},[])
	const theme = useTheme()
	return (

		<Box  
			
			sx={{ 
				bgcolor: '#fff',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				margin: {xs:'5px', md:'10px 50px'},
				borderRadius: {md:'5px'}
				
		
			}} 
		
		>
			<Box
				width="100%"
				p='10px'
				display={{xs:'flex', md:'none'}}
				flexDirection="column"
			>
				<Typography 
					variant="subtitle1"
					component="div"
					sx={{color: 'gray', fontSize: 13}}
				>Código: {product.productId}</Typography>
				<Typography
					variant="h5" 
					component="div"
					sx={{fontWeight: 'bold'}}
				>{product.title}</Typography>
			</Box>


			<Box
				sx={{display: 'flex', flexDirection: {xs:'column', md:'row'}}}
				width="100%"
			>
				<Box

					width={{xs:'100%', md:'50%'}}
					sx={{display: 'flex', flexDirection: 'column'}}
					alignItems='center'
				>
					<Box
						component="img"				
						src={'https://images.kabum.com.br/produtos/fotos/164854/placa-de-video-asus-nvidia-dual-rtx-3060-o12g-v2-15-gbps-12gb-gddr6-ray-tracing-dlss-90yv0gb2-m0na10_1623244899_gg.jpg'}
						sx={{ height: {xs:'25em', md:'400px'}}}
					
					/>
				</Box>

				<Box
					width={{xs:'100%', md:'50%'}}
					display="flex"
					flexDirection="column"
					padding='10px'
				>
					<Box

						display={{xs:'none', md:'flex'}}
						flexDirection="column"
						pt={4}
					>

						<Typography
							variant="h6" 
							component="div"
						>{product.title}</Typography>
					</Box>
					{/* Desconto */}
					<Box
						sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '10px 0px 10px 0px'}}
					>
						
						<Typography
							variant="h7"
							color={'gray'}
							sx={{marginRight: 1}}
						>De: </Typography>
						<Typography
							variant="h7"
							color={'gray'}
							sx={{textDecoration: 'line-through'}}
						>R$ { product.value}</Typography>
					</Box>
					{/* Valor */}
					<Box
						sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '10px 0px 10px 0px'}}
					
					>
						<Typography
							variant="h5"
							sx={{marginRight: 1, fontWeight: 'bold'}}
						>Por: </Typography>
						<Typography
							variant="h5"
							color={theme.palette.primary.main}  
							sx={{fontWeight: 'bold'}}
						>R$ { product.valueWithDiscount}</Typography>
						
					</Box>
					<Box sx={{display: 'flex', flexDirection: {xs: 'column', md:'row'}, alignItems: {xs: 'left', md:'center'}}}  >
						<Button sx={{maxWidth: {md:'200px'}, margin:{md:'10px'}, marginLeft: {md:'0px'}, marginBottom: {xs:'15px'}, height:'50px'}}  variant="contained" fullWidth>COMPRAR</Button>
						<Button startIcon={<ShoppingCartIcon/>} sx={{maxWidth: {md:'250px'}, margin:{md:'10px'},  height:'50px'}}  variant="contained" fullWidth>ADICIONAR AO CARRINHO</Button>
					</Box>

				</Box>

			</Box>
			
			<Box>
				<Box>
						Calcular Frete
				</Box>
				<Typography sx={{fontWeight: 'bold'}}>DESCRIÇÃO DO PRODUTO</Typography>
				<Typography>
						Produto muito foda
				</Typography>
			</Box>

			{/* 
			<Box
				sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '10px 0px 10px 0px'}}
			>
				<Typography
					variant="h7"
					color={'gray'}
					sx={{marginRight: 1}}
				>De: </Typography>
				<Typography
					variant="h7"
					color={'gray'}
					sx={{textDecoration: 'line-through'}}
				>R$ { product.value}</Typography>
			</Box>

			<Box
				sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '10px 0px 10px 0px'}}
			>
				<Typography
					variant="h5"
					sx={{marginRight: 1, fontWeight: 'bold'}}
				>Por: </Typography>
				<Typography
					variant="h5"
					color={theme.palette.primary.main}  
					sx={{fontWeight: 'bold'}}
				>R$ { product.valueWithDiscount}</Typography>
			</Box> */}



		</Box>

	)
}