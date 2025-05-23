"use client"
import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Link from "next/link"
import { redirect } from "next/navigation"

export function AcceptedPaymentsInput() {
    const [ mobileNumber, setMobileNumber ] = useState<string>("");
    const [ firstDate, setFirstDate ] = useState<string>("");
    const redirectToAccounts = (e: React.FormEvent) => {
        e.preventDefault();
        redirect(`/accepted-transactions/${mobileNumber}`);
    }
    return (
        <div className="flex w-full items-center gap-4">
            <form className="flex w-full items-center gap-4" onSubmit={redirectToAccounts}>
            <Input required placeholder="Mobile Number" value={mobileNumber} onChange={((e) => {setMobileNumber(e.target.value)})}/>
            <Button type="submit">
                Accepted Payments
            </Button>
            </form>
        </div>
    )
}