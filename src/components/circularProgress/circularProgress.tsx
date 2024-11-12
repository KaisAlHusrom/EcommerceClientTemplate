import { cn } from '@/lib/utils';
import Box from '../box/box';

const CircularProgress = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <Box
            {...props}
            fitContent
            className={cn(
                'w-[20px] h-[20px] rounded-full bg-transparent border-2 border-primary border-t-transparent animate-spin',
                className,
            )}
        ></Box>
    );
};

export default CircularProgress;
