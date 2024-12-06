"use client"
import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Link from "next/link"
import { redirect } from "next/navigation"

export function AverageTransactionInput() {
    const [ walletId, setWalletId ] = useState<string>("");
    const [ firstDate, setFirstDate ] = useState<string>("");
    const [ lastDate, setLastDate ] = useState<string>("");
    const redirectToAccounts = (e: React.FormEvent) => {
        e.preventDefault();
        redirect(`/average-transactions/${walletId}?startDate=${firstDate}&endDate=${lastDate}`);
    }
    return (
        <div className="flex w-full items-center gap-4">
            <form className="flex w-full items-center gap-4" onSubmit={redirectToAccounts}>
            <Input required placeholder="Wallet Id" value={walletId} onChange={((e) => {setWalletId(e.target.value)})}/>
            <Input required placeholder="from" value={firstDate} onChange={((e) => {setFirstDate(e.target.value)})}/>
            <Input required placeholder="to" value={lastDate} onChange={((e) => {setLastDate(e.target.value)})}/>
            <Button type="submit">
                Show Average
            </Button>
            </form>
        </div>
    )
}