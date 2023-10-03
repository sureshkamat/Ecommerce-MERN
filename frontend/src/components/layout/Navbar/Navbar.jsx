import {
    Box,
    Center,
    Collapse,
    Flex,
    IconButton,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaBars, FaSearch, FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.jpeg';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Flex
            w="90%"
            m="auto"
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="center"
            gap={5}
        >
            <Box>
                <Link to="/">
                    <Image w={100} objectFit="cover" src={logo} alt="Surshaa" />
                </Link>
            </Box>



            <Center display={['none', 'none', 'flex']}>
                <Stack direction="row" spacing={10} >
                    <Link to="/">
                        <Text fontSize="xl">Home</Text>
                    </Link>
                    <Link to="/products">
                        <Text fontSize="xl">Products</Text>
                    </Link>
                    <Link to="/about">
                        <Text fontSize="xl">About</Text>
                    </Link>
                    <Link to="/contact">
                        <Text fontSize="xl" style={{ color: 'black' }}
                            onMouseEnter={(e) => e.target.style.color = 'brown'} // Change color on hover
                            onMouseLeave={(e) => e.target.style.color = 'black'}>Contact</Text>
                    </Link>
                </Stack>
            </Center>

            <Center gap={10}>
            <Link to="/search"><FaSearch /></Link>
                <FaShoppingCart />
                <Link to="/login"> <FaUserAlt /></Link>
            </Center>


            {/* Hamburger menu icon */}
            <Center display={['flex', 'flex', 'none']}>
                <IconButton
                    aria-label="Open menu"
                    icon={<FaBars />}
                    onClick={toggleMenu}
                />
            </Center>
            {/* Navigation links for smaller devices */}
            <Collapse in={isMenuOpen}>
                <Center w="100%" mt={4}>
                    <Stack spacing={4}>
                        <Link to="/" onClick={toggleMenu}>
                            <Text fontSize="xl">Home</Text>
                        </Link>
                        <Link to="/products" onClick={toggleMenu}>
                            <Text fontSize="xl">Products</Text>
                        </Link>
                        <Link to="/about" onClick={toggleMenu}>
                            <Text fontSize="xl">About</Text>
                        </Link>
                        <Link to="/contact" onClick={toggleMenu}>
                            <Text fontSize="xl">Contact</Text>
                        </Link>
                    </Stack>
                </Center>
            </Collapse>
        </Flex>
    );
};


// import { AccountCircle as AccountCircleIcon, Menu as MenuIcon, Search as SearchIcon, ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
// import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../../../images/logo.jpeg';

// export const Navbar = () => {
//     const [anchorEl, setAnchorEl] = useState(null);

//     const handleMenuOpen = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleMenuClose = () => {
//         setAnchorEl(null);
//     };

//     const renderMenu = (
//         <Menu
//             anchorEl={anchorEl}
//             anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//             }}
//             id="menu-appbar"
//             keepMounted
//             transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//             }}
//             open={Boolean(anchorEl)}
//             onClose={handleMenuClose}
//         >
//             <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//             <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//         </Menu>
//     );

//     return (
//         <AppBar position="static">
//             <Toolbar>
//                 <Link to="/">
//                     <img src={logo} alt="Surshaa" style={{ width: 100, height: 'auto' }} />
//                 </Link>

//                 <div style={{ flex: 1 }}></div>

//                 {/* Desktop navigation links */}
//                 <div style={{ display: 'none', marginRight: 'auto' }}>
//                     <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
//                         <Typography variant="h6">Home</Typography>
//                     </Link>
//                     <Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
//                         <Typography variant="h6">Products</Typography>
//                     </Link>
//                     <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
//                         <Typography variant="h6">About</Typography>
//                     </Link>
//                     <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
//                         <Typography variant="h6">Contact</Typography>
//                     </Link>
//                 </div>

//                 {/* Icons */}
//                 <div>
//                     <IconButton aria-label="Search" color="inherit">
//                         <SearchIcon />
//                     </IconButton>
//                     <IconButton aria-label="Shopping Cart" color="inherit">
//                         <ShoppingCartIcon />
//                     </IconButton>
//                     <IconButton
//                         aria-label="Account"
//                         color="inherit"
//                         aria-controls="menu-appbar"
//                         aria-haspopup="true"
//                         onClick={handleMenuOpen}
//                     >
//                         <AccountCircleIcon />
//                     </IconButton>
//                 </div>

//                 {/* Mobile menu icon */}
//                 <div style={{ display: 'block', marginLeft: 'auto' }}>
//                     <IconButton
//                         aria-label="Open menu"
//                         edge="end"
//                         color="inherit"
//                         onClick={toggleMenu}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                 </div>
//             </Toolbar>
//             {renderMenu}
//         </AppBar>
//     );
// };

