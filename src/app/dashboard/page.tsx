import React from 'react';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from 'next/navigation';
type Props = {}

const DashboardPage = (props: Props) => {

    const { getUser  } = getKindeServerSession()
    const user = getUser();

    if(!user || !user.id) {
       return redirect("/auth-callback?origin=dashboard")
    }

    
  return (
        <div>
            { user.email }
        </div>
    )
}

export default DashboardPage