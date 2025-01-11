import dbConnect from "@/app/lib/BbConnect/connect";
import Review from "@/app/lib/model/review/review";
import { NextResponse } from "next/server";

export async function PATCH(req) {
    try{
        const data = await req.json()
        if(!data.reviewId || !data.status){
            return NextResponse.json({status:"fail",data:"please provide valid id and status"})
        }
        await dbConnect()
        let result = await Review.findByIdAndUpdate(data.reviewId,
            {status:data.status},
            {new:true}
        )
        if(!result){
            return NextResponse.json({status:"fail",data:"review not found"})
        }
        return NextResponse.json({status:"success",data:result})

    }
    catch(e){
        return NextResponse.json({status:"fail",data:e})
    }
}     
  
    
   
 
  
  export async function GET(req) { 
    await dbConnect();
  
    const result = await Review.find({})
    if(!result){
       
        return NextResponse.json({ status: "false", msg: error.message }, { status: 400 });
  
    }
    else{
      return  NextResponse.json({status:"success",data:result}); 
      
    }
  
  }