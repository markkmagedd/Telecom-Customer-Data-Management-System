"use client"
import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Link from "next/link"
import { redirect } from "next/navigation"

export function ExtraAmountInput({ mobileNum } : { mobileNum: string}) {
    const [ planName, setPlanName ] = useState<string>("");
    const [ result, setResult ] = useState<any>("");
    const redirectToAccounts = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch('http://localhost:8080/extra-plan-amount', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mobileNum: mobileNum,
                planName:planName
            })
        })
        const data = await res.json();
        setResult(data);
    }
    return (
        <div>
        <div className="flex w-full items-center gap-4">
            <form className="flex w-full items-center gap-4" onSubmit={redirectToAccounts}>
            <Input required placeholder="Plan Name" value={planName} onChange={((e) => {setPlanName(e.target.value)})}/>
            <Button type="submit">
               View Extra Amount
            </Button>
            </form>
        </div>
        <div className="mt-6">
        {
            result.success === false 
            &&
            <>
            <h1 className="font-bold text-lg">No Data Found</h1>
            </>
        }
        {
            result.success === true 
            &&
            <>
            {
                <h1 className="font-bold text-lg">Extra Amount for last payment : {result.data[0].result}</h1>
            }
            </>
        }
        </div>
        </div>
    )
}