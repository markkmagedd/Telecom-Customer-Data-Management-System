"use server"
import { CustomerAccount2 } from "@/components/customer-account";

export default async function Page({ params, searchParams } : { params: { planId:string }, searchParams?: { date: string | undefined }; } ) {
    const res = await fetch("http://localhost:8080/account-plan-date", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            planId: params.planId,
            date: searchParams?.date
        })
    });
    const data = await res.json(); 
    if(data.success === false) {
        return (
            <main className="p-6">
            <h1 className="font-bold text-lg">{data.error}</h1>
            </main>
        )
    }
    return (
        <main className="p-6">
        {
            data.data.length === 0 
            && 
            <>
             <h1 className="font-bold text-xl">No Customer account Found!</h1>
            </>
        }
        {
            data.data.map((account:any) => {
                return (
                    <div key={account.mobileNo}>
                    <CustomerAccount2 mobileNumber={account.mobileNo} nationalID={account.nationalID} name={account.name} description={`Plan ID : ${account.planID}`} />
                    </div>
                )
            })
        }
        </main>
    )
}