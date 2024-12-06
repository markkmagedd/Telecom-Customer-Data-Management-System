"use server"
import Ticket from "@/components/ticket";

export default async function Page() {
    const data = await fetch("http://localhost:8080/all-resolved-tickets");
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
        <h1 className="font-bold text-3xl">Tickets</h1>
        <div className="flex flex-row gap-4 mt-4">
        {
            res.data.map((ticket: any, index: any) => {
                return (
                    <div className="flex items-start" key={index}>
                    <Ticket ticketID={ticket.ticketID} mobileNo={ticket.mobileNo} issue_description={ticket.issue_description} priority_level={ticket.priority_level} status={ticket.status}/>
                    </div>
                )
            })
        }
        </div>
        </main>
    )
}

