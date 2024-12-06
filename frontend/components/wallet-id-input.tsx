"use client"
import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Link from "next/link"
import { redirect } from "next/navigation"

export function WalletIdInput() {
    const [ walletId, setWalletId ] = useState<string>("");
    const [ planId, setPlanId ] = useState<string>("");
    const [ date, setDate ] = useState<string>("");
    const redirectToAccounts = (e: React.FormEvent) => {
        e.preventDefault();
        redirect(`/wallets/${walletId}?planId=${planId}`);
    }
    return (
        <div className="flex w-full items-center gap-4">
            <form className="flex w-full items-center gap-4" onSubmit={redirectToAccounts}>
            <Input required placeholder="Wallet Id" value={walletId} onChange={((e) => {setWalletId(e.target.value)})}/>
            <Input required placeholder="Plan Id" value={planId} onChange={((e) => {setPlanId(e.target.value)})}/>
            <Button type="submit">
                Search for Account
            </Button>
            </form>
        </div>
    )
}