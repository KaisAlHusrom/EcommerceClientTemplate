'use client';

// import { useTheme } from '@/hooks'
import Box from '../box/box';
// import { Images } from '@/assets'
import { useMemo } from 'react';
import Text from '../text/text';
import { useRouter } from 'next/navigation';

const Logo = (props: { size?: 'sm' | 'md' | 'lg' }) => {
    const { size = 'md' } = props;

    // const { theme } = useTheme()

    const fixedSize = useMemo(() => {
        return {
            width: size === 'sm' ? '60px' : size === 'md' ? '80px' : '100px',
            height: size === 'sm' ? '30px' : size === 'md' ? '50px' : '80px',
        };
    }, [size]);

    const router = useRouter();
    const navigateToHome = () => {
        router.push('/');
    };

    return (
        <Box
            variant='center'
            style={fixedSize}
            className='cursor-pointer'
            onClick={navigateToHome}
        >
            {/* <Image 
                src={theme === "dark" ? Images.darkLogo : Images.lightLogo} 
                alt="Logo"
                width='100'
                height='100'
            /> */}
            <Text variant='h4' className='text-primary'>
                LOGO
            </Text>
        </Box>
    );
};

export default Logo;
