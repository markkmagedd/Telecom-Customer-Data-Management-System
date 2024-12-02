import { ShopCard } from "@/components/shop-card";

export default async function Page() {
    const res = await fetch('http://localhost:8080/all-shops');
    const data = await res.json();
    return (
        <main className="p-6">
        <h1 className="font-bold text-3xl">All Shops</h1>
        <div className="flex flex-wrap gap-4 mt-4">
        {
            data.data.map((shop: any) => {
                return (
                    <div className="flex flex-auto" key={shop.shopID}>
                    <ShopCard shopID={shop.shopID} name={shop.name} category={shop.Category}/>
                    </div>
                )
            })
        }
        </div>
        </main>
    )
}