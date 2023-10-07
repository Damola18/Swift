"use client"
import { PropsWithChildren, ReactNode, useState } from 'react';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { trpc } from '@/app/_trpc/client';
import { httpBatchLink } from '@trpc/client';

// const Providers = ({children}: {children: ReactNode}) => {
const Providers = ({children}: PropsWithChildren) => {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() => 
        trpc.createClient({
            links:[
                httpBatchLink({
                    url: "https://localhost:3000/api/trpc"
                })
            ]
        })
    ); 

    return (
        <trpc.Provider 
            client={trpcClient} 
            queryClient={queryClient}>
                <QueryClientProvider client={queryClient}>
                 {children}
                </QueryClientProvider>
            {children}
        </trpc.Provider>
    )
    // return ( 
    //     <div>Providers</div>
    // )
}

export default Providers