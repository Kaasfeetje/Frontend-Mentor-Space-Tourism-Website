module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            sm: "375px",
            md: "768px",
            lg: "1440px",
        },

        extend: {
            width: {
                128: "27.815rem",
            },
            height: {
                128: "27.815rem",
            },
            fontFamily: {
                barlowCondensed: ["Barlow Condensed", "sans-serif"],
                barlow: ["Barlow", "sans-serif"],
                bellefair: ["Bellefair", "serif"],
            },
            fontSize: {
                sml: "0.9375rem",
                "2xl": "1.75rem",
                "3xl": "2rem",
                "7xl": "5rem",
                "10xl": "9.375rem",
            },
            colors: {
                transparentWhite: "rgba(255,255,255,0.04)",
                headerLineGray: "#979797",
                destinationLine: "#383B4B",
                mysteriousGray: "#D0D6F9",
            },
        },
    },
    plugins: [],
};
