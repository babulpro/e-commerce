
import PlainLayout from '@/Components/utilits/master/PlainLayout';
import Submenu from '@/Components/utilits/master/Submenu';
import AllProducts from '@/Components/utilits/Pages/product/AllProducts';
import React from 'react';


async function getData(id) {
    let data= (await(await fetch(`http://localhost:3000/api/dashBoard/product/categoryId?id=${id}`)).json()).data;

    return data
    
  
}


const Page =async ({params}) => {
 let id =  (await params).id
 let data = await getData(id)
 
  
      
   
    return (
        <div>
            <PlainLayout>
                <Submenu data={data} id={id} />
                <AllProducts data={data}/>
           
            </PlainLayout>
        </div>
    );
};

export default Page;