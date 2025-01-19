 import getData from '@/components/allFunction/getData';
import PlainLayout from '@/components/Master/PlainLayout';
import Product from '@/components/utilits/Product';
import React from 'react';
 
 const Page =async () => {
  let data= await getData("http://localhost:3000/api/dashBoard/product");
  return (
    <PlainLayout>
      <div className=" py-2 "> 
        {/* <Product data={data}/> */}
        this is the home page

        </div>
    </PlainLayout>
    
  );
 };
 
 export default Page;