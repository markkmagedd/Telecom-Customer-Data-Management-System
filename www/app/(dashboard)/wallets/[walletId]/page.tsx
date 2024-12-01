

export default async function Page() {
    const res = await fetch('http://localhost:8080/cashback-number')
    return (
        <main className="p-6">
        <h1 className="font-bold text-2xl">Work In Progress Cashback Wallet page.</h1>
        </main>
    )
}