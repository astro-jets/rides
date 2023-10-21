import Navbar from "../components/Navbar";

const contacts = () => {
    return ( 
        <>
            <Navbar/>
            <div className="mt-16 w-full h-full flex items-center">
                <div className=" w-full mt-5 py-5 flex justify-center">
                    <form className=" bg-white w-11/12 md:w-[80%] h-[80vh] shadow-xl shadow-secondary rounded-lg flex flex-col items-center space-y-4 pt-5">
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
            </div>
        </>

     );
}
 
export default contacts;