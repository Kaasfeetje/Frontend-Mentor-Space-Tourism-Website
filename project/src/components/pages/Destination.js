import React, { useState } from "react";
import Header from "../Header/Header";
import destinations from "../../assets/destination/destinations.json";
import DestinationCard from "../Destination/DestinationCard";

const Destination = () => {
    const [destination, setDestination] = useState(0);
    console.log(destinations[0]);
    return (
        <div className="destination min-h-screen">
            <Header />
            <main className="max-w-screen mx-auto p-4 md:p-8 lg:px-48">
                <h1 className="font-barlowCondensed text-white text-base tracking-widest text-center uppercase md:text-left md:text-xl">
                    <span className="font-bold text-white opacity-25 mr-4">
                        01
                    </span>
                    Pick your destination
                </h1>
                <DestinationCard
                    destination={destinations[destination]}
                    activeId={destination}
                    setDestination={setDestination}
                />
            </main>
        </div>
    );
};

export default Destination;
