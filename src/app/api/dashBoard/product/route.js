import dbConnect from "@/app/lib/BbConnect/connect";
import Product from "@/app/lib/model/product/product";
import { NextResponse } from "next/server";

export async function POST(req) {
    const data = await req.json(); 
    await dbConnect();
  
    const findData = await Product.findOne({ name:data.name })
    if(!findData){
        try {
          const newProduct = await Product.create({ ...data }); 
          const response = NextResponse.json({ status:"success",data:newProduct}); 
          return response;
  
          
        } catch (error) {
          return NextResponse.json({ status: "fail", msg:"something went wrong" }, { status: 400 });
        }
  
    }
    else{
      return NextResponse.json({ status: "fail", data: "Something went wrong" }, { status: 400 });
    }
  
  }





  
  export async function GET(req) { 
    await dbConnect();
  
    const result = await Product.find({})
    if(!result){
       
        return NextResponse.json({ status: "fail",data:"Something went wrong"}, { status: 400 });
  
    }
    else{
      return  NextResponse.json({status:"success",data:result}); 
      
    }
  
  }
  