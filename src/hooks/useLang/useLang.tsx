'use client';

import { LangProviderContext } from '@/contexts';
import { useContext } from 'react';

const useLangContext = () => {
    const context = useContext(LangProviderContext);

    if (context === undefined)
        throw new Error(
            'useLangContext must be used within a LangContextProvider',
        );

    return context;
};

export default useLangContext;
