import { PlanCard } from "@/components/plan-card";
export default async function Home() {
  const res = await fetch('http://localhost:8080/all-service-plans');
  const data = await res.json();
  return (
    <main className="p-6">
    <h1 className="font-bold text-3xl text-center mt-4">Plans Offered</h1>
    <div className="flex flex-wrap gap-4 mt-8">
    {data.data.map((plan: any) => {
      return (
        <div key={plan.id} className="flex-auto">
        <PlanCard name={plan.name} price={plan.price} smsOffered={plan.SMS_offered} minutesOffered={plan.minutes_offered} dataOffered={plan.data_offered} description={plan.description} />
        </div>
      )
    })}
    </div>
    </main>
  )
}