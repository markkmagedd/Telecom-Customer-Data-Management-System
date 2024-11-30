

export default function Page({ params, searchParams } : { params: { planId:string }, searchParams?: { date: string | undefined }; } ) {
    return (
        <>
        {params.planId}
        {JSON.stringify(searchParams)}
        </>
    )
}