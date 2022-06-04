import { Grid,Box } from '@mui/material'
import { CardProduct} from '../../shared/components'
export const Home = () =>{

	//const [isLoading, setIsLoading] = useState()
	const xs = 12
	const md = 3

	return (
		<Box
			sx={{backgroundColor:'red'}}
		>
			<Grid container spacing={2} >
				<Grid item xs={xs} md={md}>
					<CardProduct/>
				</Grid>
				<Grid item xs={xs} md={md}>
					<CardProduct/>
				</Grid>
				<Grid item xs={xs} md={md}>
					<CardProduct/>
				</Grid>
				<Grid item xs={xs} md={md}>
					<CardProduct/>
				</Grid>


			</Grid>
		</Box>


	)
}