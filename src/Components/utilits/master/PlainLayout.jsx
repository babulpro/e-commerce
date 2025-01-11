import React from 'react';
import MianNavBar from './MianNavBar';
import Footer from './Footer';
import Submenu from './Submenu';

async function getData() {
    let category =(await(await fetch('http://localhost:3000/api/dashBoard/category')).json()).data
    // let social =(await(await fetch('http://localhost:3000/api/social')).json()).data
    return{
        category
    }
}
const PlainLayout = async({children}) => {
      let data =await getData()
      
    return (
        <div>
            <MianNavBar data={data.category} />
            {children}
            <Footer />
        </div>
    );
};

export default PlainLayout;