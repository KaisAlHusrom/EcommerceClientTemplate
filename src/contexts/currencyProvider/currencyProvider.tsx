'use client';

import currencies from '@/constants/currencies/currencies';
import ICurrency from '@/interfaces/ICurrency';
import { createGlobalState } from '@/queryStates';

export const useCurrency = createGlobalState<ICurrency>({
    initialData: currencies[0],
    queryKey: 'currency',
    toLocalStorage: true,
});
