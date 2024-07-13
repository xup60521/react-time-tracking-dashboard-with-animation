import WorkIcon from "@/assets/images/icon-work.svg";
import PlayIcon from "@/assets/images/icon-play.svg";
import StudyIcon from "@/assets/images/icon-study.svg";
import ExerciseIcon from "@/assets/images/icon-exercise.svg";
import SocialIcon from "@/assets/images/icon-social.svg";
import SelfCareIcon from "@/assets/images/icon-self-care.svg";

export const data = [
    {
        title: "Work",
        timeframes: {
            daily: {
                current: 5,
                previous: 7,
            },
            weekly: {
                current: 32,
                previous: 36,
            },
            monthly: {
                current: 103,
                previous: 128,
            },
        },
    },
    {
        title: "Play",
        timeframes: {
            daily: {
                current: 1,
                previous: 2,
            },
            weekly: {
                current: 10,
                previous: 8,
            },
            monthly: {
                current: 23,
                previous: 29,
            },
        },
    },
    {
        title: "Study",
        timeframes: {
            daily: {
                current: 0,
                previous: 1,
            },
            weekly: {
                current: 4,
                previous: 7,
            },
            monthly: {
                current: 13,
                previous: 19,
            },
        },
    },
    {
        title: "Exercise",
        timeframes: {
            daily: {
                current: 1,
                previous: 1,
            },
            weekly: {
                current: 4,
                previous: 5,
            },
            monthly: {
                current: 11,
                previous: 18,
            },
        },
    },
    {
        title: "Social",
        timeframes: {
            daily: {
                current: 1,
                previous: 3,
            },
            weekly: {
                current: 5,
                previous: 10,
            },
            monthly: {
                current: 21,
                previous: 23,
            },
        },
    },
    {
        title: "Self Care",
        timeframes: {
            daily: {
                current: 0,
                previous: 1,
            },
            weekly: {
                current: 2,
                previous: 2,
            },
            monthly: {
                current: 7,
                previous: 11,
            },
        },
    },
];

export function getColorAndImage(
    title:
        | "Work"
        | "Play"
        | "Study"
        | "Exercise"
        | "Social"
        | "Self Care"
        | string
) {
    if (title === "Work") {
        return { className: "bg-p_work_light_red", image: WorkIcon };
    }
    if (title === "Play") {
        return { className: "bg-p_play_soft_blue", image: PlayIcon };
    }
    if (title === "Study") {
        return { className: "bg-p_study_light_red", image: StudyIcon };
    }
    if (title === "Exercise") {
        return { className: "bg-p_exercise_lime_green", image: ExerciseIcon };
    }
    if (title === "Social") {
        return { className: "bg-p_social_violet", image: SocialIcon };
    }
    if (title === "Self Care") {
        return { className: "bg-p_selfcare_soft_orange", image: SelfCareIcon };
    }
    return { className: "", image: "" };
}
