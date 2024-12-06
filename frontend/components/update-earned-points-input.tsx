"use client"
import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Link from "next/link"
import { redirect } from "next/navigation"

export function UpdateEarnedPointsInput() {
    const [ mobileNo, setMobileNo ] = useState<string>("");
    const redirectToAccounts = (e: React.FormEvent) => {
        e.preventDefault();
        redirect(`/update-points/${mobileNo}`);
    }
    return (
        <div className="flex w-full items-center gap-4">
            <form className="flex w-full items-center gap-4" onSubmit={redirectToAccounts}>
            <Input required placeholder="Mobile Number" value={mobileNo} onChange={((e) => {setMobileNo(e.target.value)})}/>
            <Button type="submit">
                Update Points
            </Button>
            </form>
        </div>
    )
}