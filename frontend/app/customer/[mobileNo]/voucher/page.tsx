import { PlanCard } from "@/components/plan-card";

export default async function Page({ params } : { params: { mobileNo: string}}) {
    const result = await fetch(`http://localhost:8080/account-highest-voucher/${await(params.mobileNo)}`, {
        method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
    });
    const data = await result.json();
    if(data.success === false) {
        return (
            <main className="p-6">
                <h1 className="font-bold text-xl">{data.error}</h1>
            </main>
        )
    }
    return (
        <main className="p-6">
            <h1 className="font-bold text-3xl">Highest Value Voucher</h1>
            <div className="flex flex-row gap-4 mt-4">
            {
                data.data.map((voucher: any, index: any) => {
                    return (
                        <div key={index}>
                            <h1 className="font-bold text-lg">Voucher ID : {voucher.voucherID}</h1>
                        </div>
                    )
                })
            }
            </div>
        </main>
    )
}