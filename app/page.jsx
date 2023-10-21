"use client"
// Components
import Navbar from './components/Navbar'
import Banner from "./components/Banner";
import Services from "./components/Services";

import {BsPlayFill, BsPerson, BsCarFront, BsPeople, BsFacebook, BsTwitter, BsInstagram, BsX} from "react-icons/bs";
import {GiCarWheel} from "react-icons/gi";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Services/>

      {/* Video section */}
      <div className="px-[5%] w-full h-full overflow-hidden md:h-[90vh] mb-3">
        <div className=" w-full h-full flex flex-col-reverse  space-y-10 md:space-y-0 md:justify-between md:flex-row mt-16">
          <div className="left 
            shadow-xl shadow-gray-700 p-[3%] 
            w-full h-4/5 rounded-md mb-8 md:mb-0 
            flex flex-col items-center space-y-4
            md:w-1/3">
            <h3 className='text-2xl font-bold text-gray-900'>The best taxi service ever</h3>
            <p className='text-justify w-full'>
              Auscipit in exercitationem dolor adipisci eum voluptatibus cumque, iusto eligendi.
            </p>
            <p className='text-justify w-full'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia laborum aliquam unde sequi veritatis praesentium repellat et libero quod quae suscipit in exercitationem dolor adipisci eum voluptatibus cumque, iusto eligendi.
            </p>
            <button className='bg-secondary rounded-lg text-white w-1/2 h-12'>Signup</button>
          </div>

          <div className="right h-full w-full md:w-[60%] flex flex-col items-center">
              <div className="w-full relative rounded-lg overflow-hidden">
                <div className="rounded-full w-32 h-32 absolute top-1/2 left-1/2 bg-secondary translate-x-[-50%] translate-y-[-50%] flex items-center justify-center cursor-pointer hover:scale-110 ease-in-out">
                  <BsPlayFill color='white' size={60}/>
                </div>
                <img src="/images/cab.jpg" className='w-full h-full' alt="" />
              </div>
          </div>
        </div>
      </div>

      {/* Company stats */}
      <div className="mt-5 py-5 w-full h-full bg-secondary md:h-[40vh] ">
        <h3 className='text-white text-lg font-bold my-5 flex flex-col items-center'>Master the road</h3>
        <div className="flex flex-col justify-around items-center md:flex-row w-full space-y-4 md:space-y-0">
          <div className="w-[80%] md:w-[20%] h-[25vh] flex flex-col items-center justify-center bg-white text-secondary rounded-2xl">
            <BsPeople size={30}/>
            <h3>Community</h3>
            <p>11,567</p>
          </div>
          <div className="w-[80%] md:w-[20%] h-[25vh] flex flex-col items-center justify-center bg-white text-secondary rounded-2xl">
            <BsPerson size={30}/>
            <h3>Customers</h3>
            <p>11,500</p>
          </div>
          <div className="w-[80%] md:w-[20%] h-[25vh] flex flex-col items-center justify-center bg-white text-secondary rounded-2xl">
            <GiCarWheel size={30}/>
            <h3>Drivers</h3>
            <p>250</p>
          </div>
          <div className="w-[80%] md:w-[20%] h-[25vh] flex flex-col items-center justify-center bg-white text-secondary rounded-2xl">
            <BsCarFront size={30}/>
            <h3>Rides</h3>
            <p>200</p>
          </div>
        </div>
      </div>

      {/* Contact us form */}
      <div className=" w-full mt-5 py-5 flex justify-center">
        <form className=" bg-white w-11/12 md:w-[80%] h-[80vh] shadow-xl shadow-secondary rounded-lg flex flex-col items-center space-y-4">
          <h3>Contact us</h3>
          <div className="m-1 flex flex-col w-[80%]">
            <label className='' >Name</label>
            <input type="text" className='border-secondary border-b-[1px]  h-[50px] outline-none' />
          </div>

          <div className="m-1 flex flex-col w-[80%]">
            <label className=''>Subject</label>
            <input type="text" className='border-secondary border-b-[1px]  h-[50px] bg-none outline-none' />
          </div>

          <div className="m-1 flex flex-col w-[80%]">
            <label className=''>Message</label>
            <textarea name="" id="" cols="30" rows="7"  className='border-secondary border-[1px]'></textarea>
          </div>
        </form>
      </div>

    {/* Footer */}
      <div className="bg-secondary text-white w-full h-full mt-5 pt-5 flex justify-center items-center flex-col">
        <div className="w-[80%]  flex items-start justify-between mb-5">
          <div className="flex flex-col space-y-7 md:w-[30%]">
            <h3>Rides</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Maxime asperiores enim consequuntur beatae eos illo ab ut quia magni perferendis!
            </p>
          </div>

          <div className="hidden md:flex flex-col space-y-7 md:w-[30%]">
            <h3>Services</h3>
            <ul className="flex flex-col space-y-2">
              <a href="/">Taxi</a>
              <a href="/">Car Hire</a>
              <a href="/">Wedding Hire</a>
              <a href="/">Cooperate Travel</a>
              <a href="/">Nation Wide Trips</a>
            </ul>
          </div>

          <div className="hidden md:flex flex-col space-y-7 md:w-[32%]">
            <h3>Contacts</h3>
            <div className="flex flex-col w-full justify-center">
              <p className='flex items-center space-x-4' ><BsFacebook/> <span>Facebook</span> </p>
              <p className='flex items-center space-x-4' ><BsInstagram/> <span>Instagram</span> </p>
              <p className='flex items-center space-x-4' ><BsTwitter/> <span>Twitter</span> </p>
            </div>
          </div>
        </div>
        <div className="w-full h-16 flex justify-center  items-center"> 
          <p>Copyright Rides 2023</p>
        </div>
      </div>
    </div>
  )
}
