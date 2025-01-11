import React from 'react';

const Ask = () => {
    return (
        <div>
                <section >
                    <div className="container m-auto bg-slate-700 p-2">
                    <div >
                        <h1 className="lg:text-[35px] md:text-[25px] text-[18px] pt-6 underline">Frequently asked question</h1>

                        <div className="grid items-center h-32 gap-6 md:grid-cols-5">

                            <div className="md:col-span-2">
                                <h2 className="text-xl capitalize">1.About Unwind cabins</h2>
                                <ul className="pb-2 ml-8 list-disc">
                                    <li className="text-sm">How long have you been in busiess?</li>
                                    <li className="text-sm" >Why did you start this journey?</li>
                                </ul>
                            </div>

                            <div className="flex items-center justify-between py-1 bg-slate-500 rounded-md md:col-span-3 hover:bg-slate-400 hover:cursor-pointer text-black ">
                            <a className="inline-block px-3 py-5 capitalize" href="#">about our cabin</a>
                            <a href="#"><span className="mr-2 "><i className="fa-solid fa-arrow-right"></i></span></a>
                            </div>
                        </div>

                        <div className="grid items-center h-32 gap-6 mt-14 md:grid-cols-5">

                            <div className="md:col-span-2">
                                <h2 className="text-xl capitalize">2.tell me about the cabin</h2>
                                <ul className="pb-2 ml-8 list-disc">
                                    <li className="text-sm">What do I need to bring?</li>
                                    <li className="text-sm" > How do i get the cabin?</li>
                                </ul>
                            </div>

                            <div className="flex items-center justify-between col-span-3 py-1 bg-slate-500 rounded-md hover:bg-slate-400 hover:cursor-pointer text-black ">
                            <a className="inline-block px-3 py-5 capitalize" href="#">Tell me more about the cabin</a>
                            <a href="#"><span className="mr-2 "><i className="fa-solid fa-arrow-right"></i></span></a>
                            </div>
                        </div>

                        <div className="grid items-center h-32 gap-6 mt-14 md:grid-cols-5">

                            <div className="md:col-span-2">
                                <h2 className="text-xl capitalize">3.Pets,family and friends</h2>
                                <ul className="pb-2 ml-8 list-disc">
                                    <li className="text-sm">Please tell me I can bring my dog.</li>
                                    <li className="text-sm" >How many people do you cabins sleep?</li>
                                </ul>
                            </div>

                            <div className="flex items-center justify-between col-span-3 py-1 bg-slate-500 rounded-md hover:bg-slate-400 hover:cursor-pointer text-black ">
                            <a className="inline-block px-3 py-5 capitalize" href="#">Pets,family and friends</a>
                            <a href="#"><span className="mr-2 "><i className="fa-solid fa-arrow-right"></i></span></a>
                            </div>
                        </div>
                        
                        
                        <div className="grid items-center h-32 gap-6 mt-14 md:grid-cols-5">

                            <div className="col-span-5 ml-4">
                                <h2 className="text-xl capitalize">still have a question</h2>
                                <p className="text-sm">If you still have  question contact a member of the team on <a className="px-2 font-bold underline capitalize text-slate-900 hover:text-slate-600" href="#">live chat</a> and we'd be more than happy to help.</p>
                            </div>

                            
                        </div>





                    </div>
                    </div>
                </section>
        </div>
    );
};

export default Ask;