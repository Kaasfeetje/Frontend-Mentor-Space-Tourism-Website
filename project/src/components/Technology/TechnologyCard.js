import React from "react";

const TechnologyCard = ({ technology, activeId, setTechnologyId }) => {
    return (
        <div className="max-w-screen mx-auto lg:flex lg:flex-row-reverse lg:items-center">
            <img
                className="w-full mt-4 md:mt-12 lg:hidden"
                src={technology.image.landscape}
                alt={technology.name}
            />
            <img
                className="hidden w-129 lg:block "
                src={technology.image.portrait}
                alt={technology.name}
            />
            <div className="lg:flex">
                <div className="flex justify-center my-6 md:mt-12 lg:flex-col">
                    <div
                        className={`w-10 h-10 mx-2 rounded-full border border-white text-center flex flex-col justify-center ${
                            activeId === 0
                                ? "bg-white  text-darkGrayBorder"
                                : " bg-transparent text-white border-opacity-25"
                        } md:w-16 md:h-16 lg:my-2 hover:border-opacity-50 hover:cursor-pointer`}
                        onClick={() => setTechnologyId(0)}
                    >
                        <span className="font-bellefair text-base md:text-xl">
                            1
                        </span>
                    </div>
                    <div
                        className={`w-10 h-10 mx-2 rounded-full border border-white text-center flex flex-col justify-center ${
                            activeId === 1
                                ? "bg-white  text-darkGrayBorder"
                                : " bg-transparent text-white border-opacity-25"
                        } md:w-16 md:h-16 lg:my-2 hover:border-opacity-50 hover:cursor-pointer`}
                        onClick={() => setTechnologyId(1)}
                    >
                        <span className="font-bellefair text-base md:text-xl">
                            2
                        </span>
                    </div>
                    <div
                        className={`w-10 h-10 mx-2 rounded-full border border-white text-center flex flex-col justify-center ${
                            activeId === 2
                                ? "bg-white  text-darkGrayBorder"
                                : " bg-transparent text-white border-opacity-25"
                        } md:w-16 md:h-16 lg:my-2 hover:border-opacity-50 hover:cursor-pointer`}
                        onClick={() => setTechnologyId(2)}
                    >
                        <span className="font-bellefair text-base md:text-xl">
                            3
                        </span>
                    </div>
                </div>
                <div className="flex flex-col px-4 items-center font-bellefair text-center text-mysteriousGray lg:items-start lg:ml-6 lg:text-left">
                    <h2 className="text-sm uppercase md:text-base md:mb-4">
                        The terminology...
                    </h2>
                    <h1 className="text-2xl text-white uppercase md:text-5xl">
                        {technology.name}
                    </h1>
                    <p className="font-barlow text-sml leading-6 mt-4 md:text-base md:leading-7 md:w-1/2 lg:w-2/3">
                        {technology.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TechnologyCard;
