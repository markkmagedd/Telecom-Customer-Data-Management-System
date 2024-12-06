"use server"
import { CustomerAccount } from "@/components/customer-account";

export default async function Page({ params, searchParams } : { params: { walletId:string }, searchParams: { startDate: string, endDate: string} } ) {
    console.log(await(searchParams.startDate), await(searchParams.endDate));
    const res = await fetch("http://localhost:8080/wallet-transfer-amount", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            walletId: params.walletId,
            startDate: await(searchParams.startDate),
            endDate: await(searchParams.endDate)

        })
    });
    const data = await res.json(); 
    if(data.success === false) {
        return (
            <main className="p-6">
            <h1 className="font-bold text-lg">No Data found</h1>
            </main>
        )
    }
    return (
        <main className="p-6">
        {/* {JSON.stringify(data)} */}
        <h1 className="font-bold text-lg">
            Average of sent Transaction amounts for wallet {params.walletId} from {searchParams.startDate} to {searchParams.endDate} is : {data.data[0]["result"]}
        </h1>
        </main>
    )
}