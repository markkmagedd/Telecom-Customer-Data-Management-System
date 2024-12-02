import { Check, Wifi, MessageCircle, PhoneCall } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface PlanCardProps {
  name: string
  price: number
  smsOffered: number
  minutesOffered: number
  dataOffered: number
  description: string
}

export function PlanCard({ name, price, smsOffered, minutesOffered, dataOffered, description }: PlanCardProps) {
  return (
    <Card className="w-full max-w-sm border-2 hover:border-foreground/20 transition-colors duration-300">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-4xl font-bold text-primary mb-4">${price}<span className="text-sm font-normal text-muted-foreground">/month</span></p>
        <ul className="space-y-2">
          <li className="flex items-center justify-between">
            <span className="flex items-center">
              <MessageCircle className="w-5 h-5 mr-2 text-primary" />
              SMS
            </span>
            <span>{smsOffered}</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="flex items-center">
              <PhoneCall className="w-5 h-5 mr-2 text-primary" />
              Minutes
            </span>
            <span>{minutesOffered}</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="flex items-center">
              <Wifi className="w-5 h-5 mr-2 text-primary" />
              Data
            </span>
            <span>{dataOffered} GB</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Choose Plan</Button>
      </CardFooter>
    </Card>
  )
}

