import { PlanCard } from "@/components/plan-card";
import TransactionCard from "@/components/transaction";

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
            <div className="gap-4 mt-4">
            <h1 className="font-bold text-lg">Top 10 Successful Payments :</h1>
            <div className="flex flex-wrap gap-4 mt-4 items-center justify-center">
            {
                data.data.map((payment: any, index: any) => {
                    return (
                        <div className="flex flex-auto" key={index}>
                        <TransactionCard amount={payment.amount} method={payment.payment_method} date={payment.date_of_payment} status={payment.status} mobileNo={payment.mobileNo} /> 
                        </div>
                    )
                })
            }
            </div>
            </div>
        </main>
    )
}