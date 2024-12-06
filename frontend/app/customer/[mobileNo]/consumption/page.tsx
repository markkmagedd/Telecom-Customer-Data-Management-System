import { ViewAll } from "@/components/view-all-user";

export default async function Page() {
    return (
        <main className="p-6">
        <h1 className="font-bold text-3xl">View Total Consumption from certain date</h1>
        <div className="mt-4">
        <ViewAll />
        </div>
        </main>
    )
}