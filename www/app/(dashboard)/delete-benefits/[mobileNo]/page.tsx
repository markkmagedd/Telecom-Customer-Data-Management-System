"use server"
import { CustomerAccount } from "@/components/customer-account";

export default async function Page({ params, searchParams } : { params: { mobileNo:string }, searchParams?: { planId: string | undefined }; } ) {
    const res = await fetch("http://localhost:8080/benefits-account", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            mobileNum: params.mobileNo,
            planId: searchParams?.planId
        })
    });
    const data = await res.json(); 
    console.log(data);
    return (
        <main className="p-6">
        {/* {
            data.data.length === 0 
            && 
            <>
             <h1 className="font-bold text-xl">No Customer account Found!</h1>
            </>
        } */}
        {
            data.success === true 
            && 
            <>
            <h1 className="font-bold text-xl">Removed All Benefits</h1>
            </>
        } 
        {
            data.success === false 
            &&
            <>
            <h1 className="font-bold text-xl">Failed to remove all benefits</h1>
            </>
        } 
        {JSON.stringify(data)}
        </main>
    )
}