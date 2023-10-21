import { BsDoorOpen, BsFillTaxiFrontFill } from "react-icons/bs";
import { Carousel, Typography, Button } from "@material-tailwind/react";
const Banner = () => {
    return (
         <Carousel className="mt-16">
            <div className="relative h-[70vh] w-full">
                <img
                src="/images/bg_2.jpg"
                alt="image 1"
                className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                <div className="w-3/4 text-center md:w-2/4">
                    <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                    Taxi Services
                    </Typography>
                    <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                    >
                    We get to you in less than 30 minutes. Get a cab close to your location.
                    </Typography>
                    <div className="flex justify-center gap-2">
                    <Button size="lg" className="bg-secondary">
                        <div className="flex justify-around">
                            <p>Hire</p> <BsFillTaxiFrontFill size="20"/>
                         </div>
                    </Button>
                    <Button size="lg" color="white">
                        <div className="flex justify-around">
                            <p>Sign In</p> <BsDoorOpen size="20"/>
                         </div>
                    </Button>
                    </div>
                </div>
                </div>
            </div>
            <div className="relative h-[70vh] w-full">
                <img
                src="/images/bg_1.jpg"
                alt="image 1"
                className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                <div className="w-3/4 text-center md:w-2/4">
                    <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                    Taxi Services
                    </Typography>
                    <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                    >
                    We get to you in less than 30 minutes. Get a cab close to your location.
                    </Typography>
                    <div className="flex justify-center gap-2">
                    <Button size="lg" className="bg-secondary">
                        <div className="flex justify-around">
                            <p>Hire</p> <BsFillTaxiFrontFill size="20"/>
                         </div>
                    </Button>
                    <Button size="lg" color="white">
                        <div className="flex justify-around">
                            <p>Sign In</p> <BsDoorOpen size="20"/>
                         </div>
                    </Button>
                    </div>
                </div>
                </div>
            </div>
        </Carousel>
    );
}
 
export default Banner;