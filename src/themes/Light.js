import { createTheme } from '@mui/material'
import { blue, cyan, yellow } from '@mui/material/colors'

export const LightTheme = createTheme({
	palette: {
		primary: {
			main: blue[700],
			dark: blue[800],
			light: blue[500],
			contrastText: '#fff',
		},
		secondary: {
			main: cyan[500],
			dark: cyan[400],
			light: cyan[300],
			contrastText: '#fff',
		},
		background: {
			paper: '#ffffff',
			default: '#f7f6f3',
		}
	}
})