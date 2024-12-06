"use client"
import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Link from "next/link"
import { redirect } from "next/navigation"

export function RemainingAmountInput({ mobileNum } : { mobileNum: string}) {
    const [ planName, setPlanName ] = useState<string>("");
    const [ result, setResult ] = useState<any>("");
    const redirectToAccounts = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch('http://localhost:8080/remaining-plan-amount', {
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
               View Remaining Amount
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
                <h1 className="font-bold text-lg">Remaining Amount for last initiated Payment : {result.data[0].result}</h1>
            }
            </>
        }
        </div>
        </div>
    )
}