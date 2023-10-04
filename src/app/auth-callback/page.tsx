import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { trpc } from '../_trpc/client';

type Props = {}

const Page = (props: Props) => {

    const router = useRouter();

    const searchParams = useSearchParams();
    const origin = searchParams.get("origin")

    const { data } = trpc.authCallback.useQuery(undefined, {
      onSuccess: ({success}) => {
        if(success) {
          router.push(origin ? `/${origin}` : '/dashboard')
        }
      }
    })

  return (
    <div>Page</div>
  )
}

export default Page