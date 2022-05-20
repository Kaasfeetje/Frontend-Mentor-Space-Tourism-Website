import React, { useState } from "react";
import crew from "../../assets/crew/crew.json";
import CrewCard from "../Crew/CrewCard";
import Header from "../Header/Header";

const Crew = () => {
    const [crewId, setCrewId] = useState(0);

    return (
        <div className="relative crew min-h-screen">
            <Header />
            <main className="max-w-screen mx-auto p-4 pb-16 md:p-16 md:pb-0 lg:px-48">
                <h1 className="font-barlowCondensed text-white text-base tracking-widest text-center uppercase md:text-left md:text-xl">
                    <span className="font-bold text-white opacity-25 mr-4">
                        02
                    </span>
                    Meet your crew
                </h1>
                <CrewCard
                    crew={crew[crewId]}
                    activeId={crewId}
                    setCrewId={setCrewId}
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

export default Crew;
