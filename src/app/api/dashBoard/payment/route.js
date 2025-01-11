import dbConnect from "@/app/lib/BbConnect/connect";
import Payment from "@/app/lib/model/payment/payment";
import { NextResponse } from "next/server";

export async function POST(req) {
    const data = await req.json();
     
    
    await dbConnect();
  
     const findData = await Payment.findOne({ userId:data.userId })
         if(!findData){
             try {
               const newUser = await Payment.create({ ...data }); 
               const response = NextResponse.json({ msg: "category created successful", status: "ok" }); 
               return response;
       
               
             } catch (error) {
               return NextResponse.json({ status: "false", msg: error.message }, { status: 400 });
             }
       
         }
         else{
           return NextResponse.json({ status: "false", msg: "already user" }, { status: 400 });
         }
       
  
    
   
  
  }
  
  export async function GET(req) { 
    await dbConnect();
  
    const result = await Payment.find({})
    if(!result){
       
        return NextResponse.json({ status: "false", msg: error.message }, { status: 400 });
  
    }
    else{
      return  NextResponse.json({status:"success",data:result}); 
      
    }
  
  }