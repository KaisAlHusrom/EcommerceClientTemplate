import { Box, Text } from '@/components';

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ value }) => {
    return (
        <Box variant='center'>
            <Text
                className='
            bg-gradient-to-r 
            from-primary-dark 
            to-primary-light 
            bg-clip-text 
            text-transparent 
            border-b-2 
            border-b-primary 
            rounded-r-3xl 
            text-center 
            text-2xl 
            md:text-4xl
            '
            >
                {value}
            </Text>
        </Box>
    );
};

export default SectionTitle;
