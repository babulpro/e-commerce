import Image from 'next/image';
import React from 'react';
import AddCart from './AddCart';

const SingleProduct = ({data}) => {
     
    return (
        <div className="container m-auto">
            <div className="grid md:grid-cols-3 gap-4">
                <div className='col-span-2'>
                    {
                        
                                <div className='grid md:grid-cols-2 gap-3' >
                                    <div className="border mr-2">

                                        <Image src={data[0].image1} alt="Picture of the author" width={500} height={500} layout='responsive'/>
                                    </div>
                                    <div>
                                        <h1 className='text-xl md:text-2xl underline'>{data[0].name}</h1><br/>
                                        <p>{data[0].description}</p><br/>
                                        <p>Price: <span className="text-2xl md:text-3xl text-red-400 underline">{data[0].price} tk.</span> </p>

                                        <div className="">
                                            <AddCart data={data[0]}/>                                      
                                        </div>
                                        
                                    </div>
                                </div>
                            
                        
                    }

                            

                </div>
                <div>

                </div>

            </div>
        </div>
    );
};

export default SingleProduct;