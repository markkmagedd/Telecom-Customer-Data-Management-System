import { PlanCard } from "@/components/plan-card";
import TransactionCard from "@/components/transaction";
import { RedeemVoucher } from "@/components/redeem-voucher";

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
    const allserviceplans = await fetch(`http://localhost:8080/subscribed-plans-5-months/${await(params.mobileNo)}`, {
        method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
    })
    const ServicePlans = await allserviceplans.json();
    if(ServicePlans.success === false) {
        return (
            <main className="p-6">
                <h1 className="font-bold text-xl">{ServicePlans.error}</h1>
            </main>
        )
    }
    return (
        <main className="p-6">
            <h1 className="font-bold text-3xl">Overview</h1>
            <div className="mt-4">
            <RedeemVoucher mobileNum={await(params.mobileNo)} />
            </div>
            <div className="gap-4 mt-4">
            <h1 className="font-bold text-xl">Top 10 Successful Payments</h1>
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
            <h1 className="font-bold text-xl mt-4">Service Plans Subscribed to (in the last 5 months)</h1>
            <div className="flex flex-wrap gap-4 mt-4 items-center justify-center">
            {
                ServicePlans.data.map((plan: any, index: any) => {
                    return (
                        <div className="flex flex-auto" key={index}>
                        <PlanCard name={plan.name} smsOffered={plan.SMS_offered} minutesOffered={plan.minutes_offered} dataOffered={plan.data_offered} description={plan.description} price={plan.price}/> 
                        </div>
                    )
                })
            }
            </div>
            </div>
        </main>
    )
}