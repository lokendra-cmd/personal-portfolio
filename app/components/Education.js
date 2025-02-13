import React from "react";
import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";

const Education = () => {
    return (
    <div className="w-[100%] flex flex-col justify-center items-center gap-[5vw] pt-[15vh]">
        <h1 className="text-[2.5rem] " style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Education</h1>
        <div className="flex items-center mt-[10vh]">
            <div className="educationCard ">
                <h2 className="text-center text-[1.5rem] customTextShadow">Graduation</h2>
                <p className="font-bold mt-[2vh]">2019 - 2023</p>
                <p className="font-bold mt-[1vh]">G.H Raisoni College of Engineering, Nagpur, M.H </p>
                <p className="font-bold mt-[1vh]">B.Tech, Computer Science & Engineering</p>
                <p className="font-bold mt-[1vh]">Pointer: 8.5 / 10</p>
                
            </div>

            <div className="seprationLine"/>

            <div className="educationCard">
                <h2 className="text-center text-[1.5rem] customTextShadow">Higher Secondary School</h2>
                <p className="font-bold mt-[2vh]">2019 - 2019</p>
                <p className="font-bold mt-[1vh]">SK Porwal College, Kamptee, Maharashtra </p>
                <p className="font-bold mt-[1vh]">Maharashtra State Board </p>
                <p className="font-bold mt-[1vh]">Percentage: 62% </p>
                
            </div>

            <div className="seprationLine"/>

            <div className="educationCard">
                <h2 className="text-center text-[1.5rem] customTextShadow">Secondary School</h2>
                <p className="font-bold mt-[2vh]">2016 - 2017</p>
                <p className="font-bold mt-[1vh]">Skyline School, Sausar, Madhya Pradesh </p>
                <p className="font-bold mt-[1vh]">Central Board of Secondary Education</p>
                <p className="font-bold mt-[1vh]">CGPA: 8.8 / 10</p>
                
            </div>
        </div>
    </div>
    );
};

export default Education;
