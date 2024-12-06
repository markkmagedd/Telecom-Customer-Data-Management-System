"use server"
import { ProfileComponent } from "@/components/profile-card";
import { Profile } from "@/components/profile-card";

export default async function Page() {
    const res = await fetch('http://localhost:8080/all-customer-accounts');
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
        <h1 className="font-bold text-3xl">Customers Profiles</h1>
        <div className="flex flex-col gap-4 mt-4 content-start items-start">
        {data.data.map((account:any) => {
            return (
                <div className="flex content-start" key={account.nationalID}>
                <Profile address={account.address} balance={account.balance} date_of_birth={account.date_of_birth} start_date={account.start_date} status={account.status} nationalID={account.nationalID} email={account.email} points={account.points} account_type={account.account_type} firstName={account.first_name} lastName={account.last_name} mobileNumber={account.mobileNo}/>
                </div>
            )
        })}
        </div>
        </main>
    )
}