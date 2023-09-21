import { Box } from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react';

const Sidebar = () => {
	return (
		<Box
			bgcolor='blue'
			flex={1}
			p={2}
			sx={{ display: { xs: 'none', sm: 'block' } }}
		>
			Sidebar
		</Box>
	);
};

export default Sidebar;
