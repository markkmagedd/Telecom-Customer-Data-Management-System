import { ExtraAmountInput } from "@/components/extra-amount-input";

export default async function Page({ params } : { params: { mobileNo: string}}) {
    return (
        <main className="p-6">
        <h1 className="font-bold text-3xl">Display the extra amount for the last payment</h1>
        <div className="mt-4">
        <ExtraAmountInput mobileNum={await(params.mobileNo)} />
        </div>
        </main>
    )
}