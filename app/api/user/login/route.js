import User from "@/app/models/User";
import DbConnect from "@/app/utils/DbConnect";
import { NextResponse } from "next/server";
import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import bcrypt from "bcryptjs"

DbConnect()
export async function POST(request) {
  const {email,password} = await request.json()
  const user = await User.findOne({email:email})
  if(user) {
    const isPassword = await bcrypt.compare(password,user.password);

     if(isPassword) {
        const token = sign({_id:user._id},"PainInMyHe@d")
        const serialized = serialize("cookie_name",token,{
            httpOnly : true,

        })
    return new NextResponse(JSON.stringify({user,msg:"login successfully"}),{headers:{"Set-Cookie":serialized}}

    ) }

     else {
        return NextResponse.json({msg:"wrong email or password"})
     }
  }

  else {
    return NextResponse.json({"msg":"user does not exist please register"})
  }
} 