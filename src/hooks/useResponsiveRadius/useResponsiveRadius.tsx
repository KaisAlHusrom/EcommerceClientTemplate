import useMediaQuery from '../useMediaQuery/useMediaQuery';

export default function useResponsiveRadius() {
    const isXl = useMediaQuery('xl');
    const isLg = useMediaQuery('lg');
    const isMd = useMediaQuery('md');

    if (isXl) {
        return 350; // Extra large screens
    } else if (isLg) {
        return 300; // Large screens
    } else if (isMd) {
        return 250; // Medium screens
    } else {
        return 250; // Extra small screens
    }
}