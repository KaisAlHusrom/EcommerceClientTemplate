'use client';

import { useLangContext } from '@/hooks';

const Root = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const { direction } = useLangContext();
    return (
        <html lang={direction}>
            <body>{children}</body>
        </html>
    );
};

export default Root;
