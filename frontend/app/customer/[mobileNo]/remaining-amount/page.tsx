import { RemainingAmountInput } from "@/components/remaining-amount-input";

export default async function Page({ params } : { params: { mobileNo: string}}) {
    return (
        <main className="p-6">
        <h1 className="font-bold text-3xl">View Remaining Amount For last Payment</h1>
        <div className="mt-4">
        <RemainingAmountInput mobileNum={await(params.mobileNo)} />
        </div>
        </main>
    )
}