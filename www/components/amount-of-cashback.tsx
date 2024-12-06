"use client"
import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Link from "next/link"
import { redirect } from "next/navigation"

export function AmountOfCashback({ mobileNum } : { mobileNum: string}) {
    const [ paymentId, setPaymentId ] = useState<string>("");
    const [ benefitId, setBenefitId ] = useState<string>("");
    const [ result, setResult ] = useState<any>("");
    const redirectToAccounts = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch('http://localhost:8080/payment-wallet-cashback', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mobileNum: mobileNum,
                paymentId:paymentId,
                benefitId:benefitId
            })
        })
        const data = await res.json();
        setResult(data);
    }
    return (
        <div>
        <div className="flex w-full items-center gap-4">
            <form className="flex w-full items-center gap-4" onSubmit={redirectToAccounts}>
            <Input required placeholder="Payment ID" value={paymentId} onChange={((e) => {setPaymentId(e.target.value)})}/>
            <Input required placeholder="Benefit ID" value={benefitId} onChange={((e) => {setBenefitId(e.target.value)})}/>
            <Button type="submit">
               Show Amount of Cashback
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
            {JSON.stringify(result.data)}
            </>
        }
        </div>
        </div>
    )
}