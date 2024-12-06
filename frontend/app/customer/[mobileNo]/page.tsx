"use server"
import { CustomerAccount } from "@/components/customer-account";
import { ViewAll } from "@/components/view-all-user";

export default async function Page({ params } : { params: { mobileNo:string } } ) {
    return (
        <main className="p-6">
        <h1 className="font-bold text-3xl">Hello, {await(params.mobileNo)}</h1>
        </main>
    )
}