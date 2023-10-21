import {
     BsCarFront, 
     BsChat, 
     BsEnvelope, 
     BsGear, 
     BsHouse, 
     BsListCheck, 
     BsPerson, 
     BsPhone, 
     BsTaxiFront,
} from "react-icons/bs";

import { PiChurchBold } from "react-icons/pi";

const profile = () => {
    return ( 
        <div className="profile w-screen h-screen flex justify-center">
            <div className="w-[90%] h-full flex justify-between  items-center">
                <div className="personal-details w-[40%] h-[80%] flex flex-col items-center justify-center space-y-11 rounded-lg shadow-md shadow-secondary">
                    <div className="avatar bg-secondary rounded-full p-7">
                        <BsPerson size={40} color="white"/>
                    </div>
                    <h1>Mphatso Mtogolo</h1>
                    <div className="flex flex-col justify-start space-y-4">
                        <p className="flex space-x-3"> <BsEnvelope size={20}/><span>mphatso@gmail.com</span></p>
                        <p className="flex space-x-3"> <BsPhone size={20}/> <span>+265 886 007 575</span></p>
                    </div>
                    <div className="w-[80%] h-16 flex justify-around text-secondary">
                        <BsHouse size={20}/>
                        <BsChat size={20}/> 
                        <BsGear size={20}/> 
                    </div>

                </div>

                <div className="tabs w-[40%] h-[80%] flex flex-col justify-center space-y-6">
                    <div className="w-[80%] h-16 rounded-md flex justify-center items-center space-x-6 text-white bg-secondary">
                        <BsTaxiFront/> <p>Book a Qucik Taxi</p>
                    </div>

                    <div className="w-[80%] h-16 rounded-md flex justify-center items-center space-x-6 text-white bg-secondary">
                        <BsCarFront/> <p>Hire Car</p>
                    </div>

                    <div className="w-[80%] h-16 rounded-md flex justify-center items-center space-x-6 text-white bg-secondary">
                        <PiChurchBold size={20}/> <p>Weddings Hire</p>
                    </div>

                    <div className="w-[80%] h-16 rounded-md flex justify-center items-center space-x-6 text-white bg-secondary">
                        <BsListCheck size={20}/> <p>Weddings Hire</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default profile;