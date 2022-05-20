import React from "react";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div className="home w-screen min-h-screen relative">
            <Header />
            <main className="mx-auto max-w-screen-lg p-6 flex flex-col items-center md:pt-20 lg:flex-row lg:relative lg:justify-center lg:items-end lg:pt-48">
                <div className="mt-8 text-center font-barlowCondensed text-mysteriousGray flex flex-col lg:text-left lg:ml-24">
                    <h2 className="text-base tracking-widest uppercase md:text-xl lg:text-2xl lg:w-fit">
                        So, you want to travel to
                    </h2>
                    <h1 className="font-bellefair font-normal text-7xl text-white uppercase md:text-10xl lg:w-fit">
                        Space
                    </h1>
                    <p className="font-barlow font-normal text-sml leading-6 md:text-base md:w-1/2 md:mx-auto md:leading-7 lg:text-lg lg:mx-0 lg:w-1/3">
                        Let’s face it; if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div className="explore z-0 absolute font-bellefair bg-white  w-36 h-36 flex items-center justify-center rounded-full bottom-16 md:bottom-24 md:w-60 md:h-60 lg:w-72 lg:h-72 lg:bottom-auto lg:right-24">
                    <div className="z-10 absolute bg-white flex items-center justify-center rounded-full">
                        <h3 className="text-3xl">Explore</h3>
                    </div>
                    <div className="effect"> </div>
                </div>
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

export default Home;
