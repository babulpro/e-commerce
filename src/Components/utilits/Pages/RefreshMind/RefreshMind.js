import React from 'react';

const RefreshMind = () => {
    return (
        <div className='container m-auto my-5'>
            <section className=" ">
                <div className="container relative m-auto">
                    <div className="grid md:grid-cols-6 ">
                    
                        <div className=" hidden md:inline-block md:col-span-2 bg-[#0A090E]  h-80">
                        
                        </div>

                        <div className="md:col-span-4 h-80 ">
                            <img className="w-full h-full " src="/c2.jpg" alt=""/>
                        </div>
                    </div>
                    <div className='flex justify-center w-full h-full items-center absolute left-0 top-0 bg-slate-900 opacity-70'>
                        <div className=" w-4/5  ">
                            <h1 className="text-xl md:text-3xl  mb-3 underline">Nourish the mind,body,and spirit.</h1>
                            <p className="text-md w-2/3  text-slate-50 md:black ">Many people find the combination of being in a peaceful natural setting and engaging in activities that nourish the mind,body and sprit leave them feeling rejuvenated and refresh.</p>
                            <a className="inline-block px-3 py-1 mt-8 capitalize rounded-md bg-slate-600 hover:bg-yellow-100 hover:text-slate-800" href="#">Find avilable cabins</a>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RefreshMind;