import React from 'react';

const Cabin = () => {
    return (
        <section className=" mt-20 " id="cabins">
            <div className="container lg:py-2 m-auto  sm:mb-0 sm:py-0 shadow-2xl lg:mt-3 p-2 text-orange-400  " >
                <h1 className="py-2 mt-3 capitalize underline ">Discover our idyllic countryside cabins</h1>

                <div className="grid text-sm md:grid-cols-12 md:gap-3 md:py-3 md:my-4 ">
                    <div className="col-span-9 text-orange-300">
                        <p>Fully equiped kitchen and bathroom with plenty of walking and cycling routes to explore</p>
                    </div>

                    <div className="md:flex md:col-span-3 ">
                        <a className="ml-auto mr-1 underline capitalize hover:text-slate-700  text-orange-400"  href="#">View all cabin</a>
                    </div>

                </div>

               

                <div className="grid md:grid-cols-3 gap-3">

                    

                    <div className="grid grid-rows-2 shadow-xl ">
                    
                        <div className="mt-5">
                            <img className="w-100% m-auto" src="/c11.jpg" alt=""/>
                        </div>
                        
                        <div className="md:px-4 px-2 "> 
                            <p className="uppercase text-center underline  md:text-left ">norfolk-england</p>
                            <div className="flex justify-between  mt-2 text-sm ">
                                <p className="text-slate-300 underline">Rustic country retreat</p>
                                <p className="sm:ml-auto ">&euro; 210 <sup>pp</sup> </p>
                            </div>
                            <p className="mt-3 text-sm text-justify text-slate-300">Step outside and take in the stunning views.Our cabin sits on a quiet and secluded property,providing the perfect setting
                            </p>
                            <div className="flex mt-4 text-sm w-2/3">
                                <ul className="flex">
                                    <li><i className="fa-solid fa-star"></i></li>
                                    <li><i className="fa-solid fa-star"></i></li>
                                    <li><i className="fa-solid fa-star"></i></li>
                                    <li><i className="fa-solid fa-star"></i></li>
                                </ul>
                                <p className=" ml-4 text-slate-300">82 reviews</p>
                            </div>
                        </div>
                    </div>            
               


                  
                    <div className="grid grid-rows-2  shadow-xl">
                    
                        <div className="mt-5 ">
                            <img className="w-100% m-auto" src="/c22.jpg" alt=""/>
                        </div>
                        
                        <div className="md:px-4 px-1 "> 
                            <p className="uppercase text-center  md:text-left underline">hampshire - england</p>
                            <div className="flex justify-between  mt-2 text-sm">
                                <p className="text-slate-300 underline">Rustic country retreat</p>
                                <p className="sm:ml-auto ">&euro; 210 <sup>pp</sup> </p>
                            </div>
                            <p className="mt-3 text-sm text-justify text-slate-300">Step outside and take in the stunning views.Our cabin sits on a quiet and secluded property,providing the perfect setting
                            </p>
                            <div className="flex w-2/3 mt-4 text-sm">
                                <ul className="flex">
                                    <li><i className="fa-solid fa-star"></i></li>
                                    <li><i className="fa-solid fa-star"></i></li>
                                    <li><i className="fa-solid fa-star"></i></li>
                                    <li><i className="fa-solid fa-star"></i></li>
                                </ul>
                                <p className=" ml-4 text-slate-300">60 reviews</p>
                            </div>
                        </div>
                    </div>

                   

                    <div className="grid grid-rows-2  shadow-xl">
                    
                        <div className="mt-5 ">
                            <img className="w-100% m-auto" src="/c33.jpg" alt=""/>
                        </div>
                        
                        <div className="md:px-4 px-1"> 
                            <p className="uppercase text-center  md:text-left ">juseland-england</p>
                            <div className="flex justify-between  mt-2 text-sm">
                                <p className="underline text-slate-300">Rustic country retreat</p>
                                <p className="sm:ml-auto ">&euro; 210 <sup>pp</sup> </p>
                            </div>
                            <p className="mt-3 text-sm text-justify text-slate-300">Step outside and take in the stunning views.Our cabin sits on a quiet and secluded property,providing the perfect setting
                            </p>
                            <div className="flex w-2/3 mt-4 text-sm">
                                <ul className="flex">
                                    <li><i className="fa-solid fa-star"></i></li>
                                    <li><i className="fa-solid fa-star"></i></li>
                                    <li><i className="fa-solid fa-star"></i></li>
                                    <li><i className="fa-solid fa-star"></i></li>
                                </ul>
                                <p className=" ml-4 text-slate-300">52 reviews</p>
                            </div>
                        </div>
                    </div> 

                    


                </div>

            </div>
      </section>
    );
};

export default Cabin;