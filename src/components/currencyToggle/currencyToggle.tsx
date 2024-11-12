'use client';

import { Button } from '../ui';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';

import Text from '../text/text';
import { useCurrency } from '@/contexts/currencyProvider/currencyProvider';
import currencies from '@/constants/currencies/currencies';
import CircularProgress from '../circularProgress/circularProgress';

const CurrencyToggle = () => {
    const { data: currency, setData: setCurrency } = useCurrency();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' size='icon'>
                    {currency ? (
                        <Text>{currency?.code}</Text>
                    ) : (
                        <CircularProgress />
                    )}

                    <span className='sr-only'>Toggle currencies</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                {currencies.map((currency) => (
                    <DropdownMenuItem
                        key={currency.code}
                        onClick={() => setCurrency(currency)}
                    >
                        {currency.code}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default CurrencyToggle;
