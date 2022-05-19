import React from "react";

const CrewCard = ({ crew, activeId, setCrewId }) => {
    return (
        <div className="flex flex-col items-center p-4 md:flex-col-reverse md:pb-0 md:absolute md:left-0 md:bottom-0 lg:flex-row-reverse lg:mx-auto lg:max-w-screen lg:px-48 lg:justify-between">
            <img
                className="h-56 md:h-129 md:mt-8"
                src={crew.image}
                alt={`${crew.name} - ${crew.role}`}
            />
            <div className="md:flex md:flex-col-reverse">
                <div className="flex justify-center border-t border-destinationLine pt-6 w-full md:border-t-0 lg:justify-start lg:mt-24">
                    <div
                        className={`bg-white w-3 h-3 mx-2 rounded-full ${
                            0 === activeId ? "opacity-100" : "opacity-20"
                        } lg:ml-0 hover:bg-white hover:opacity-50 hover:cursor-pointer`}
                        onClick={() => setCrewId(0)}
                    >
                        {" "}
                    </div>
                    <div
                        className={`bg-white w-3 h-3 mx-2 rounded-full ${
                            1 === activeId ? "opacity-100" : "opacity-20"
                        } hover:bg-white hover:opacity-50 hover:cursor-pointer`}
                        onClick={() => setCrewId(1)}
                    >
                        {" "}
                    </div>
                    <div
                        className={`bg-white w-3 h-3 mx-2 rounded-full ${
                            2 === activeId ? "opacity-100" : "opacity-20"
                        } hover:bg-white hover:opacity-50 hover:cursor-pointer`}
                        onClick={() => setCrewId(2)}
                    >
                        {" "}
                    </div>
                    <div
                        className={`bg-white w-3 h-3 mx-2 rounded-full ${
                            3 === activeId ? "opacity-100" : "opacity-20"
                        } hover:bg-white hover:opacity-50 hover:cursor-pointer`}
                        onClick={() => setCrewId(3)}
                    >
                        {" "}
                    </div>
                </div>
                <div className="font-bellefair text-white md:flex md:flex-col md:items-center lg:items-start">
                    <h2 className="text-base opacity-50 uppercase text-center mt-6 md:text-2xl lg:text-left lg:md:text-3xl">
                        {crew.role}
                    </h2>
                    <h1 className="text-2xl text-center uppercase mb-3 md:text-4xl md:mb-0 md:mt-4 lg:text-left lg:text-6xl ">
                        {crew.name}
                    </h1>
                    <p className="font-barlow text-sml text-mysteriousGray leading-6 text-center md:text-base md:w-1/2 md:my-6 lg:text-left lg:text-lg lg:w-2/3">
                        {crew.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CrewCard;
