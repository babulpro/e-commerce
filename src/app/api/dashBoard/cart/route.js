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
export async function DELETE(req) {
    const data = await req.json(); 
    
    await dbConnect();
  
     
        try {
           
          const newProduct = await Cart.deleteOne({_id:data.cartId}); 
          const response = NextResponse.json({ status:"success" ,data:newProduct}); 
          return response;
  
          
        } catch (error) {
          return NextResponse.json({ status: "false", msg: error.message }, { status: 400 });
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
  