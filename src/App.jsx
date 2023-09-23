import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { Add } from '@mui/icons-material';

const App = () => {
	const [mode, setMode] = useState('light');
	const darkTheme = createTheme({
		palette: {
			mode: mode
		}
	});
	return (
		<ThemeProvider theme={darkTheme}>
			<Box>
				<Navbar />
				<Stack direction='row' spacing={2} justifyContent='space-between'>
					<Sidebar />
					<Feed />
					<Rightbar />
				</Stack>
				<Add />
			</Box>
		</ThemeProvider>
	);
};

export default App;
