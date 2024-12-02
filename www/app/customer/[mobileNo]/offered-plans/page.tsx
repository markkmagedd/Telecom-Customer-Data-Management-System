import { PlanCard } from "@/components/plan-card";

export default async function Page({ params } : { params: { mobileNo: string}}) {
    const result = await fetch('http://localhost:8080/unsubscribed-plans', {
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
            <h1 className="font-bold text-3xl">Offered Plans :</h1>
            <div className="flex flex-row gap-4 mt-4">
            {
                data.data.map((plan: any) => {
                    return (
                        <div key={plan.planID} className="flex">
                        <PlanCard name={plan.name} description={plan.description} price={plan.price} smsOffered={plan.SMS_offered} minutesOffered={plan.minutes_offered} dataOffered={plan.data_offered}/>
                        </div>
                    )
                })
            }
            </div>
        </main>
    )
}