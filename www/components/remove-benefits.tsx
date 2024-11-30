"use client"
import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Link from "next/link"
import { redirect } from "next/navigation"

export function RemoveBenefitsInput() {
    const [ mobileNumber, setMobileNumber ] = useState<string>("");
    const [ planId, setPlanId ] = useState<string>("");
    const redirectToAccounts = (e: React.FormEvent) => {
        e.preventDefault();
        redirect(`/delete-benefits/${mobileNumber}?planId=${planId}`);
    }
    return (
        <div className="flex w-full items-center gap-4">
            <form className="flex w-full items-center gap-4" onSubmit={redirectToAccounts}>
            <Input required placeholder="Mobile Number" value={mobileNumber} onChange={((e) => {setMobileNumber(e.target.value)})}/>
            <Input required placeholder="Plan ID" value={planId} onChange={((e) => {setPlanId(e.target.value)})} />
            <Button type="submit">
                Delete Benefits
            </Button>
            </form>
        </div>
    )
}