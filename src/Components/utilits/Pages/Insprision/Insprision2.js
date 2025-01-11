import React from 'react';
const Insprision2 = () => {
    return (
        <div className='container m-auto'>
            
            <section className="my-12">
                <div className="container m-auto bg-[url('/pu.jpg')] bg-cover bg-no-repeat bg-center relative">

                    <div className=" bg-slate-900 p-11 bg-opacity-20 sm:px-[120px] sm:py-[150px] " >
                        <div className="container grid m-auto ml-auto md:grid-cols-3">
                            <div className=" md:col-start-3 text-left ">
                                <h1 className="my-3 text-2xl capitalize">a truly wonderful <br/> experience</h1>

                                <div className="  text-md text-slate-300 leading-5 my-2">

                                <p className="my-2">Brilliant for anyone looking to get away from the hustle and bustle of city life or detox from their teach for a few days .I could have stayed another week!</p>
                            <p >They really have thought about everything here down to the  finest details.</p>
                            </div>

                            <div className="sm:flex sm:justify-between sm:w-2/3 mt-10">
                                <ul className="flex gap-1 star">
                                    <li><i className="fa-solid fa-star"></i></li>
                                    <li><i className="fa-solid fa-star"></i></li>
                                    <li><i className="fa-solid fa-star"></i></li>
                                    <li><i className="fa-solid fa-star"></i></li>
                                    <li><i className="fa-solid fa-star"></i></li>
                                </ul>

                                
                            </div>
                        </div>
                        </div>
                    </div>
                
                </div>
            </section>

        </div>
    );
};

export default Insprision2;