 'use client'
import React from 'react';
import toast from 'react-hot-toast';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
 
const MainNavBar = () => {
    const pathname = usePathname()
    const logOut = async () => {
        const config = { method: "get" };
        let response = await fetch("/api/login", config, { cache: "force-cache" });
        let json = await response.json();

        if (json.status === "ok") {
            toast.success("Log Out Success");
            router.replace("/");
        }
    };
 
    return (
        <div className='fixed top-0 z-50 w-full'>
            <div className="container m-auto ">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link href="/dashboard/pages/OurCabin" >Our Cabin</Link></li>
                            <li><Link href="/dashboard/pages/GetInspiration" >Get Inspiration</Link></li>
                            <li><Link href="/dashboard/pages/GetGift" >Get A Gift</Link></li>
                            <li><Link href="/dashboard/pages/BookedCabin" >Booked Cabin</Link></li>                       
                         
                            {pathname.startsWith('/dashboard/pages') && (
                                <li>
                                <button onClick={logOut}>Log Out</button>
                                </li>
                            )}
                            
                    </ul>
                     
                     
                    </div>
                    <Link  href="/" className="btn btn-ghost text-xl" >daisyUI</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/dashboard/pages/OurCabin" >Our Cabin</Link></li>
                        <li><Link href="/dashboard/pages/GetInspiration" >Get Inspiration</Link></li>
                        <li><Link href="/dashboard/pages/GetGift" >Get A Gift</Link></li>
                        <li><Link href="/dashboard/pages/BookedCabin" >Booked Cabin</Link></li>                       
                                              
                        
                    </ul>
                    
                </div>
                    <div className="navbar-end">
                                        
                       <div className=" ">
                        <ul>
                            {pathname.startsWith('/dashboard/pages') && (
                                        <li>
                                        <button onClick={logOut}>Log Out</button>
                                        </li>
                                )}
                            </ul>
                       </div>
                        
                    </div>
                </div>
            </div>
                
        </div>
    );
};

export default MainNavBar;