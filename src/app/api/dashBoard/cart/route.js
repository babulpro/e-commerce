import dbConnect from "@/app/lib/BbConnect/connect";
import Cart from "@/app/lib/model/cart/cart";
import { NextResponse } from "next/server";
import  Product  from '@/app/lib/model/product/product';

export async function POST(req) {
    const data = await req.json(); 
    
    await dbConnect();
  
     
        try {
          // const product = await Product.find({_id:data.productId})
          // console.log(product)
          const newProduct = await Cart.create({ ...data }); 
          const response = NextResponse.json({ status:"success" ,data:newProduct}); 
          return response;
  
          
        } catch (error) {
          return NextResponse.json({ status: "false", msg: error.message }, { status: 400 });
        }
  
    
   
  
  }

  
  export async function PUT(req) {
    try {
        const data = await req.json(); // Parse the request body
        if (!data.chartId) {
            return NextResponse.json(
                { status: "false", msg: "cartId is required" },
                { status: 400 }
            );
        }

        await dbConnect(); // Connect to the database

        const result = await Cart.deleteOne({ _id: data.chartId }); // Delete the document

        if (result.deletedCount === 0) {
            return NextResponse.json(
                { status: "false", msg: "No document found with the provided ID" },
                { status: 404 }
            );
        }

        return NextResponse.json({ status: "success", data: result });
    } catch (error) {
        console.error("DELETE Error:", error);
        return NextResponse.json(
            { status: "false", msg: error.message },
            { status: 500 }
        );
    }
}


  export async function GET(req) { 
    await dbConnect();
  
    const result = await Cart.find({})
    if(!result){
       
        return NextResponse.json({ status: "false", msg: error.message }, { status: 400 });
  
    }
    else{
      return  NextResponse.json({status:"success",data:result}); 
      
    }
  
  }
  