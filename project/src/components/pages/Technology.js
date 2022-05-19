import React, { useState } from "react";
import Header from "../Header/Header";
import TechnologyCard from "../Technology/TechnologyCard";
import technologies from "../../assets/technology/technology.json";

const Technology = () => {
    const [technologyId, setTechnologyId] = useState(0);
    return (
        <div className="technology min-h-screen">
            <Header />
            <main className="max-w-screen mx-auto py-4 md:py-8 lg:pl-48">
                <h1 className="font-barlowCondensed text-white text-base tracking-widest text-center uppercase md:text-left md:text-xl">
                    <span className="font-bold text-white opacity-25 mr-4">
                        03
                    </span>
                    Space launch 101
                </h1>
                <TechnologyCard
                    technology={technologies[technologyId]}
                    activeId={technologyId}
                    setTechnologyId={setTechnologyId}
                />
            </main>
        </div>
    );
};

export default Technology;
