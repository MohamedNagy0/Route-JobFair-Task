/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "576px",

            md: "768px",

            lg: "992px",

            xl: "1200px",

            "2xl": "1400px",
        },
        container: {
            center: true,
            screens: {
                sm: "540px",

                md: "720px",

                lg: "960px",

                xl: "1140px",

                "2xl": "1320px",
            },
        },
        extend: {
            colors: {
                "primary-color-1": "var(--primary-color-1)",
                "primary-color-2": "var(--primary-color-2)",
                "primary-bg-1": "var(--primary-bg-1)",
                "primary-bg-2": "var(--primary-bg-2)",
                "primary-bg-3": "var(--primary-bg-3)",
            },
        },
    },
    plugins: [],
};
