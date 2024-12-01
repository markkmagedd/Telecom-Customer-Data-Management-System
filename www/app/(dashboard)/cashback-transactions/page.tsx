export default async function Page() {
    const res = await fetch('http://localhost:8080/cashback-number');
    const data = await res.json();
    if(data.success === false) {
        return (
            <>
            {data.error}
            </>
        )
    }
    return (
        <main className="m-6">
        {
            data.data.map((wallet:any) => {
                return (
                    <>
                    <h1>Wallet ID : {wallet.walletID}, Count of Transactions : {wallet["count of transactions"]}</h1>
                    </>
                )
            })
        }
        </main>
    )
}