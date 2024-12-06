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
    const [ result, setResult ] = useState<any>("");
    const redirectToAccounts = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch('http://localhost:8080/consumption', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                planName: planId,
                startDate: fromDate,
                endDate: toDate
            })
        })
        const data = await res.json();
        setResult(data);
    }
    return (
        <div>
        <div className="flex w-full items-center gap-4">
            <form className="flex w-full items-center gap-4" onSubmit={redirectToAccounts}>
            <Input required placeholder="Plan Name ( basic plan )" value={planId} onChange={((e) => {setPlanId(e.target.value)})}/>
            <Input required placeholder="from" value={fromDate} onChange={((e) => {setFromDate(e.target.value)})} />
            <Input required placeholder="to" value={toDate} onChange={((e) => {setToDate(e.target.value)})} />
            <Button type="submit">
                View Total Consumption
            </Button>
            </form>
        </div>
        <div className="mt-6">
        {
            result.success === false 
            &&
            <>
            <h1 className="font-bold text-lg">No Consumption Found</h1>
            </>
        }
        {
            result.success === true 
            &&
            <>
            <h1 className="font-bold text-lg">Data Consumed : {result.data[0].data_consumption}</h1>
            <h1 className="font-bold text-lg">Minutes Used : {result.data[0].minutes_used}</h1>
            <h1 className="font-bold text-lg">SMS Sent : {result.data[0].SMS_sent}</h1>
            </>
        }
        </div>
        </div>
    )
}