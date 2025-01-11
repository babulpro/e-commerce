
"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const AllProducts = ({data}) => {
    let search= useSearchParams()
    let type =search.get('type')
    if(type){
        data = data.filter(value=>value.type === type)
    }
    return (
        <div className='p-2 md-4'>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    
                        
                    
                data.map((value,index)=>{
                    return(
                        <Link href={`/product/productBySingleId/${value._id}`} className="" key={value._id}>
                          <div className=' m-auto p-4 hover:scale-105 transform transition duration-300'>
                            <Image
                                src={value.image1}
                                width={500}
                                height={500}
                                alt='image'
                                layout='responsive'
                                />
                          </div>
                        
                       <div className='underline md:text-xl text-lg w-4/5 m-auto'>
                            <h1 >{value.name}</h1>
                            <h1 > Price: BD {value.price}  only</h1>
                       </div>
                    </Link>
                    )
                })
                }
            </div>
        </div>
    );
};

export default AllProducts;