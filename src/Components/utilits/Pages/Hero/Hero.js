import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero = () => {
    return (
         <div className="container m-auto back bg-[url('/hero.jpg')] bg-cover bg-no-repeat bg-center relative">

             <div className=" bg-slate-900 bg-opacity-60 p-[10px] sm:p-[50px] md:p-[120px]">

                <div className="grid gap-2 md:grid-cols-5">
                    <div className="md:col-span-3 col-start-1 ">
                        <div className='flex justify-center'>
                            <div>
                                <h1 className="text-[#F5B963] font-bold md:text-4xl  capitalize mb-4 ">leave the office behind <br/> and <span className="text-[#FFFFFF]">unwind</span></h1>
                                <p className="text-md text-[#faf6f6] leading-6 underline">welcome to our crazy cabin nestled in the heart of the mountains . Our cabin is the perfect getaway for those seeking peace and relaxation in a natural seeing.</p>
                            </div>
                        </div>
                        <div className=' mt-3 p-1 shadow-2xl'>
                            <div className="mt-5 md:flex">
                                <ul className="flex review">
                                    <li><a href="#"><img src="/u.jpg" alt=""  className='w-8 h-8 rounded-full'/></a></li>
                                    <li><a href="#"><img src="/u1.jpg" alt="" className='w-8 h-8 rounded-full'/></a></li>
                                    <li><a href="#"><img src="/u2.jpg" alt="" className='w-8 h-8 rounded-full'/></a></li>
                                    <li><a href="#"><img src="/u3.jpg" alt="" className='w-8 h-8 rounded-full'/></a></li>
                                    <li><a href="#"><img src="/u4.jpg" alt="" className='w-8 h-8 rounded-full'/></a></li>
                                </ul>
                                <ul className="flex ml-0 md:ml-10 ">
                                    <li className="md:px-5 text-[#F5B963] bold">Trustpilot</li>
                                    <li className="ml-2 text-[#F5B963]">

                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                
                                    </li>                                                         
                    
                                </ul>
                            </div>
                        </div>
                    
                    </div>


                    
                   
                </div>


                
            </div>

            <div className='absolute w-full flex justify-center  -bottom-[50px] clear-both '>
                 <div className=" w-4/5 m-auto h-[100px] hidden lg:inline-block ">
                      <div className="bg-slate-800 rounded-md grid grid-cols-7 gap-1 px-[33px] py-[28px] text-sm  capitalize shadow-xl text-orange-400 ">


                            <div className="flex items-center col-span-3">
                                <a className="inline-block w-full px-5 py-1 rounded-md shadow-xl bg-slate-700 hover:bg-[#F5B963] hover:text-black" href="#"><i class=" fa-regular fa-flag"></i> <p className="inline-block ml-5 ">i want to go </p></a>
                            </div>

                            <div className="flex items-center">
                                <a className="inline-block w-full px-1 py-1 rounded-md shadow-xl  bg-slate-700 hover:bg-[#F5B963] hover:text-black" href="#"><i class="fa-solid fa-clipboard-check"></i> <p className="inline-block ml-1">check in</p></a>
                            </div>

                            

                            <div className="flex items-center">
                                <a className="inline-block w-full px-1 py-1 rounded-md shadow-xl bg-slate-700 hover:bg-[#F5B963] hover:text-black" href="#"><i class="fa-solid fa-users"></i><p className="inline-block ml-1">traveller <output></output></p></a>
                            </div>

                            <div className="flex items-center col-span-2">
                                <a className="inline-block w-full px-5 py-1 rounded-md shadow-xl  hover:bg-[#F5B963] hover:text-black" href="#"><i class="fa-solid fa-bed"></i><p className="inline-block ml-5 ">find cabins </p></a>
                            </div>


                      </div>
                 </div>
            </div>

         </div>
    );
};

export default Hero;