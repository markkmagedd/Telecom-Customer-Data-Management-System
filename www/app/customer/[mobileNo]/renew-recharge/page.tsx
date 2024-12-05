import { RechargeSubscription } from "@/components/recharge-input";
import { RenewSubscription } from "@/components/renew-subscription";

export default async function Page({ params } : { params: { mobileNo: string}}) {
    return (
        <main className="p-6">
        <h1 className="font-bold text-3xl">Renew Subscription</h1>
        <div className="mt-4">
        <RenewSubscription mobileNum={await(params.mobileNo)} />
        <h1 className="font-bold text-3xl mt-8">Recharge Account</h1>
        <div className="mt-4">
        <RechargeSubscription />
        </div>
        </div>
        </main>
    )
}