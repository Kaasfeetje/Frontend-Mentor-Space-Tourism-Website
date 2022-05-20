import React, { useState } from "react";
import Header from "../Header/Header";
import TechnologyCard from "../Technology/TechnologyCard";
import technologies from "../../assets/technology/technology.json";

const Technology = () => {
    const [technologyId, setTechnologyId] = useState(0);
    return (
        <div className="relative technology min-h-screen">
            <Header />
            <main className="max-w-screen mx-auto py-4 pb-20 md:py-8 lg:pl-48">
                <h1 className="font-barlowCondensed text-white text-base pl-8 tracking-widest text-center uppercase md:text-left md:text-xl">
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
            <div class="attribution">
                Challenge by{" "}
                <a
                    href="https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5/hub/intro-section-with-dropdown-navigation-H1TlVv08q"
                    target="_blank"
                    rel="noreferrer"
                >
                    Frontend Mentor
                </a>
                .<br /> Coded by{" "}
                <a
                    href="https://github.com/Kaasfeetje"
                    target="_blank"
                    rel="noreferrer"
                >
                    Kaasfeetje
                </a>
                .
            </div>
        </div>
    );
};

export default Technology;
