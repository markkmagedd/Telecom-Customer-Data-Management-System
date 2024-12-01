"use server"
import { StoreCard } from "@/components/store-card";
import { Transaction } from "@/components/transaction";
import TransactionCard from "@/components/transaction";

export default async function Page() {
    const data = await fetch("http://localhost:8080/account-payments");
    const res = await data.json();
    if(res.success === false) {
        return (
            <>
            <p>{res.error}</p>
            </>
        )
    }
    return (
        <main className="p-6">
        <h1 className="font-bold text-3xl">Transactions</h1>
        <div className="flex gap-4">
        {/* <div>
            {
                res.data.map((store: any) => {
                    return (
                        <div key={store.shopID} className="mt-4">
                        <StoreCard shopId={store.shopID} voucherId={store.voucherID} voucherValue={store.value}  working_hours={store.working_hours} />
                        </div>
                    )
                })
            }
        </div> */}
        <div className="flex flex-wrap gap-4 mt-4">
            {
                res.data.map((transaction:any) => {
                    return (
                        <div className="flex flex-auto" key={transaction.paymentID}> 
                        {/* <Transaction paymentID={transaction.paymentID} amount={transaction.amount} date={transaction.date_of_payment} method={transaction.payment_method} status={transaction.status} mobileNo={transaction.mobileNo}/> */}
                        <TransactionCard amount={transaction.amount} date={transaction.date_of_payment} method={transaction.payment_method} status={transaction.status} mobileNo={transaction.mobileNo} />
                        </div>
                    )
                })
            }
        </div>
        </div>
        </main>
    )
}