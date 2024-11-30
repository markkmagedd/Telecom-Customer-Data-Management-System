"use server"
import { CustomerAccount } from "@/components/customer-account";

export default async function Page({ params, searchParams } : { params: { mobileNo:string }, searchParams?: { date: string | undefined }; } ) {
    const res = await fetch("http://localhost:8080/account-usage-plan", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            mobileNum: params.mobileNo,
            date: searchParams?.date
        })
    });
    const data = await res.json(); 
    console.log(data);
    return (
        <main className="p-6">
        {
            data.data.length === 0 
            && 
            <>
             <h1 className="font-bold text-xl">No Customer account Found!</h1>
            </>
        }
        <div className="flex flex-col space-y-3">
        <h1 className="font-bold text-xl">Total Usage Since {searchParams?.date}</h1>
        <p className="text-muted-foreground">{JSON.stringify(data.data[0])}</p>
        </div>
        </main>
    )
}