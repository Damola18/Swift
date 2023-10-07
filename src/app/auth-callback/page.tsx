import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { trpc } from '../_trpc/client';

const Page = async () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const origin =  searchParams.get("origin")
    
    const apiResponse = await fetch('/api/what')

    const data2 = await apiResponse.json() 

    const { data, isLoading } = trpc.authCallback.useQuery(undefined, {
        onSuccess: ({success}) => {
            if(success){
                // user is synced to db
                router.push(origin ?  `/${origin}` : "/dashboard")
            }
        }
    })
//   return (
//     <div>Page</div>
//   )
}

export default Page