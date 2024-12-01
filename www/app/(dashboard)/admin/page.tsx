import { AcceptedPaymentsInput } from "@/components/accepted-payments-input";
import { AccountInput } from "@/components/account-input";
import { MobileDateInput } from "@/components/mobile-date-input";
import { RemoveBenefitsInput } from "@/components/remove-benefits";
import { ListSmsInput } from "@/components/sms-input";

export default async function Page() {
    return (
        <main className="p-6">
        <h1 className="font-bold text-3xl">Admin Page</h1>
        <div className="flex flex-col gap-4 mt-4">
        <AccountInput />
        <h1 className="font-bold text-xl">Show Usage By Number</h1>
        <MobileDateInput />
        <h1 className="font-bold text-xl">Delete All Benefits</h1>
        <RemoveBenefitsInput />
        <h1 className="font-bold text-xl">List All SMS</h1>
        <ListSmsInput />
        <h1 className="font-bold text-xl">Number of Accepted Payments</h1>
        <AcceptedPaymentsInput />
        </div>
        </main>
    )
}