import { Box, Logo, Text } from '@/components';
import { Button } from '@/components/ui';
import { Input } from '@/components/ui/input';
import {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    YoutubeIcon,
} from 'lucide-react';

const Footer = () => {
    return (
        <Box variant='row' className='w-full p-12 bg-secondary'>
            <Box variant='container'>
                <Box variant='column' className='w-full gap-8'>
                    <Box
                        variant='rowBetween'
                        className='w-full items-baseline flex-col md:flex-row gap-8 md:gap-0'
                    >
                        <Box
                            variant='column'
                            className='w-full items-start gap-8'
                        >
                            <Logo />
                            <Text variant='p' className='w-full line-clamp-2'>
                                Address. where is the shop, kjjasdif kj faskj ak
                                jdfkjaskd kj askdfj kja ksdjfjkasjd fij a
                                jsdkfjkasj dfi askdjf ka sjd
                            </Text>
                            <Text>email@test.com</Text>
                            <Text>+90 325 362 54 87</Text>
                            <Box className='gap-4'>
                                <FacebookIcon size='32' />
                                <InstagramIcon size='32' />
                                <YoutubeIcon size='32' />
                                <TwitterIcon size={32} />
                            </Box>
                        </Box>
                        <Box
                            variant='column'
                            className='w-full gap-4 items-start md:items-center'
                        >
                            <Text variant='h4' className='mb-4'>
                                Company
                            </Text>
                            <Button variant='link' className='tracking-wider'>
                                about
                            </Button>
                            <Button variant='link' className='tracking-wider'>
                                careers
                            </Button>
                            <Button variant='link' className='tracking-wider'>
                                affiliates
                            </Button>
                            <Button variant='link' className='tracking-wider'>
                                Blog
                            </Button>
                            <Button variant='link' className='tracking-wider'>
                                contact us
                            </Button>
                        </Box>
                        <Box
                            variant='column'
                            className='w-full gap-4 items-start md:items-center'
                        >
                            <Text variant='h4' className='mb-4'>
                                Shop
                            </Text>
                            <Button variant='link' className='tracking-wider'>
                                new arriavls
                            </Button>
                            <Button variant='link' className='tracking-wider'>
                                Accessories
                            </Button>
                            <Button variant='link' className='tracking-wider'>
                                Men
                            </Button>
                            <Button variant='link' className='tracking-wider'>
                                Women
                            </Button>
                            <Button variant='link' className='tracking-wider'>
                                All Products
                            </Button>
                        </Box>
                        <Box
                            variant='column'
                            className='w-full gap-4 items-start md:items-center'
                        >
                            <Text variant='h4' className='mb-4'>
                                Help
                            </Text>
                            <Button variant='link' className='tracking-wider'>
                                Customer Service
                            </Button>
                            <Button variant='link' className='tracking-wider'>
                                My Account
                            </Button>
                            <Button variant='link' className='tracking-wider'>
                                Find A Store
                            </Button>
                            <Button variant='link' className='tracking-wider'>
                                Legal & Privacy
                            </Button>
                            <Button variant='link' className='tracking-wider'>
                                Gift Cards
                            </Button>
                        </Box>
                        <Box
                            variant='column'
                            className='w-full gap-4 items-start'
                        >
                            <Text variant='h4' className='mb-4 uppercase'>
                                SUBSCRIBE
                            </Text>
                            <Text variant='p'>
                                Be the first to get the latest news about
                                trends, promotions, and much more!
                            </Text>
                            <Box className='gap-0 items-baseline'>
                                <Input placeholder='Email Address' />
                                <Button
                                    variant='default'
                                    size='sm'
                                    className='rounded-l-none'
                                >
                                    JOIN
                                </Button>
                            </Box>
                            <Box variant='column'>
                                <Text variant='h5'>Secure Payments</Text>
                                <Box></Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box variant='rowBetween' className='w-full'>
                        <Box>
                            <Text variant='p' className=''>
                                &copy; 2023 Ecommerce Template. All rights
                                reserved.
                            </Text>
                        </Box>
                        <Box>
                            <Text variant='p' className='ml-2'>
                                Terms & Conditions
                            </Text>
                            <Text variant='p' className='ml-2'>
                                Privacy Policy
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
