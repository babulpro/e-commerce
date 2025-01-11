import dbConnect from "@/app/lib/BbConnect/connect";
import Category from "@/app/lib/model/category/category";
import { NextResponse } from "next/server";

export async function POST(req) {
    const data = await req.json(); 
    await dbConnect();
  
    const category = await Category.findOne({ name:data.name })
    if(!category){
        try {
          const newUser = await Category.create({ ...data }); 
          return NextResponse.json({  status: "success",data:newUser }); 
          
  
          
        } catch (error) {
          return NextResponse.json({ status: "fail", msg: error.message }, { status: 400 });
        }
  
    }
    else{
      return NextResponse.json({ status: "false", msg: "already user" }, { status: 400 });
    }
  
  }
  
export async function GET(req) { 
    await dbConnect();
  
    const result = await Category.find({})
    if(!result){
       
        return NextResponse.json({ status: "fail", msg:"something went wrong" }, { status: 400 });
  
    }
    else{
      return  NextResponse.json({status:"success",data:result}); 
      
    }
  
  }
  