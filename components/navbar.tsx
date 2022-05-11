import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';

const pages = [{link: 'Home', name: 'Home'}, {link: 'DepartmentInformation', name: 'Department Information'}, {link: 'ElectedOfficials', name: 'Elected Officials'}, {link: 'BudgetResults', name: 'Budget Results'}];
const loggedInSettings = [{link:'Profile',name:'Profile'}, {link:'Logout', name:'Logout'}, {link: 'TakeAction', name:'Take Action'}, {link:'CraftBudget', name:'Craft Budget'}];
const loggedOutSettings = [{link:'SignUp',name:'Sign Up'},{link:'login',name:'Login'} ]

export default function Navbar() {
    const [userJWT, setUserJWT] = useState('')
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event: any) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: any) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }
    const handleNav = (pageLink:string) => {
        setAnchorElNav(null);
        if (pageLink === 'Logout') {
            sessionStorage.clear();
            window.location.assign('/')
        } else if (pageLink === 'Home') {
            window.location.assign('/')
        } else { window.location.assign(`/${pageLink}`) }
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    useEffect(() => {
        setUserJWT(sessionStorage.getItem('auth_token') || '');
    }, []);


    return (
        <AppBar position='static' id='navBar'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    {/* side nav */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <Link href="/" passHref>
                            <Image
                                src='/mixedLogo.png'
                                layout="intrinsic"
                                width={340}
                                height={107}
                                priority
                                alt={"People's Purse Logo"}
                            />
                        </Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        > {pages.map((page) => (
                            <MenuItem className='nav-item' key={page.link} onClick={() => handleNav(page.link)}>
                                <Typography textAlign="center">{page.name}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                    {/* base navbar */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <Link href="/" passHref>
                            <Image
                                src='/mixedLogo.png'
                                layout="intrinsic"
                                width={340}
                                height={107}
                                priority
                                alt={"People's Purse Logo"}
                            />
                        </Link>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                id='nav-btn'
                                key={page.link}
                                onClick={() => handleNav(page.link)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                    {/* profile settings */}
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title='Profile Options'>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt='Profile Picture' src='/favicon.png' />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {userJWT != '' ?
                                loggedInSettings.map((page: any) => (
                                    <MenuItem className="nav-item" key={page.link} onClick={() => handleNav(page.link)}>
                                        <Typography textAlign="center">{page.name}</Typography>
                                    </MenuItem>
                                ))
                                :
                                loggedOutSettings.map((page) => (
                                    <MenuItem className="nav-item" key={page.link} onClick={() => handleNav(page.link)}>
                                        <Typography textAlign="center">{page.name}</Typography>
                                    </MenuItem>
                                ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}