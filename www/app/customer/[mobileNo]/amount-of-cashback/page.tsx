import { AmountOfCashback } from "@/components/amount-of-cashback";

export default async function Page({ params } : { params: { mobileNo: string}}) {
    return (
        <main className="p-6">
        <h1 className="font-bold text-3xl">Amount of cashback</h1>
        <div className="mt-4">
        <AmountOfCashback mobileNum={await(params.mobileNo)} />
        </div>
        </main>
    )
}