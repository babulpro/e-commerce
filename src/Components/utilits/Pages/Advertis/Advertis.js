import React from 'react';

const Advertis = () => {
    return (
        <div>
            <section className="container m-auto my-10">
                <div className=" m-auto back bg-[url('/h1.jpg')] bg-cover bg-no-repeat bg-center relative">

                    <div className=" bg-black bg-opacity-90 sm:px-2 p-2" >
                        <div className="grid items-center content-center w-4/5 gap-10 m-auto md:grid-cols-6">

                            <div className="md:col-span-2">
                                <h1 className="text-2xl underline">Get ready to unwind</h1>
                                <p className="my-2 text-sm text-slate-400 underline">A cabin getaway can be a wonderful way to relax and reconnect with nature .Many cabin rentals are located in beautiful,secluded areas,surrounded by trees and other natural beautyA cabin getaway can be a wonterfull way to escape the bustle of daily life and reconnect with nature</p>

                                <p className="inline-block pb-3 mt-4 text-slate-300 hover:text-slate-900 hover:cursor-pointer">Learn more <span className="mr-16 text-sm text-slate-500 "><i className="fa-solid fa-arrow-right"></i></span> </p>
                            </div>

                            <div className="bg-slate-300 bg-opacity-40 shadow-2xl md:col-span-4 rounded-2xl">
                                <video className="w-full h-auto p-3 ml-auto rounded-md " controls>
                                    <source src="/v.mp4" type="video/mp4"/>
                                    
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>

                    </div>
                
                </div>
            </section>
        </div>
    );
};

export default Advertis;