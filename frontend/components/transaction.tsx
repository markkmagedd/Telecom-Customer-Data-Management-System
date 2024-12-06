"use client"
import { Button } from "./ui/button"
import { ArrowRight, CreditCardIcon, DollarSign } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { CalendarIcon } from "lucide-react"
import { Badge } from "./ui/badge"

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

interface TransactionCardProps {
    method: string
    amount: number
    mobileNo: string
    date: string
    status: "successful" | "pending" | "rejected",
  }

export default function TransactionCard({
    method,
    amount,
    mobileNo,
    date,
    status,
  }: TransactionCardProps) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Transaction Details</CardTitle>
          <Badge className="rounded-sm"
            variant={status === "successful" ? "default" : status === "pending" ? "secondary" : "destructive"}
          >
            {status}
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <div>
                {
                    method === "credit" && 
                    <>
                    <CreditCardIcon className="size-4" />
                    </>
                }
                {
                    method === "cash" &&
                    <>
                    <DollarSign className="size-4" />
                    </>
                }
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">{method}</p>
              <p className="text-sm text-muted-foreground">{mobileNo}</p>
            </div>
            <div className="ml-auto font-medium">
              {amount.toFixed(2)} EGP
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-muted-foreground">
            <CalendarIcon className="mr-1 h-4 w-4" />
            {date}
          </div>
        </CardContent>
      </Card>
    )
  }