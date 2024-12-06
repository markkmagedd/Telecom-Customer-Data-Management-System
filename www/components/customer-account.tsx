"use client"

export function CustomerAccount2({ mobileNumber, nationalID, description, name } : { mobileNumber: string, name:string, nationalID: string, description: string}) {
    return (
        <>
        <div 
      className="w-full flex border border-foreground/20 hover:border-foreground/30 rounded-lg items-center duration-300 pt-3 pb-3">
      <div className="mx-5 my-3 flex flex-col items-start text-left">
        <p className='sm:text-lg text-md font-bold text-left text-black dark:text-white'>
         {mobileNumber}     
        </p>
        <div className="mt-1 flex">
        <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        </div>
        <div className="ml-auto mr-5">
          {description}
        </div>
        </div>
        </>
    )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Lock, Wallet, CreditCard, Calendar, Activity, Award, User, Package, DollarSign, MessageSquare, PhoneCall, Wifi } from 'lucide-react'

export function CustomerAccount({ 
  mobileNo, 
  pass, 
  balance, 
  account_type, 
  start_date, 
  status, 
  points, 
  nationalID, 
  planID, 
  name, 
  price, 
  SMS_offered, 
  minutes_offered, 
  data_offered, 
  description 
}: { 
  mobileNo: string;
  pass: string;
  balance: number;
  account_type: string;
  start_date: string;
  status: string;
  points: number | null;
  nationalID: number;
  planID: number;
  name: string;
  price: number;
  SMS_offered: number;
  minutes_offered: number;
  data_offered: number;
  description: string;
}) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatpropsOffered = (data: number) => {
    return data >= 1 ? `${data} GB` : `${data * 1000} MB`
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Customer Account</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-4">
            <Phone className="h-5 w-5 text-gray-500" />
            <div>
              <p className="text-sm font-medium text-gray-500">Mobile Number</p>
              <p className="text-lg font-semibold">{mobileNo}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Lock className="h-5 w-5 text-gray-500" />
            <div>
              <p className="text-sm font-medium text-gray-500">Password</p>
              <p className="text-lg font-semibold">••••••••</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Wallet className="h-5 w-5 text-gray-500" />
            <div>
              <p className="text-sm font-medium text-gray-500">Balance</p>
              <p className="text-lg font-semibold">EGP {balance.toFixed(2)}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <CreditCard className="h-5 w-5 text-gray-500" />
            <div>
              <p className="text-sm font-medium text-gray-500">Account Type</p>
              <p className="text-lg font-semibold capitalize">{account_type}</p>
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
            <Activity className="h-5 w-5 text-gray-500" />
            <div>
              <p className="text-sm font-medium text-gray-500">Status</p>
              <Badge>
                {status}
              </Badge>
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
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">Plan Details</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Package className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Plan Name</p>
                  <p className="text-lg font-semibold">{name}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-gray-500" />
                <p className="text-lg font-semibold">EGP{price}/month</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm font-medium text-gray-500">SMS</p>
                  <p className="text-lg font-semibold">{SMS_offered}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneCall className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Minutes</p>
                  <p className="text-lg font-semibold">{minutes_offered}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Wifi className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Data</p>
                  <p className="text-lg font-semibold">{formatpropsOffered(data_offered)}</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Description</p>
              <p className="text-base">{description}</p>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}
