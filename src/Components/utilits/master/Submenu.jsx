import Link from 'next/link';
import React from 'react';


const Submenu = async({data,id}) => {
   
    
 
    return (
        <div className='bg-slate-800'>
            <ul className='flex justify-center'>
                <li>
                <Link  key={"1"} href={`http://localhost:3000/product/categoryById/${id}`}>all </Link>
                </li>
                {
                    data.length > 0 &&
                    [...new Set(data.map(value => value.type))].map((type, index) => {
                        const category = data.find(value => value.type === type);
                        return (
                            <li className='ml-3'>
                                <Link  key={value._id} href={`http://localhost:3000/product/categoryById/${id}?type=${type}`}>{type}</Link>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default Submenu;