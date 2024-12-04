import { NationalIdInput } from "@/components/national-id";
import { PlanCard } from "@/components/plan-card";

export default async function Page({ params } : { params: { mobileNo: string}}) {
    return (
        <main className="p-6">
            <h1 className="font-bold text-3xl">Cashbacks</h1>
            <div className="mt-4">
            <NationalIdInput />
            </div>
        </main>
    )
}