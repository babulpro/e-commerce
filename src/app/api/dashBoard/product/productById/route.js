import { NextResponse } from "next/server";
import Product  from '@/app/lib/model/product/product';
import dbConnect from "@/app/lib/BbConnect/connect";

export async function GET(req) {

   
    try {
      let {searchParams}= new URL(req.url)
      let id = searchParams.get('id')        
         
          await dbConnect();
  
            const result = await Product.find({ _id:id })
           
           return NextResponse.json({ status:"success",data: result}); 
            
    
            
          } catch (error) {
            return NextResponse.json({ status: "fail", msg:"something went wrong" }, { status: 400 });
          }
    
    
    }