 import React from 'react'; 
import getData from '../allFunction/getData';
import Footer from './Footer';
import MainNavBar from './MainNavBar';

const PlainLayout =async ({children}) => {
    let data = await getData("http://localhost:3000/api/dashBoard/category");
   
    return (
        <div className=" bg-slate-400 ">
            <MainNavBar data={data}/>
             <div className='mt-20'>
               
                {children}
             </div>
              
                <Footer/>
                    
        </div>
    );
};

export default PlainLayout; 