import { PlanCard } from "@/components/plan-card";

export default async function Page({ params } : { params: { mobileNo: string}}) {
    const result = await fetch(`http://localhost:8080/top-successful-payments/${await(params.mobileNo)}`, {
        method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
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
            <h1 className="font-bold text-3xl">Overview</h1>
            <div className="flex flex-row gap-4 mt-4">
            {JSON.stringify(data.data)}
            </div>
        </main>
    )
}