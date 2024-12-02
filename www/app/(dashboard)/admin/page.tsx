import { AcceptedPaymentsInput } from "@/components/accepted-payments-input";
import { AccountInput } from "@/components/account-input";
import { AverageTransactionInput } from "@/components/average-transaction-input";
import { MobileDateInput } from "@/components/mobile-date-input";
import { RemoveBenefitsInput } from "@/components/remove-benefits";
import { ListSmsInput } from "@/components/sms-input";
import { WalletIdInput } from "@/components/wallet-id-input";
import { LinkedInput } from "@/components/linked-input";

export default async function Page() {
    return (
        <main className="p-6">
        <h1 className="font-bold text-3xl">Admin Page</h1>
        <h1 className="font-bold text-lg mt-4">Show accounts subscribed to plan id, on date</h1>
        <div className="flex flex-col gap-4 mt-4">
        <AccountInput />
        <h1 className="font-bold text-lg">Show Usage By Number</h1>
        <MobileDateInput />
        <h1 className="font-bold text-lg">Delete All Benefits</h1>
        <RemoveBenefitsInput />
        <h1 className="font-bold text-lg">List All SMS</h1>
        <ListSmsInput />
        <h1 className="font-bold text-lg">Number of Accepted Payments</h1>
        <AcceptedPaymentsInput />
        <h1 className="font-bold text-lg">Show Amount of Cashback Returned</h1>
        <WalletIdInput />
        <h1 className="font-bold text-lg">Show Average of Sent Transactions</h1>
        <AverageTransactionInput />
        <h1 className="font-bold text-lg">Show if Number is linked to wallet</h1>
        <LinkedInput />
        </div>
        </main>
    )
}