"use client"
import { useState } from "react"

const LoginCard = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleLogin = async(e) => {
        e.preventDefault()

        let data = await fetch("/api/user/login",{
            method : "POST",
            body:JSON.stringify({email,password}),
            headers:{
                "Content-Type" : "application/json"
            }
        })
        data = await data.json();
        alert(data.msg)
    }
   

  return (
    <div className="bg-violet-600 p-3 rounded">
    <form method="post" className="flex flex-col" onSubmit={handleLogin}>
    <div className="mb-3 flex flex-col">
    <label htmlFor="email">Email</label>
    <input type="email" className="border px-3 py-2 rounded-sm" value={email} onChange={(e) => setEmail(e.target.value)}></input>
    </div>
    <div className="mb-3 flex flex-col">
    <label htmlFor="password">Password</label>
    <input type="password" className="border px-3 py-2 rounded-sm" value={password} onChange={(e) => setPassword(e.target.value)}></input>
    </div>
    <div className="mb-3 flex justify-center mt-1">
    <button type="submit" className="bg-green-600 hover:bg-green-500 text-white px-3 py-2 rounded">Login</button>
    </div>
    </form>
    </div>
  )
}

export default LoginCard