'use client';

import { createContext, PropsWithChildren, useContext, useState } from 'react';
import ThemeProvider from './themeProvider/themeProvider';
import LangProvider from './langProvider/langProvider';
import CartContextProvider from './cartProvider/cartProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface gloablContextType {
    nothing?: boolean;
}

const globalContext = createContext<gloablContextType | null>(null);

export default function GlobalProvider(props: PropsWithChildren) {
    const [queryClient] = useState(() => new QueryClient());

    const value = {};

    return (
        <QueryClientProvider client={queryClient}>
            <globalContext.Provider value={value}>
                <CartContextProvider>
                    <ThemeProvider>
                        <LangProvider>{props.children}</LangProvider>
                    </ThemeProvider>
                </CartContextProvider>
            </globalContext.Provider>
        </QueryClientProvider>
    );
}

export const useGlobalContext = () => {
    const context = useContext(globalContext);

    if (context === undefined)
        throw new Error(
            'useGlobalConotext must be used within a LangContextProvider',
        );

    return context;
};
