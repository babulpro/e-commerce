import PlainLayout from '@/Components/utilits/master/PlainLayout';
import Link from 'next/link';
import React from 'react';

async function getData() {
    let data= (await(await fetch(`http://localhost:3000/api/dashBoard/cart`)).json()).data;

    return data
    
  
}

const Page = async() => {
    let data = await getData()
    return (
        <div>
            <PlainLayout>
                <div className="grid md:grid-cols-2 gap-4">
                {
                    data.length>0 && 
                    data.map((value,index)=>{
                        return(
                            <div>

                                <Link key={index} href={`/product/productBySingleId/${value.productId}`}>                            
                                    <div className=' w-full p-3 hover:bg-slate-500 flex justify-between'>
                                        <h1>Items:<span className='text-xl lg:2xl underline'>{value.name}</span></h1>
                                        <h1>Price: <span className='text-xl lg:2xl underline text-orange-950'>{value.price}</span></h1>
                                    </div>
                                    <div>
                                        
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }

                </div>
            </PlainLayout>
        </div>
    );
};

export default Page;