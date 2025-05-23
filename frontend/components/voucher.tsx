"use client"
import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Link from "next/link"
import { redirect } from "next/navigation"

export function HighestVoucherInput() {
    const [ mobileNo, setMobileNo ] = useState<string>("");
    const [ result, setResult ] = useState<any>("");
    const fetchNationalId = async (e: React.FormEvent) => {
        e.preventDefault();
        // redirect(`/customer/${planId}?date=${fromDate}`);
        const res = await fetch('http://localhost:8080/account-highest-voucher', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mobileNum: mobileNo
            })
        })
        const data = await res.json();
        setResult(data);
    }
    return (
        <div>
        <div className="flex w-full items-center gap-4">
            <form className="flex w-full items-center gap-4" onSubmit={fetchNationalId}>
            <Input required placeholder="Mobile Number" value={mobileNo} onChange={((e) => {setMobileNo(e.target.value)})}/>
            <Button type="submit">
                View Highest Voucher
            </Button>
            </form>
        </div>
        <div className="mt-6">
        {
            result.success === false 
            &&
            <>
            <h1 className="font-bold text-lg">No Unresolved Tickets.</h1>
            </>
        }
        {
            result.success === true 
            &&
            <>
            {/* {JSON.stringify(result.data)} */}
            {result.data.map((result: any, index: any) => {
                return (
                    <div key={index}>
                    <h1 className="font-bold text-lg">Number of unresolved tickets : {result[Object.keys(result)[0]]}</h1>
                    </div>
                )
            })}
            </>
        }
        </div>
        </div>
    )
}