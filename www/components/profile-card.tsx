"use client"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Mail, MapPin, Calendar, Phone, CreditCard, Activity, DollarSign, Award } from 'lucide-react'

export function ProfileComponent({ firstName, lastName, mobileNumber } : { firstName: string, lastName: string, mobileNumber: string}) {
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
          <Button size={"icon"} variant={"outline"} className="rounded-lg bg-inherit border border-foreground/20">
            <ArrowRight className="size-4" />
          </Button>
        </div>
        </div>
        </>
    )
}

interface ProfileData {
  nationalID: any;
  first_name: any;
  last_name: any;
  email: any;
  address: any;
  date_of_birth: any;
  mobileNo: any;
  account_type: any;
  status: any;
  start_date: any;
  balance: any;
  points: any | null;
}

export function Profile( {firstName, lastName, mobileNumber, email, address, nationalID, date_of_birth, account_type, status, start_date, balance, points } : 
  { firstName: string, lastName: string, mobileNumber: string, email: string, address: string, nationalID:string, date_of_birth: string, account_type: string, status: string, start_date: string, balance: string, points: string }) {
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

return (
  <Card className="w-full max-w-3xl mx-auto">
    <CardHeader>
      <CardTitle className="text-2xl font-bold">Profile Information</CardTitle>
    </CardHeader>
    <CardContent className="grid gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center space-x-4">
          <User className="h-5 w-5 text-gray-500" />
          <div>
            <p className="text-sm font-medium text-gray-500">Full Name</p>
            <p className="text-lg font-semibold">{`${firstName} ${lastName}`}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Mail className="h-5 w-5 text-gray-500" />
          <div>
            <p className="text-sm font-medium text-gray-500">Email</p>
            <p className="text-lg font-semibold">{email}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <MapPin className="h-5 w-5 text-gray-500" />
          <div>
            <p className="text-sm font-medium text-gray-500">Address</p>
            <p className="text-lg font-semibold">{address}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Calendar className="h-5 w-5 text-gray-500" />
          <div>
            <p className="text-sm font-medium text-gray-500">Date of Birth</p>
            <p className="text-lg font-semibold">{formatDate(date_of_birth)}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Phone className="h-5 w-5 text-gray-500" />
          <div>
            <p className="text-sm font-medium text-gray-500">Mobile Number</p>
            <p className="text-lg font-semibold">{mobileNumber}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <CreditCard className="h-5 w-5 text-gray-500" />
          <div>
            <p className="text-sm font-medium text-gray-500">Account Type</p>
            <p className="text-lg font-semibold capitalize">{account_type}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center space-x-4">
          <Activity className="h-5 w-5 text-gray-500" />
          <div>
            <p className="text-sm font-medium text-gray-500">Status</p>
            <Badge>
              {status}
            </Badge>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Calendar className="h-5 w-5 text-gray-500" />
          <div>
            <p className="text-sm font-medium text-gray-500">Start Date</p>
            <p className="text-lg font-semibold">{formatDate(start_date)}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <DollarSign className="h-5 w-5 text-gray-500" />
          <div>
            <p className="text-sm font-medium text-gray-500">Balance</p>
            <p className="text-lg font-semibold">${balance}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Award className="h-5 w-5 text-gray-500" />
        <div>
          <p className="text-sm font-medium text-gray-500">Points</p>
          <p className="text-lg font-semibold">{points ?? 'N/A'}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <User className="h-5 w-5 text-gray-500" />
        <div>
          <p className="text-sm font-medium text-gray-500">National ID</p>
          <p className="text-lg font-semibold">{nationalID}</p>
        </div>
      </div>
    </CardContent>
  </Card>
)
}

