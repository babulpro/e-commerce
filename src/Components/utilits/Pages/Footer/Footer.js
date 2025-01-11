import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitter, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div>
            <div className="container m-auto">
                <div className="bg-slate-900">
                    <div className="grid gap-3 py-10 capitalize sm:grid-cols-3 md:grid-cols-6">

                         
                        <div className="p-1">
                            <h1 className="mb-4 capitalize underline">About Us</h1>
                            <ul className="py-0 text-sm">
                                <li><a href="/dashboard/pages/footer/ourStory">Our Story</a></li>
                                <li><a href="/dashboard/pages/footer/WhyUs">Why Us</a></li>
                                <li><a href="/dashboard/pages/footer/HowWorks">How It Works</a></li>
                                <li><a href="/dashboard/pages/footer/Faq">FAQ</a></li>
                            </ul>
                        </div>

                         
                        <div className="col-span-2 p-1">
                            <h1 className="mb-4 capitalize underline">Our Cabins</h1>
                            <ul className="py-0 text-sm">
                                <li><a href="#">North of London</a></li>
                                <li><a href="#">Golden Hideaway</a></li>
                                <li><a href="#">Oak Treehouse</a></li>
                                <li><a href="#">Acacio Retreat</a></li>
                                <li><a href="#">Blue Lagoon</a></li>
                                <li className="mt-5"><a href="#">South of London</a></li>
                                <li><a href="#">Lavender Retreat</a></li>
                                <li><a href="#">Butterfly Treehouse</a></li>
                                <li><a href="#">Mahogany Hideaway</a></li>
                            </ul>
                        </div>

                        
                        <div className="col-span-2 p-1">
                            <h1 className="mb-4 capitalize underline">Get Inspired</h1>
                            <div className="grid grid-cols-2 gap-1 mt-4">
                                <ul className="py-0 text-sm">
                                    <li><a href="/dashboard/pages/footer/Nature">Explore Nature</a></li>
                                    <li><a href="/dashboard/pages/footer/Hiking">Hiking Trails</a></li>
                                    <li><a href="/dashboard/pages/footer/Swimming">Swimming</a></li>
                                    <li><a href="/dashboard/pages/footer/Fishing">Fishing</a></li>
                                    <li><a href="/dashboard/pages/footer/Boating">Boating</a></li>
                                    <li className="mt-5"><a href="/dashboard/pages/footer/Relax">Rest, Relax, and Re-set</a></li>
                                    <li><a href="/dashboard/pages/footer/Spa">Spa Treatments</a></li>
                                    <li><a href="/dashboard/pages/footer/Tubs">Hot Tubs</a></li>
                                    <li><a href="/dashboard/pages/footer/Trails">Nature Trails</a></li>
                                </ul>

                                <ul className="py-0 text-sm">
                                    <li><a href="/dashboard/pages/footer/Food">Great Food and Drink</a></li>
                                    <li><a href="/dashboard/pages/footer/Pubs">Pubs</a></li>
                                    <li><a href="/dashboard/pages/footer/Restaurants">Restaurants</a></li>
                                    <li><a href="/dashboard/pages/footer/Markets">Food Markets</a></li>
                                    <li className="mt-10"><a href="/dashboard/pages/footer/Yours">For You and Yours</a></li>
                                    <li><a href="/dashboard/pages/footer/Solo">Solo or Couple</a></li>
                                    <li><a href="/dashboard/pages/footer/Pet">Pet Friendly</a></li>
                                    <li><a href="/dashboard/pages/footer/Accessible">Accessible Cabins</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Support Section */}
                        <div className="p-1 md:ml-auto">
                            <h1 className="mb-4 capitalize underline">Support</h1>
                            <ul className="py-0 text-sm">
                                <li><a href="/dashboard/pages/footer/Help">Help</a></li>
                                <li><a href="/dashboard/pages/footer/Contact">Contact Us</a></li>
                                <li><a href="/dashboard/pages/footer/Privacy">Privacy Policy</a></li>
                                <li><a href="/dashboard/pages/footer/Terms">Terms of Service</a></li>
                                <li><a href="/dashboard/pages/footer/Complaints">Complaints Policy</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="container m-auto">
                    <div className="px-1 py-4 bg-black ">
                        <h1 className="pt-3 capitalize text-lg underline">Sign Up to Our Newsletter</h1>
                        <div className="grid gap-3 mt-4 lg:grid-cols-2">
                            <div className="text-sm">
                                <p className="text-[14px]">
                                    For a weekly curated collection of 3 things you can watch, read, or listen to
                                    to switch off from the busy everyday.
                                </p>
                            </div>

                            <form className="grid sm:grid-cols-2" action="get">
                                <input
                                    className="p-2 text-sm border-none rounded-md outline-none"
                                    type="email"
                                    placeholder="Please input your email"
                                />
                                <input
                                    className="px-4 py-1 mt-4 text-black uppercase rounded-lg cursor-pointer sm:mt-0 sm:ml-auto bg-slate-300 hover:bg-slate-800 hover:text-slate-400"
                                    type="button"
                                    value="Join the Mailing List"
                                />
                            </form>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="container m-auto bg-black">
                    <hr className="border-slate-500" />
                    <div className="grid items-center py-20 sm:grid-cols-3 gap-9">

                        <div>
                            <h1 className="px-1  capitalize">UnwindCabins</h1>
                        </div>
                        <div>
                            <p >&copy; 2024 UnwindCabins</p>
                        </div>
                        <div>
                        <ul className="flex justify-evenly" id="social-link">
                            <li>
                                <a href="#" aria-label="Youtube">
                                    <FontAwesomeIcon icon={faYoutube} size="s" className="text-white hover:text-red-500 w-10 h-8" /> 
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="Twitter">
                                    <FontAwesomeIcon icon={faTwitter} size="2x" className="text-white hover:text-blue-400 w-10 h-8" /> 
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="LinkedIn">
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-white hover:text-blue-700 w-10 h-8" />
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="Instagram">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" className="text-white hover:text-pink-500 w-10 h-8" /></a>
                            </li>
                            <li>
                                <a href="#" aria-label="Github">
                                    <FontAwesomeIcon icon={faGithub} size="2x" className="text-white hover:text-gray-400 w-10 h-8" />
                                </a>
                            </li>
                        </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
