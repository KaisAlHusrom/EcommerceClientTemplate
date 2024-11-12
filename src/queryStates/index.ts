import { useQueryClient, useQuery } from '@tanstack/react-query';

type createGlobalStateProps<T> = {
    queryKey: unknown,
    initialData: T | null,
    toLocalStorage?: boolean
}

export function createGlobalState<T>(
    {
        queryKey,
        initialData = null,
        toLocalStorage = false,
    }
    : createGlobalStateProps<T>
){

    return function () {
        const storageKey = String(queryKey);

        // Retrieve data from localStorage if toLocalStorage is true
        const getInitialData = (): T | null => {
            if (toLocalStorage && typeof window !== 'undefined') {
                const storedData = localStorage.getItem(storageKey);
                if (storedData) {
                    try {
                        return JSON.parse(storedData) as T;
                    } catch (error) {
                        console.error('Error parsing stored data:', error);
                    }
                }

                //set storage data when it's not exist in localStorage
                localStorage.setItem(storageKey, JSON.stringify(initialData));
                return initialData;
            }
            return initialData;
        };

        const queryClient = useQueryClient();

        const {data} = useQuery({
            queryKey: [queryKey],
            queryFn: () => Promise.resolve(getInitialData()),
            refetchOnMount: false,
            refetchInterval: false,
            refetchIntervalInBackground: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            
        })

        function setData(data: Partial<T>) {
            queryClient.setQueryData([queryKey], data);

            // Store data to localStorage if toLocalStorage is true
            if (toLocalStorage && typeof window !== 'undefined') {
                try {
                    localStorage.setItem(storageKey, JSON.stringify(data));
                } catch (error) {
                    console.error('Error saving data to localStorage:', error);
                }
            }
        }

        function resetData() {
            queryClient.invalidateQueries({
                queryKey: [queryKey],
            })
            queryClient.refetchQueries({
                queryKey: [queryKey],
            })

            // Clear localStorage if toLocalStorage is true
            if (toLocalStorage && typeof window !== 'undefined') {
                localStorage.removeItem(storageKey);
            }
        }

        return {
            data,
            setData,
            resetData,
        }
    }
}