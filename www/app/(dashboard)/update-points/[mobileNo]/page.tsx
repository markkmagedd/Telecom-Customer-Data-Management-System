export default async function Page({ params } : { params: { mobileNo: string }}) {
    const res = await fetch('http://localhost:8080/total-points-account', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            mobileNum: params.mobileNo
        })
    });
    const data = await res.json();
    if(data.success === false) {
        return (
            <main className="p-6">
                <h1 className="font-bold text-lg">{data.error}</h1>
            </main>
        )
    }
    return (
        <main className="p-6">
        {/* {JSON.stringify(data)} */}
        {
            data.success === true 
            &&
            <>
            <h1 className="font-bold text-lg">Points Updated Successfully</h1>
            </>
        }
        </main>
    )
}