"use server"
import { CustomerAccount } from "@/components/customer-account";

export default async function Page({ params } : { params: { mobileNo:string } } ) {
    const res = await fetch("http://localhost:8080/account-payment-points", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            mobileNum: params.mobileNo
        })
    });
    const data = await res.json(); 
    return (
        <main className="p-6">
        <h1 className="font-bold text-xl">Accepted Transactions during the last year : {data.data[0][""][0]}</h1>
        <h1 className="font-bold text-xl">Total amount of earned points : {data.data[0][""][1]}</h1>
        </main>
    )
}