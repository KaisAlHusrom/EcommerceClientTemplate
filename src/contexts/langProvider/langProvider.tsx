'use client';

import Lang, { Dir } from '@/types/lang';
import React, { createContext, useEffect, useState } from 'react';

type LangProviderProps = {
    children: React.ReactNode;
    defaultLang?: Lang;
};

type LangProvideState = {
    lang: Lang;
    setLang: (lang: Lang) => void;
    direction: Dir;
};

const initialState: LangProvideState = {
    lang: 'en',
    setLang: () => null,
    direction: 'ltr',
};

export const LangProviderContext =
    createContext<LangProvideState>(initialState);

const LangProvider = ({ children, defaultLang = 'en' }: LangProviderProps) => {
    const storageKey = 'lang';

    const [lang, setLang] = useState<Lang>(defaultLang);
    const [isClient, setIsClient] = useState(false);

    const direction = lang === 'ar' ? 'rtl' : 'ltr';

    useEffect(() => {
        setIsClient(true);
        const storedLang = localStorage.getItem(storageKey) as Lang;
        if (storedLang) {
            setLang(storedLang);
        }
    }, []);

    useEffect(() => {
        if (isClient) {
            const root = window.document.documentElement;
            root.setAttribute('dir', direction);
        }
    }, [direction, isClient]);

    const value: LangProvideState = {
        lang,
        setLang: (newLang: Lang) => {
            localStorage.setItem(storageKey, newLang);
            setLang(newLang);
        },
        direction,
    };

    return (
        <LangProviderContext.Provider value={value}>
            {children}
        </LangProviderContext.Provider>
    );
};

export default LangProvider;
