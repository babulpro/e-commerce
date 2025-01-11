import dbConnect from "@/app/lib/BbConnect/connect";
import Order from "@/app/lib/model/order/order";
import { NextResponse } from "next/server";
import  Product  from '@/app/lib/model/product/product';

export async function POST(req) {
    const data = await req.json(); 
   
    await dbConnect();
  
     
        try {
          let orderData = await Product.findById({_id:data.productId})
           orderData.stock=parseInt(orderData.stock)-parseInt(data.quantity)
           
          const result = await Product.findByIdAndUpdate(data.productId,
                      {...orderData}
                    ,{new:true});
          const  orderProduct = await Order.create({ ...data }); 
          const response = NextResponse.json({ status:"success" ,data:orderProduct}); 
          return response;
  
          
        } catch (error) {
          return NextResponse.json({ status: "false", msg: error.message }, { status: 400 });
        }
  
    
   
  
  }

  
export async function DELETE(req) {
    const data = await req.json(); 
   
    await dbConnect();
  
     
        try {
          const result = await Order.deleteOne({ _id: data.orderId }); 
          return NextResponse.json({ status:"success" ,data:result }); 
          
  
          
        } catch (error) {
          return NextResponse.json({ status: "false", msg: error.message }, { status: 400 });
        }
  
    
   
  
  }

  export async function GET(req) { 
    await dbConnect();
  
    const result = await Order.find({})
    if(!result){
       
        return NextResponse.json({ status: "false", msg: error.message }, { status: 400 });
  
    }
    else{
      return  NextResponse.json({status:"success",data:result}); 
      
    }
  
  }
  