import React from 'react';

const Insrision = () => {
    return (
        <div>
                 <section className="mt-10 ">
                    <div className="container m-auto" >
                        <h1 className="py-2 capitalize underline">Inspiration for your next gateway</h1>

                        <div className="grid gap-3 py-3 my-4 text-sm md:grid-cols-12 ">
                            <div className="md:col-span-9">
                                <p>We've curated some amazing experiences to help you find your next gateway</p>
                            </div>

                            <div className="md:flex md:col-span-3 ">
                                <a className="ml-auto mr-1 underline capitalize hover:text-slate-700 "  href="#">View all experiences</a>
                            </div>

                        </div>

                        {/* <!-- discover part --> */}

                        <div className="grid gap-3 md:grid-cols-3">


                            <div className="shadow-2xl">
                            
                                <div className="my-5">
                                    <img className="m-auto " src="/i.png" alt=""/>
                                </div>
                                
                                <div className="my-3 text-center px-7 md:text-left "> 
                                    <p className="uppercase text-slate-300 text-xs underline ">for those who love</p>
                                     
                                    <p className="capitalize text-2xl underline">to explore nature</p>
                                     
                                    <p className="mt-5 text-sm text-left text-slate-300 "> Discover some of the most beautiful scenery - from the wonders of Snowdania to the famous beauty og the Scottish Highlands .
                                    </p>

                                </div>
                            </div>


                            <div className="shadow-2xl">
                            
                                <div className="my-5 ">
                                    <img className="m-auto" src="/i1.png" alt=""/>
                                </div>
                                
                                <div className=" my-3 text-center px-7 md:text-left "> 
                                    <p className="uppercase text-xs text-slate-300 underline ">for those who love</p>
                                        <p className="capitalize text-2xl underline">to relax,rest and re-set</p>
                                    <p className="mt-5 text-sm text-left text-slate-300 "> Experience mind and body connection through breathing exercises and relation with our Yoga inspired get away for you  and the falmily.
                                    </p>

                                </div>
                            </div>

                            <div className="shadow-2xl">
                            
                                <div className="my-5 ">
                                    <img className="m-auto" src="/i3.png" alt=""/>
                                </div>
                                
                                <div className="my-3 text-center px-7 md:text-left"> 
                                    <p className="uppercase text-slate-300 text-xs underline ">for those who love</p>
                                  
                                        <p className="capitalize text-2xl underline">Four-legged friends</p>
                                     
                                    <p className="mt-5 text-sm text-left text-slate-300 ">When going on holiday nobody wants to put their dog in a kennel.So,lets keep the family together with our pet friendly cabins.
                                    </p>

                                </div>
                            </div>


                        </div>

                    </div>
                 </section>
        </div>
    );
};

export default Insrision;