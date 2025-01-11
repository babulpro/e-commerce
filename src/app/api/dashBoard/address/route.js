import dbConnect from "@/app/lib/BbConnect/connect";
import address from "@/app/lib/model/address/address";
import Address from "@/app/lib/model/address/address";
import { NextResponse } from "next/server";

 
 
export async function POST(req) {
    const data = await req.json(); 
     
    await dbConnect();  
     const findData = await Address.findOne({ userId:data.userId })
    if(!findData){
        try {
          const result = await Address.create({ ...data }); 
          return NextResponse.json({ status:"success" ,data:result }); 
          
  
          
        } catch (error) {
          return NextResponse.json({ status: "fail", msg: "something went wrong" }, { status: 400 });
        }
  
    }
    else{
      return NextResponse.json({ status: "fail", msg: "address alredy saved" }, { status: 400 });
    }
  
  }
  
 
export async function PATCH(req) {
  
  const data = await req.json(); 
  
  try {
           
          await dbConnect();       
          const result = await Address.findByIdAndUpdate(data.addressId,
            { ...data }
          ,{new:true}); 
          return NextResponse.json({ status:"success" ,data:result }); 
          
  
          
        } catch (error) {
          return NextResponse.json({ status: "fail", msg: "something went wrong" }, { status: 400 });
        }
  
  
  }


  export async function PUT(req) { 
  try{
    let data =await req.json()
    await dbConnect()
    let result = await Address.find({userId:data.userId})
    return NextResponse.json({status:"success",data:result})

  }
  catch(e){
    return NextResponse.json({status:"fail",data:e})
  }
  
  }

  export async function GET(req) { 
    await dbConnect();
  
    const result = await Address.find({})
    if(!result){
       
        return NextResponse.json({ status: "false", msg: error.message }, { status: 400 });
  
    }
    else{
      return  NextResponse.json({status:"success",data:result}); 
      
    }
  
  }


 
  