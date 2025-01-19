 import React from 'react'; 
import Footer from './Footer';
import MainNavBar from './MainNavBar';


async function getData() {
    let category =(await(await fetch('http://localhost:3000/api/dashBoard/category')).json()).data
    
    
    return{
        category 
}
}

const PlainLayout =async ({children}) => {
    let data = await getData();
   
    return (
        <div className=" bg-slate-400 ">
            <MainNavBar data={data.category}/>
             <div className='mt-20'>
               
                {children}
             </div>
              
                <Footer/>
                    
        </div>
    );
};

export default PlainLayout; 