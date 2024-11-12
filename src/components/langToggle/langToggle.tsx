'use client';

import { useLangContext } from '@/hooks';
import { Button } from '../ui';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';

import { langs } from '@/constants';
import Text from '../text/text';

const LangToggle = () => {
    const { setLang, lang } = useLangContext();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' size='icon'>
                    <Text>{lang}</Text>

                    <span className='sr-only'>Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                {langs.map((lang) => (
                    <DropdownMenuItem
                        key={lang.title}
                        onClick={() => setLang(lang.locale)}
                    >
                        {lang.title}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LangToggle;
