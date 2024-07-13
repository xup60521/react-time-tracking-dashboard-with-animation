/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                rubik: ["Rubik", "sans-serif"]
            },
            colors: {
                n_very_dark_blue: "hsl(226, 43%, 10%)",
                n_dark_blue: "hsl(235, 46%, 20%)",
                n_desaturated_blue: "hsl(235, 45%, 61%)",
                n_pale_Blue: "hsl(236, 100%, 87%)",
                p_blue: "hsl(246, 80%, 60%)",
                p_work_light_red: "hsl(15, 100%, 70%)",
                p_play_soft_blue: "hsl(195, 74%, 62%)",
                p_study_light_red: "hsl(348, 100%, 68%)",
                p_exercise_lime_green: "hsl(145, 58%, 55%)",
                p_social_violet: "hsl(264, 64%, 52%)",
                p_selfcare_soft_orange: "hsl(43, 84%, 65%)"
            }
        },
    },
    plugins: [],
}

