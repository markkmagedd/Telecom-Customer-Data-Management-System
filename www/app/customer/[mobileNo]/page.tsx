

export default async function Page({ params } : { params: { mobileNo:string } }) {
    return (
        <>
        {params.mobileNo}
        </>
    )
}