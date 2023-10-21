import { BsFillTaxiFrontFill, BsTruck } from "react-icons/bs";
import { PiChurchBold } from "react-icons/pi";

const Services = () => {
  return (
        <div className="services flex flex-col items-center">
            <h3>Our Services</h3>
            <div className="service-list">
                <div className="service">
                    <div className="w-full flex items-center justify-center">
                        <BsFillTaxiFrontFill  className="icon"/>
                    </div>
                    <a href="#">
                        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Taxi Booking</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">We get to you in less than 30 minutes.</p>
                    <a href="#" className="inline-flex items-center text-secondary hover:underline">
                        See our guideline
                        <svg className="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                        </svg>
                    </a>
                </div>
                <div className="service">
                    <div className="w-full flex items-center justify-center">
                        <PiChurchBold  className="icon"/>
                    </div>
                    <a href="#">
                        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Weddings</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">We get to you in less than 30 minutes.</p>
                    <a href="#" className="inline-flex items-center text-secondary hover:underline">
                        See our guideline
                        <svg className="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                        </svg>
                    </a>
                </div>
                <div className="service">
                    <div className="w-full flex items-center justify-center">
                        <BsTruck  className="icon"/>
                    </div>
                    <a href="#">
                        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Relocation</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">We get your property from one point to another safely. We even pack for you.</p>
                    <a href="#" className="inline-flex items-center text-secondary hover:underline">
                        See our guideline
                        <svg className="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
  );
};

export default Services;
