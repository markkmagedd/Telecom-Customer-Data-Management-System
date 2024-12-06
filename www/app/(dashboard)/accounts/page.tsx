"use server"
import { CustomerAccount } from "@/components/customer-account";
import { AccountInput } from "@/components/account-input";
import { MobileDateInput } from "@/components/mobile-date-input";
import { RemoveBenefitsInput } from "@/components/remove-benefits";
import { ListSmsInput } from "@/components/sms-input";

export default async function Page() {
    const res = await fetch('http://localhost:8080/account-plan');
    const data = await res.json();
    if(data.success === false) {
        return (
            <>
            Something went wrong.
            </>
        )
    }
    return (
        <main className="p-6">
        <h1 className="font-bold text-3xl">Customers Accounts</h1>
        <div className="flex sm:flex-row flex-col gap-4 mt-4 items-start">
       {
        data.data.map((account:any) => {
            return (
                <div className="flex items-start" key={account.mobileNo}>
                    <CustomerAccount 
                    mobileNo={account.mobileNo} 
                    pass={account.pass} 
                    balance={account.balance} 
                    account_type={account.account_type} 
                    start_date={account.start_date} 
                    status={account.status} 
                    points={account.points} 
                    nationalID={account.nationalID} 
                    planID={account.planID} 
                    name={account.name} 
                    price={account.price} 
                    SMS_offered={account.SMS_offered} 
                    minutes_offered={account.minutes_offered} 
                    data_offered={account.data_offered} 
                    description={account.description} 
                    />
                </div>
            )
        })
       }
        </div>
        </main>
    )
}