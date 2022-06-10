import { Grid,Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { CardProduct} from '../../shared/components'

export const Home = () =>{

	const [isLoading, setIsLoading] = useState(true)
	const [products, setProducts] = useState([])


	useEffect(()=>{

		setIsLoading(true)
		console.log(isLoading) // TODO apagar isso 
		// axios.get('http://localhost:5000/api/Produto')
		// 	.then(res => {			
		// 		console.log(products)	 
		// 		setProducts(res.data.registros)
		// 	})

		setProducts([
			{
				id: 1,
				nomeProduto: 'Batata Frita',
				valorProduto : 500,
				img : 'https://static.clubedaanamariabraga.com.br/wp-content/uploads/2019/02/batata-frita-sequinha-crocante.jpeg'
			},
			{
				id: 2,
				nomeProduto: 'Farofa Yoki',
				valorProduto : 600,
				img : 'https://m.media-amazon.com/images/I/71Dw-oR8QqL._AC_SL1200_.jpg'
			},
			{
				id: 3,
				nomeProduto: 'Churros',
				valorProduto : 2000,
				img : 'https://s2.glbimg.com/luPLcMoKXotgr4_bOjNJxCVx5nE=/0x0:1280x854/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/m/Q/KCBlZhQymOGvuIsqKaeg/churros-caseiro.jpeg'
			},

		])
		setIsLoading(false)
	}, [])


	const xs = 12
	const md = 3
	
	return (
		<Box
			
		>
			<Grid container spacing={2}  >

				{
					products.map((product, key)=>{
						console.log(product)
						return(
							<Grid item xs={xs} md={md} 
								key={key}
							>
								<CardProduct
									id={product.id}
									name={product.nomeProduto}
									img={product.img}
									value={product.valorProduto} 
								/>
							</Grid>
						)
					})
				}
			</Grid>
		</Box>


	)
}