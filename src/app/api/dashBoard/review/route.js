import dbConnect from "@/app/lib/BbConnect/connect";
import Review from "@/app/lib/model/review/review";
import { NextResponse } from "next/server";

export async function POST(req) {
    const data = await req.json();
  
     
    
    await dbConnect();
  
     const findData = await Review.findOne({ orderId:data.orderId })
         if(!findData){
             try {
               const newUser = await Review.create({ ...data }); 
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
  
export async function PATCH(req) {
    const data = await req.json();
  
     
    
   
      try {
               await dbConnect();
             
                const result = await Review.findByIdAndUpdate(data.reviewId,{
                  comment:data.comment
                },{
                  new:true
                })
               
               return NextResponse.json({status:"success",data:result }); 
               
       
               
             } catch (error) {
               return NextResponse.json({ status: "false", msg: error.message }, { status: 400 });
             }
       
         }

  

  
export async function DELETE(req) {
    const data = await req.json();
  
     
 
      try {
               await dbConnect();
             
                const result = await Review.findByIdAndDelete(data.reviewId)
               
               return NextResponse.json({status:"success",data:result }); 
               
       
               
             } catch (error) {
               return NextResponse.json({ status: "false", msg: error.message }, { status: 400 });
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