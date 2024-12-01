import { Wallet } from "@/components/wallet";

export default async function Page() {
    const res = await fetch('http:localhost:8080/customer-wallet');
    const data = await res.json();
    return (
        <main className="p-6">
            <h1 className="font-bold text-2xl">Wallets</h1>
            {/* {JSON.stringify(data.data)} */}
            <div className="flex flex-col gap-4 mt-4">
            {
                data.data.map((wallet:any) => {
                    return (
                        <div key={wallet.walletID}>
                        <Wallet firstName={wallet.first_name} lastName={wallet.last_name} mobileNumber={wallet.mobileNo} currentBalance={wallet.current_balance} currency={wallet.currency} />
                        </div>
                    )
                })
            }
            </div>
        </main>
    )
}