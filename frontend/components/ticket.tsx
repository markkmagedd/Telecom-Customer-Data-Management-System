import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Hash, Phone, AlertCircle, BarChart2, CheckCircle2 } from 'lucide-react'

interface TicketData {
    ticketID: number;
    mobileNo: string;
    issue_description: string;
    priority_level: number;
    status: string;
  }
  
export default function Ticket({ ticketID,
    mobileNo,
    issue_description,
    priority_level,
    status} : { ticketID : string, mobileNo: string, issue_description: string, priority_level: string, status: string}) {
  const getPriorityColor = (level: any) => {
    switch (level) {
      case 1: return 'bg-red-500'
      case 2: return 'bg-orange-500'
      case 3: return 'bg-yellow-500'
      case 4: return 'bg-green-500'
      default: return 'bg-blue-500'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open': return 'bg-blue-500'
      case 'in progress': return 'bg-yellow-500'
      case 'resolved': return 'bg-green-500'
      case 'closed': return 'bg-gray-500'
      default: return 'bg-purple-500'
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Ticket Details</CardTitle>
        <Badge variant="outline" className={`text-white ${getStatusColor(status)} ml-4`}>
          {status}
        </Badge>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center space-x-4">
          <Hash className="h-5 w-5 text-gray-500" />
          <div>
            <p className="text-sm font-medium text-gray-500">Ticket ID</p>
            <p className="text-lg font-semibold">{ticketID}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Phone className="h-5 w-5 text-gray-500" />
          <div>
            <p className="text-sm font-medium text-gray-500">Mobile Number</p>
            <p className="text-lg font-semibold">{mobileNo}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <AlertCircle className="h-5 w-5 text-gray-500" />
          <div>
            <p className="text-sm font-medium text-gray-500">Issue Description</p>
            <p className="text-lg font-semibold">{issue_description}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <BarChart2 className="h-5 w-5 text-gray-500" />
          <div>
            <p className="text-sm font-medium text-gray-500">Priority Level</p>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold">{priority_level}</span>
              <div className={`w-3 h-3 rounded-full ${getPriorityColor(priority_level)}`}></div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <CheckCircle2 className="h-5 w-5 text-gray-500" />
          <div>
            <p className="text-sm font-medium text-gray-500">Status</p>
            <p className="text-lg font-semibold capitalize">{status}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

