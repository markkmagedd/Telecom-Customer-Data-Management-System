"use client"

export function StoreCard({ shopId, voucherId, voucherValue, working_hours } : { shopId: string, voucherId: string, voucherValue: string, working_hours: string}) {
    return (
        <>
        <div 
        className="w-full flex border border-foreground/20 hover:border-foreground/30 rounded-lg items-center duration-300 pt-3 pb-3">
        <div className="mx-5 my-3 flex flex-col items-start text-left">
        <p className='sm:text-lg text-md font-bold text-left text-black dark:text-white'>
         Store ID : {shopId}  
        </p>
        <div className="mt-1 flex">
        <p className="text-sm text-muted-foreground">Voucher ID : {voucherId}, Voucher Value : {voucherValue}</p>
        </div>
        </div>
        <div className="ml-auto mr-5">
          {/* <Button size={"icon"} variant={"outline"} className="rounded-lg bg-inherit border border-foreground/20"> */}
            {working_hours}
          {/* </Button> */}
        </div>
        </div>
        </>
    )
}