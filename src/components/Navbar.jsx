import styled from '@emotion/styled';
import { Mail, Notifications, Pets } from '@mui/icons-material';
import {
	AppBar,
	Avatar,
	Badge,
	Box,
	InputBase,
	Toolbar,
	Typography
} from '@mui/material';
import React from 'react';

const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between'
});

const SearchBar = styled('div')(({ theme }) => ({
	backgroundColor: 'white',
	padding: ' 0 10px',
	borderRadius: theme.shape.borderRadius,
	width: '40%'
}));

const Icons = styled(Box)(({ theme }) => ({
	display: 'none',
	alignItems: 'center',
	gap: '20px',
	[theme.breakpoints.up('sm')]: {
		display: 'flex'
	}
}));

const UserBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
  [theme.breakpoints.up('sm')]: {
		display: 'none'
	}
}));

const Navbar = () => {
	return (
		<AppBar position='sticky'>
			<StyledToolbar>
				<Typography
					variant='h6'
					sx={{
						display: {
							xs: 'none',
							sm: 'block'
						}
					}}
				>
					{' '}
					LAMA DEV
				</Typography>
				<Pets
					sx={{
						display: {
							xs: 'block',
							sm: 'none'
						}
					}}
				></Pets>
				<SearchBar>
					<InputBase placeholder='search' />
				</SearchBar>
				<Icons>
					<Badge badgeContent={2} color='error'>
						<Mail color='action' />
					</Badge>
					<Badge badgeContent={2} color='error'>
						<Notifications color='action' />
					</Badge>
					<Badge>
						<Avatar
							sx={{
								width: 30,
								height: 30
							}}
							alt='Remy Sharp'
							src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
						/>
					</Badge>
				</Icons>
				<UserBox>
					<Avatar
						sx={{
							width: 30,
							height: 30
						}}
						alt='Remy Sharp'
						src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
					/>
					<Typography variant='span'>John DOe</Typography>
				</UserBox>
			</StyledToolbar>
		</AppBar>
	);
};

export default Navbar;
