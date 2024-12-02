export default async function Page({ params } : { params: { mobileNo: string}}) {
    const res = await fetch('http://localhost:8080/wallet-mobileno', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            mobileNum: params.mobileNo
        })
    })
    const data = await res.json();
    if(data.sucess === false) {
        return (
            <main className="p-6">
            <h1 className="font-bold text-lg">{data.error}</h1>
            </main>
        )
    }
    return (
        <main className="p-6">
        {
            data.data[0]["result"] === true
            && 
            <>
            <h1 className="font-bold text-lg">{params.mobileNo} is linked to a wallet.</h1>
            </>
        }
        {
            data.data[0]["result"] === false
            && 
            <>
            <h1 className="font-bold text-lg">{params.mobileNo} is not linked to a wallet.</h1>
            </>
        }
        </main>
    )
}