import Image from 'next/image';
import React from 'react';

const Product = ({data}) => {
    return (
        <div>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {data.length > 0 && data.map((item,index)=>( 
                    <div key={index} className='card bordered'>
                        <figure>
                            <Image src={item.image1} width={500} height={500} layout="responsive" alt={item.name} />
                        </figure>
                        <div className='card-body'>
                            <h2 className='card-title'>{item.name}</h2>
                            <p>{item.price}</p>
                            <button className='btn btn-primary'>Add to Cart</button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Product;