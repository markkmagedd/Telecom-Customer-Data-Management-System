"use client"
import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Link from "next/link"
import { redirect } from "next/navigation"

export function RechargeSubscription() {
    const [ planId, setPlanId ] = useState<string>("");
    const [ amount, setAmount ] = useState<string>("");
    const [ mobileNum, setMobileNum ] = useState<string>("");
    const [ paymentMethod, setPaymentMethod ] = useState<string>("")
    const [ result, setResult ] = useState<any>("");
    const redirectToAccounts = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch('http://localhost:8080/initiate-balance-payment', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount:amount,
                paymentMethod: paymentMethod,
                mobileNum: mobileNum
            })
        })
        const data = await res.json();
        setResult(data);
    }
    return (
        <div>
        <div className="flex w-full items-center gap-4">
            <form className="flex w-full items-center gap-4" onSubmit={redirectToAccounts}>
            <Input required placeholder="Mobile Number" value={mobileNum} onChange={((e) => {setMobileNum(e.target.value)})}/>
            <Input required placeholder="Amount" value={amount} onChange={((e) => {setAmount(e.target.value)})}/>
            <Input required placeholder="Payment Method" value={paymentMethod} onChange={((e) => {setPaymentMethod(e.target.value)})}/>
            <Button type="submit">
               Recharge Balance
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
            <h1 className="font-bold text-lg">Recharged Balance Successfully!</h1>
            </>
        }
        </div>
        </div>
    )
}