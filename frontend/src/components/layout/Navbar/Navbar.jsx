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
                <FaSearch />
                <FaShoppingCart />
                <FaUserAlt />
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
