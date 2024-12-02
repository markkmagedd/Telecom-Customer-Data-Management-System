

export default async function Page({ params } : { params: { mobileNo:string } }) {
    return (
        <main className="p-6">
        <h1 className="font-bold text-3xl">Hello, {params.mobileNo} 👋🏼</h1>
        </main>
    )
}