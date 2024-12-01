"use client"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

export function Transaction({ paymentID, amount, date, method, status, mobileNo } : { paymentID: string, amount: number, date: string, method: string, status: string, mobileNo: number}) {
    return (
        <>
        <div 
        className="w-full flex border border-foreground/20 hover:border-foreground/30 rounded-lg items-center duration-300 pt-3 pb-3">
        <div className="mx-5 my-3 flex flex-col items-start text-left">
        <p className='sm:text-lg text-md font-bold text-left text-black dark:text-white'>
         {mobileNo}, {amount}   
        </p>
        <div className="mt-1 flex">
        <p className="text-sm text-muted-foreground">{method}, {date}</p>
        </div>
        </div>
        <div className="ml-auto mr-5">
        <p>{status}</p>
        </div>
        </div>
        </>
    )
}