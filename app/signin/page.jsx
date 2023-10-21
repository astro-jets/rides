"use client"

import { useState } from "react";
import Navbar from "../components/Navbar";


import {BsDoorOpen} from "react-icons/bs";

export default Signin = () => {
    const [signin, setSignIn] = useState(true);

    const handleForm = () => {setSignIn(!signin);}

    return ( 
        <div className="">
            <Navbar/>

            { 
                signin ?
                <div className="mt-16 pt-10 w-full h-full flex justify-center">
                    <div className=" text-primary shadow-2xl h-full w-[90%] md:w-[50%] flex flex-col items-center space-y-10 py-7">
                        <h3>Sign In</h3>
                        <form action="" className="w-[80%] space-y-8 flex flex-col items-center justify-center">
                            <div className="flex flex-col w-[80%]">
                                <label htmlFor="Email">Email</label>
                                <input type="email" name="email" id="email" className="h-12 border-b-[1px] border-secondary" />
                            </div>

                            <div className="flex flex-col w-[80%]">
                                <label htmlFor="Password">Password</label>
                                <input type="password" name="password" id="password"  className="h-12 border-b-[1px] border-secondary"/>
                            </div>

                            <button type="submit" className="rounded-md text-white p-3 bg-secondary w-[70%] flex justify-center space-x-4"> 
                                <p>Sign In</p>
                                <BsDoorOpen size={20}/>
                            </button>

                            <p>Don't have an account? <span className="text-secondary cursor-pointer" onClick={handleForm}>Signup here</span>.</p>
                        </form>
                    </div>
                </div>

                :<div className="mt-16 pt-10 w-full h-full flex justify-center">
                    <div className=" text-primary shadow-2xl h-full w-[90%] md:w-[50%] flex flex-col items-center space-y-10 py-7">
                        <h3>Sign Up</h3>
                        <form action="" className="w-[80%] space-y-8 flex flex-col items-center justify-center">
                            <div className="flex flex-col w-[80%]">
                                <label htmlFor="name">Username</label>
                                <input type="name" name="name" id="name" className="h-12 border-b-[1px] border-secondary" />
                            </div>
                            <div className="flex flex-col w-[80%]">
                                <label htmlFor="Email">Phone</label>
                                <input type="text" name="phone" id="phone" className="h-12 border-b-[1px] border-secondary" />
                            </div>
                            <div className="flex flex-col w-[80%]">
                                <label htmlFor="Email">Email</label>
                                <input type="email" name="email" id="email" className="h-12 border-b-[1px] border-secondary" />
                            </div>

                            <div className="flex flex-col w-[80%]">
                                <label htmlFor="Password">Password</label>
                                <input type="password" name="password" id="password"  className="h-12 border-b-[1px] border-secondary"/>
                            </div>

                            <button type="submit" className="rounded-md text-white p-3 bg-secondary w-[70%] flex justify-center space-x-4"> 
                                <p>Sign Up</p>
                                <BsDoorOpen size={20}/>
                            </button>

                            <p>Already have an account? <span className="text-secondary cursor-pointer" onClick={handleForm}>Sign in here</span>.</p>
                        </form>
                    </div>
                </div>
            }
        </div>
     );
}