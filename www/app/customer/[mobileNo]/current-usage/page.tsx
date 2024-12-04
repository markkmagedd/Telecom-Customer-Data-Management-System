import { PlanCard } from "@/components/plan-card";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Page({ params } : { params: { mobileNo: string}}) {
    const result = await fetch('http://localhost:8080/usage-plan-current-month', {
        method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mobileNum: await(params.mobileNo)
            })
    });
    const data = await result.json();
    if(data.success === false) {
        return (
            <main className="p-6">
                <h1 className="font-bold text-xl">{data.error}</h1>
            </main>
        )
    }
    return (
        <main className="p-6">
            <h1 className="font-bold text-3xl">Current Usage</h1>
            <div className="gap-4 mt-4 flex flex-col">
            {/* {JSON.stringify(data.data)} */}
            {
                data.data.map((consumption: any, index: any) => {
                    return (
                        <Card className="" key={index}>
                        <CardHeader>
                            <CardTitle>Consumption</CardTitle>
                        </CardHeader>
                        <CardContent>
                        <h1 className="font-bold text-lg">Data Consumed : {consumption.data_consumption}</h1>
                        <h1 className="font-bold text-lg">Minutes Used : {consumption.minutes_used}</h1>
                        <h1 className="font-bold text-lg">SMS Sent : {consumption.SMS_sent}</h1>
                        </CardContent>
                        </Card>
                    )
                })
            }
            </div>
        </main>
    )
}