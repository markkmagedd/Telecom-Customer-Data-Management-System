import { Benefit } from "@/components/benefit";
import { PlanCard } from "@/components/plan-card";

export default async function Page({ params } : { params: { mobileNo: string}}) {
    const result = await fetch('http://localhost:8080/all-benefits');
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
            <h1 className="font-bold text-3xl">Active Benefits</h1>
            <div className="flex flex-wrap gap-4 mt-4">
            {/* {JSON.stringify(data.data)} */}
            {
                data.data.map((benefit: any, index: any) => {
                    return (
                        <div className="flex flex-auto" key={index}>
                        <Benefit benefitID={benefit.benefitID} description={benefit.description} validity_date={benefit.validity_date} status={benefit.status} mobileNo={benefit.mobileNo} />
                        </div>
                    )
                })
            }
            </div>
        </main>
    )
}