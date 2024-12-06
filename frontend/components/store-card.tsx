import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Store, Star, ExternalLink, Tag } from 'lucide-react'
import Link from 'next/link'

export function StoreCard({shopId, URL, rating, voucherID, value, working_hours} : { shopId: string, URL?: string, rating?: string, voucherID:string, value:string, working_hours?: string}) {
  const renderStars = (rating: any) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold flex items-center space-x-2">
          <Store className="h-6 w-6" />
          <span>Shop {shopId}</span>
        </CardTitle>
        <Badge variant="outline" className="text-blue-500 border-blue-500">
          Online
        </Badge>
      </CardHeader>
      <CardContent className="grid gap-4">
        {
          URL 
          ? 
          <>
          <div className="flex items-center space-x-2">
            <ExternalLink className="h-5 w-5 text-gray-500" />
            <Link href={URL} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Visit Store
            </Link>
          </div>
          </>
          : 
          <>
          </>
        }
        {
          rating
          ?
          <>
           <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 ml-4">
            {renderStars(rating)}
            <span className="text-sm text-gray-500 ml-2">({rating})</span>
          </div>
        </div>
          </>
          : 
          <>
          </>
        }
        <div className="bg-zinc-900 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 flex items-center space-x-2">
            <Tag className="h-5 w-5 text-green-500" />
            <span>Available Voucher</span>
          </h3>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Voucher ID {voucherID}</span>
            <span className="text-lg font-bold text-green-600">{value} EGP OFF</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

