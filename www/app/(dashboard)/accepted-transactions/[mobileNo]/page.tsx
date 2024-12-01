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
    console.log(data);
    return (
        <main className="p-6">
        {JSON.stringify(data)}
        </main>
    )
}