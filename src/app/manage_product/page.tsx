"use client"
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {
    const { status } = useSession()
    if (status === "loading") <div>Loading...</div>
    if (status === "unauthenticated") redirect("/")
    if (status === "authenticated")
        return (
            <div>
                this is manage product page
            </div>
        )
}

export default page
