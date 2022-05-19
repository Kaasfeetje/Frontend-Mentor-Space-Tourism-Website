module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            sm: "375px",
            md: "768px",
            lg: "1440px",
        },

        extend: {
            fontFamily: {
                barlowCondensed: ["Barlow Condensed", "sans-serif"],
            },
            colors: {
                transparentWhite: "rgba(255,255,255,0.04)",
                headerLineGray: "#979797",
            },
        },
    },
    plugins: [],
};
