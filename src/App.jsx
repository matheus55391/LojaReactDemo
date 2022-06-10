import { Box,  CssBaseline, ThemeProvider } from '@mui/material'
import { LightTheme } from './themes'
import { AppRoutes } from './Routes'
import { CartProvider } from './shared/contexts'
import { BottomBar, TopBar } from './shared/components'

export const App = () => {



	return (
		<CartProvider>
			<ThemeProvider theme={LightTheme}>
				<Box
					display={'flex'}
					height={'100vh'}
					flexDirection={'column'}	
				>
					<TopBar/>

					<Box
						height={'100%'}
						overflowY={'auto'}
						pt={8}
					>

						<AppRoutes/>				
					</Box>
					<BottomBar/>
					
	
				</Box>
				<CssBaseline/>

			</ThemeProvider>
		</CartProvider>
	)
}
