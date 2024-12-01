import { Button } from "@/components/ui/button";
import { Wallet } from "@/components/wallet";
import {WalletCard} from "@/components/wallet";
import Link from "next/link";

export default async function Page() {
    const res = await fetch('http:localhost:8080/customer-wallet');
    const data = await res.json();
    return (
        <main className="p-6">
            <h1 className="font-bold text-2xl">Wallets</h1>
            <div className="mt-4">
            <Button asChild>
                <Link href="/cashback-transactions">
                View All Cashback Transactions
                </Link>
            </Button>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
            {
                data.data.map((wallet:any) => {
                    return (
                        <div className="flex flex-auto" key={wallet.walletID}>
                        <WalletCard walletId={wallet.walletID} firstName={wallet.first_name} lastName={wallet.last_name} mobileNumber={wallet.mobileNo} currentBalance={wallet.current_balance} currency={wallet.currency} />
                        </div>
                    )
                })
            }
            </div>
        </main>
    )
}