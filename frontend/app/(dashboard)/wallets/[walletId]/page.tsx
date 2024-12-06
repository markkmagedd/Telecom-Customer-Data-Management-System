"use server"
import { CustomerAccount } from "@/components/customer-account";

export default async function Page({ params, searchParams } : { params: { walletId:string }, searchParams?: { planId: string | undefined }; } ) {
    const res = await fetch("http://localhost:8080/wallet-Cashback-amount", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            walletId: params.walletId,
            planId: searchParams?.planId
        })
    });
    const data = await res.json(); 
    if(data.success === false) {
        return (
            <>
            {data.error}
            </>
        )
    }
    return (
        <main className="p-6">
       <h1 className="font-bold text-xl">
        Cashback Amount Returned to Wallet {params.walletId}, on Plan {searchParams?.planId} is {data.data[0]["result"]}
       </h1>
        </main>
    )
}