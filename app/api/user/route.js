import User from "@/app/models/User";
import DbConnect from "@/app/utils/DbConnect";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

DbConnect()

export async function POST(req) {
   let {name,email,password} = await req.json()

    const hashedPassword = await bcrypt.hash(password,8)

   let userData = new User({name,email,password:hashedPassword})

   try{
    await userData.save();
    return NextResponse.json({userData,"msg":"created successfully"})
   }
   catch(e) {
    return NextResponse.json({"msg":"something went wrong"})
   }
}