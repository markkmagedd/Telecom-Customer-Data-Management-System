import { PlanCard } from "@/components/plan-card";

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
            <h1 className="font-bold text-3xl">Unsubscribed Plans</h1>
            <div className="flex gap-4 mt-4">
            {/* {JSON.stringify(data.data)} */}
            {
                data.data.map((consumption: any, index: any) => {
                    return (
                        <div className="flex flex-row" key={index}>
                        <h1 className="font-bold text-lg">Data Consumed : {consumption.data_consumption}</h1>
                        <h1 className="font-bold text-lg">Minutes Used : {consumption.minutes_used}</h1>
                        <h1 className="font-bold text-lg">SMS Sent : {consumption.SMS_sent}</h1>
                        </div>
                    )
                })
            }
            </div>
        </main>
    )
}