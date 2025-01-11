'use client'
import Link from 'next/link';
import React from 'react';

const AddCart = ({data}) => {
    let postData = {
        userId:'677dc20a55358bdce689bb97',
        productId:data._id,
        name:data.name,
        price:data.price


    }
    const HandleAdd=async()=>{
        try{
            let response =await fetch('http://localhost:3000/api/dashBoard/cart',{  
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData)
            })
            let result = await response.json()
            if(result.status ==="success"){
                window.location.reload()
                // alert('success')
            }
        }
        catch(e){
            return e

        }
    }
    return (
        <div className="flex justify-between mt-4 w-full">
            <button onClick={HandleAdd} >AddCart12</button>
            <button >AddCart</button>
        </div>
    );
};

export default AddCart;