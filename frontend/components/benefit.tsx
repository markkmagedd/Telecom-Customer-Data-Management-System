import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface BenefitProps {
  benefitID: number
  description: string
  validity_date: string
  status: "active" | "inactive"
  mobileNo: string | null
}

export function Benefit({ benefitID, description, validity_date, status, mobileNo }: BenefitProps) {
  const validityDate = new Date(validity_date)
  const formattedDate = validityDate.toLocaleDateString("en-US", {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Benefit #{benefitID}</CardTitle>
          <Badge variant={status === "active" ? "default" : "secondary"}>{status}</Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Valid until: <span className="font-medium text-foreground">{formattedDate}</span>
        </p>
      </CardContent>
      {mobileNo && (
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            Associated mobile: <span className="font-medium text-foreground">{mobileNo}</span>
          </p>
        </CardFooter>
      )}
    </Card>
  )
}

