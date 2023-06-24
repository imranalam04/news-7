import Post from '@/app/models/Post'

import DbConnect from '@/app/utils/DbConnect';
import { NextResponse } from 'next/server';

DbConnect()

export async function GET(req,{params}) {
 let {postid} = params;
 let data = await Post.findById(postid)
 return NextResponse.json({data})
}


export async function DELETE(req,{params}){
    let {postid} = params;
    let data = await Post.findByIdAndDelete(postid);
    return NextResponse.json({data,"msg":"Data Deleted Successfully"});
}

// for edit the record 

export async function PUT(req,{params}) {
    let {postid} = params;
    let data = await req.json();
    let updatedData;

    try{
        let updatedData = await Post.findByIdAndUpdate(postid,data)
    }
    catch(e) {
        return NextResponse.json({"msg":e.message})
    }
    return NextResponse.json({updatedData,"msg":"data updated successfully"})
}




