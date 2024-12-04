"use client"
import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Link from "next/link"
import { redirect } from "next/navigation"

export function NationalIdInput() {
    const [ nationalId, setNationalId ] = useState<string>("");
    const [ result, setResult ] = useState<any>("");
    const fetchNationalId = async (e: React.FormEvent) => {
        e.preventDefault();
        // redirect(`/customer/${planId}?date=${fromDate}`);
        const res = await fetch('http://localhost:8080/cashback-wallet-customer', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                NID:nationalId
            })
        })
        const data = await res.json();
        setResult(data);
    }
    return (
        <div>
        <div className="flex w-full items-center gap-4">
            <form className="flex w-full items-center gap-4" onSubmit={fetchNationalId}>
            <Input required placeholder="National Id" value={nationalId} onChange={((e) => {setNationalId(e.target.value)})}/>
            <Button type="submit">
                View Cashbacks
            </Button>
            </form>
        </div>
        <div className="mt-6">
        {
            result.success === false 
            &&
            <>
            <h1 className="font-bold text-lg">No Cashbacks Found</h1>
            </>
        }
        {
            result.success === true 
            &&
            <>
            {/* {JSON.stringify(result.data)} */}
            {
            result.data.map((cashback: any, index:any) => {
                return (
                    <div key={index}>
                        <h1 className="font-bold text-lg">Cashback ID : {cashback.cashbackID}</h1>
                        <h1 className="font-bold text-lg">Benefit ID : {cashback.benefitID}</h1>
                        <h1 className="font-bold text-lg">Wallet ID : {cashback.walletID}</h1>
                        <h1 className="font-bold text-lg">Amount : {cashback.amount}</h1>
                        <h1 className="font-bold text-lg">Date : {cashback.credit_date}</h1>
                    </div>
                )
            })
            }
            </>
        }
        </div>
        </div>
    )
}