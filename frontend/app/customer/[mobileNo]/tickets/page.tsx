import { PlanCard } from "@/components/plan-card";
import { NationalIdTickets } from "@/components/national-id-tickets";

export default async function Page({ params } : { params: { mobileNo: string}}) {
    return (
        <main className="p-6">
            <h1 className="font-bold text-3xl">Unresolved Tickets</h1>
            <div className="mt-4">
            <NationalIdTickets />
            </div>
        </main>
    )
}