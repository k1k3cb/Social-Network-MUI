import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#1760a5',
            light: '#skyblue',
		},
		secondary: {
			main: '#15c630',
		},
		myColor: {
			main: '#999',
		}
	},
	typography: {
		subtitle1: {
			fontSize: 12
		},
		body1: {
			fontWeight: 500
		},
		button: {
			fontStyle: 'italic'
		}
	}
});
