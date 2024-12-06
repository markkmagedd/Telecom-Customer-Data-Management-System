import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ShopProps {
  shopID: number
  name: string
  category: string
}

export function ShopCard({ shopID, name, category }: ShopProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{name}</CardTitle>
          <Badge className="rounded-md" variant="secondary">{category}</Badge>
        </div>
        <CardDescription>Shop ID: {shopID}</CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
    </Card>
  )
}

