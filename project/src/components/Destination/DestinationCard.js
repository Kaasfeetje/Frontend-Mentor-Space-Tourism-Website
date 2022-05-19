import React from "react";

const DestinationCard = ({ destination, activeId, setDestination }) => {
    return (
        <div className="flex flex-col items-center mt-6 md:mt-12 md:px-4 lg:flex-row lg:justify-between">
            <img
                src={`${process.env.PUBLIC_URL}${destination.image}`}
                alt={destination.name}
                className="w-44 h-44 md:w-72 md:h-72 lg:w-128 lg:h-128"
            />
            <div className="my-6 md:my-12 lg:w-2/5">
                <div className="flex justify-center font-barlowCondensed lg:justify-start">
                    <button
                        onClick={() => setDestination(0)}
                        className={`mx-4 text-sm border-b-4 pb-2 uppercase tracking-widest ${
                            0 === activeId
                                ? "border-white text-white"
                                : "text-mysteriousGray border-transparent"
                        } md:text-base lg:ml-0`}
                    >
                        Moon
                    </button>
                    <button
                        onClick={() => setDestination(1)}
                        className={`mx-4 text-sm border-b-4 pb-2 uppercase tracking-widest ${
                            1 === activeId
                                ? "border-white text-white"
                                : "text-mysteriousGray border-transparent"
                        } md:text-base`}
                    >
                        Mars
                    </button>
                    <button
                        onClick={() => setDestination(2)}
                        className={`mx-4 text-sm border-b-4 pb-2 uppercase tracking-widest ${
                            2 === activeId
                                ? "border-white text-white"
                                : "text-mysteriousGray border-transparent"
                        } md:text-base`}
                    >
                        Europa
                    </button>
                    <button
                        onClick={() => setDestination(3)}
                        className={`mx-4 text-sm border-b-4 pb-2 uppercase tracking-widest ${
                            3 === activeId
                                ? "border-white text-white"
                                : "text-mysteriousGray border-transparent"
                        } md:text-base`}
                    >
                        Titan
                    </button>
                </div>
                <h1 className="font-bellefair text-white text-center text-6xl uppercase mt-6 mb-4 md:mt-12 md:font-7xl lg:text-left lg:text-8xl">
                    {destination.name}
                </h1>
                <p className="font-barlow text-sml text-center text-mysteriousGray leading-6 md:text-base lg:text-left lg:text-lg">
                    {destination.description}
                </p>
                <div className="font-bellefair pt-6 mt-6 border-t border-destinationLine text-white flex flex-col md:pt-12 md:mt-12 md:flex-row md:items-center md:justify-center lg:justify-start">
                    <div className="flex flex-col items-center text-2xl uppercase md:mx-12 lg:ml-0 lg:items-start">
                        <span className="font-barlowCondensed text-mysteriousGray text-sm  lg:text-left">
                            Avg. Distance
                        </span>
                        {destination.distance} KM
                    </div>
                    <div className="flex flex-col items-center text-2xl uppercase mt-6 md:mt-0 md:mx-12 lg:items-start">
                        <span className="font-barlowCondensed text-mysteriousGray text-sm  lg:text-left">
                            Est. travel time
                        </span>
                        {destination.travelTime}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationCard;
