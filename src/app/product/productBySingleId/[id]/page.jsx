import PlainLayout from '@/Components/utilits/master/PlainLayout';
import SingleProduct from '@/Components/utilits/Pages/product/SingleProduct';
import React from 'react';


async function getData(id) {
    let data= (await(await fetch(`http://localhost:3000/api/dashBoard/product/productById?id=${id}`)).json()).data;

    return data
    
  
}
const page = async({params}) => {
     let id = (await params).id
    let data = await getData(id)
    return (
        <div>
            <PlainLayout>
                <SingleProduct data={data}/>
                
            </PlainLayout>
            
        </div>
    );
};

export default page;