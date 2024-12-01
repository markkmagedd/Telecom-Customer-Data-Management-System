"use client"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "./ui/card"
import { Phone, Wallet2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export function Wallet({ firstName, lastName, mobileNumber, currentBalance, currency } : { firstName: string, lastName: string, mobileNumber: string, currentBalance: number, currency: string}) {
    return (
        <>
        <div 
      className="w-full flex border border-foreground/20 hover:border-foreground/30 rounded-lg items-center duration-300 pt-3 pb-3">
      <div className="mx-5 my-3 flex flex-col items-start text-left">
        <p className='sm:text-lg text-md font-bold text-left text-black dark:text-white'>
         {firstName} {lastName}     
        </p>
        <div className="mt-1 flex">
        <p className="text-sm text-muted-foreground">{mobileNumber}</p>
        </div>
        </div>
        <div className="ml-auto mr-5">
        <p>{currentBalance} {currency}</p>
        </div>
        </div>
        </>
    )
}

export function WalletCard({ firstName, lastName, mobileNumber, currentBalance, currency } : { firstName: string, lastName: string, mobileNumber: string, currentBalance: number, currency: string}) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Wallet Details</CardTitle>
        <Wallet2 className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarFallback>{firstName[0]}{lastName[0]}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">{firstName} {lastName}</p>
            <p className="flex items-center text-sm text-muted-foreground">
              <Phone className="mr-1 h-3 w-3" />
              {mobileNumber}
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">Current Balance</p>
          <p className="text-2xl font-bold">
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: currency }).format(currentBalance)}
          </p>
        </div>
        <Button variant={"outline"} className="w-full mt-2">View Cashbacks</Button>
      </CardContent>
    </Card>
  )
}

