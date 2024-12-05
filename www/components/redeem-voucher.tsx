"use client"
import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Link from "next/link"
import { redirect } from "next/navigation"

export function RedeemVoucher({ mobileNum } : { mobileNum:string}) {
    const [ voucherId, setVoucherId ] = useState<string>("");
    const [ result, setResult ] = useState<any>("");
    const redirectToAccounts = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch('http://localhost:8080/redeem-voucher-points', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mobileNum: mobileNum,
                voucherId: voucherId
            })
        })
        const data = await res.json();
        setResult(data);
    }
    return (
        <div>
        <div className="flex w-full items-center gap-4">
            <form className="flex w-full items-center gap-4" onSubmit={redirectToAccounts}>
            <Input required placeholder="VoucherID" value={voucherId} onChange={((e) => {setVoucherId(e.target.value)})}/>
            <Button type="submit">
               Redeem Voucher
            </Button>
            </form>
        </div>
        <div className="mt-6">
        {
            result.success === false 
            &&
            <>
            <h1 className="font-bold text-lg">{result.error}</h1>
            </>
        }
        {
            result.success === true 
            &&
            <>
            <h1 className="font-bold text-lg">Redeemed Voucher Successfully!</h1>
            </>
        }
        </div>
        </div>
    )
}