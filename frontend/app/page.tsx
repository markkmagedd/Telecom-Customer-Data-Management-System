import { PlanCard } from "@/components/plan-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default async function Home() {
  const res = await fetch('http://localhost:8080/all-service-plans');
  const data = await res.json();
  return (
    <main className="p-6">
    <h1 className="font-bold text-3xl text-center mt-4">Plans Offered</h1>
    <div className="flex flex-auto mt-8 gap-8 items-center justify-center w-full">
    {data.data.map((plan: any) => {
      return (
        <div key={plan.name} className="flex">
        <PlanCard name={plan.name} price={plan.price} smsOffered={plan.SMS_offered} minutesOffered={plan.minutes_offered} dataOffered={plan.data_offered} description={plan.description} />
        </div>
      )
    })}
    </div>
    <div className="flex items-center justify-center self-center mt-4 gap-4">
    <Button asChild>
      <Link href={"/login"}>
      Login To Your Account
      </Link>
    </Button>
    <Button asChild>
      <Link href={"/shops"}>
      View All Shops
      </Link>
    </Button>
    </div>
    </main>
  )
}