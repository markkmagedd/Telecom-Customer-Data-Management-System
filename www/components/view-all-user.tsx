"use client"
import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Link from "next/link"
import { redirect } from "next/navigation"

export function ViewAll() {
    const [ planId, setPlanId ] = useState<string>("");
    const [ fromDate, setFromDate ] = useState<string>("");
    const [ toDate, setToDate ] = useState<string>("");
    const redirectToAccounts = (e: React.FormEvent) => {
        e.preventDefault();
        redirect(`/customer/${planId}?date=${fromDate}`);
    }
    return (
        <div className="flex w-full items-center gap-4">
            <form className="flex w-full items-center gap-4" onSubmit={redirectToAccounts}>
            <Input required placeholder="Plan Id" value={planId} onChange={((e) => {setPlanId(e.target.value)})}/>
            <Input required placeholder="from" value={fromDate} onChange={((e) => {setFromDate(e.target.value)})} />
            <Input required placeholder="to" value={toDate} onChange={((e) => {setToDate(e.target.value)})} />
            <Button type="submit">
                View Total Consumption
            </Button>
            </form>
        </div>
    )
}