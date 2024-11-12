import React from 'react';
import Box from '../box/box';
import Logo from '../logo/logo';
import Link from 'next/link';
import { Button } from '../ui/button';
import Text from '../text/text';
import ModeToggle from '../mode-toggle/mode-toggle';
import LangToggle from '../langToggle/langToggle';
import SearchInput from '../searchInput/searchInput';
import CartIcon from '../cartIcon/cartIcon';
import CurrencyToggle from '../currencyToggle/currencyToggle';
// import ModeToggle from '../mode-toggle/mode-toggle'
// import LangToggle from '../langToggle/langToggle'

const navItems = [
    {
        title: 'Home',
        to: '/',
    },
    {
        title: 'About',
        to: '/about',
    },
];

const Navbar = () => {
    return (
        <Box variant='row' className='p-4 h-[80px] relative z-50 w-full'>
            <Box variant='container'>
                <Box variant='rowBetween' className='p-2 hidden sm:flex'>
                    <Box className='gap-12'>
                        <Logo size='lg' />
                        <Box fitContent className='gap-0'>
                            {navItems.map((link) => (
                                <Link key={link.title} href={link.to}>
                                    <Button variant='link'>
                                        <Text className='capitalize'>
                                            {link.title}
                                        </Text>
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                    </Box>
                    <Box fitContent className='gap-4'>
                        <SearchInput className='w-[150px] md:w-[300px] tracking-widest text-md' />
                        <ModeToggle />
                        <LangToggle />
                        <CurrencyToggle />
                        <Button variant='default'>Sign in</Button>
                        <CartIcon />
                    </Box>
                </Box>
                {/* small screens */}
                {/* <SmallScreenNavBar /> */}
            </Box>
        </Box>
    );
};

export default Navbar;
