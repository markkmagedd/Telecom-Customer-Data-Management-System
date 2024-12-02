"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "./ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"

export function Login() {
    const [ username, setUsername ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");
    const [ mobileNumber, setMobileNumber ] = useState<string>("");
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ error, setError ] = useState<string>("");
    const [ response, setResponse ] = useState<string>("");
    const loginToCustomerAccount = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      const res = await fetch('http://localhost:8080/account-login-validation', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            mobileNum: mobileNumber,
            password: password
        })
      })
      const data = await res.json();
      if(data.success === false ) {
        setError(data.error);
        toast(data.error);
      } else {
        setResponse("Logged In Successfully")
        toast("Logged in Successfully")
        setError("");
      }
      setLoading(false);
      console.log(data);
    }
  return (
    <Tabs defaultValue="customer" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="customer">Customer</TabsTrigger>
        <TabsTrigger value="admin">Admin</TabsTrigger>
      </TabsList>
      <TabsContent value="customer">
        <Card className="">
          <CardHeader>
            <CardTitle>Customer Portal</CardTitle>
            <CardDescription>
              Login to your customer account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <form autoComplete="off" onSubmit={loginToCustomerAccount}>
            <div className="space-y-1">
              <Label>Mobile Number</Label>
              <Input required type="number" placeholder="01207451280" autoComplete="off" value={mobileNumber} onChange={((e) => {setMobileNumber(e.target.value)})} />
            </div>
            <div className="space-y-1">
              <Label>Password</Label>
              <Input required type="text" value={password} onChange={((e) => {setPassword(e.target.value)})} />
            </div>
            <div className="mt-4">
            {
              loading 
              ?
              <>
              <Button className="w-full" type="submit" disabled><Loader2 className="size-4 mr-2 animate-spin" />Logging In</Button>
              </>
              : 
              <>
              <Button className="w-full" type="submit">Login</Button>
              </>
            }
            {
              error &&
              <div className="mt-4 w-full rounded-md text-center p-2 bg-destructive">
              <h1 className="font-bold">{error}</h1>
              </div>
            }
            {
              response &&
              <div className="mt-4 w-full rounded-md text-center p-2 bg-green-500">
              <h1 className="font-bold">{response}</h1>
              </div>
            }
            </div>
            </form>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="admin">
        <Card>
          <CardHeader>
            <CardTitle>Admin Portal</CardTitle>
            <CardDescription>
              Login to your admin account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Username</Label>
              <Input type="text" placeholder="John Doe" value={username} onChange={((e) => {setUsername(e.target.value)})} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Password</Label>
              <Input type="password" value={password} onChange={((e) => {setPassword(e.target.value)})} />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Login</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
