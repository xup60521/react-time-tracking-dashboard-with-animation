import { data, getColorAndImage } from "@/utils";
import EllipsisIcon from "@/assets/images/icon-ellipsis.svg";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment } from "react";

export default function Dashboard({
    timeSpan,
}: {
    timeSpan: "daily" | "weekly" | "monthly";
}) {
    return (
        <Fragment key={"dashboard top"}>
            <AnimatePresence key={`animate presence`}>
                <div
                    className="w-full md:h-full absolute md:px-4 md:grid md:grid-cols-3 grid-rows-6 grid-cols-1 md:grid-rows-2 md:gap-4 gap-[10.5rem] md:p-0 pb-16"
                    key={`not the same ${timeSpan}`}
                >
                    {data.map((item, index) => {
                        return (
                            <div
                                className="relative md:h-full h-36 md:mt-0 mt-6"
                                key={`${timeSpan} ${index} upperdiv`}
                            >
                                <motion.div
                                    key={`${timeSpan} ${index}`}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            delay: 0.05 * (index + 1) + 0.15,
                                        },
                                    }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{
                                        delay: 0.05 * index,
                                        type: "spring",
                                    }}
                                    className={`${
                                        getColorAndImage(item.title).className
                                    } md:rounded-lg rounded-2xl absolute w-full h-full flex flex-col overflow-hidden`}
                                >
                                    <div className="h-8 flex justify-end overflow-hidden items-center">
                                        <img
                                            src={
                                                getColorAndImage(item.title)
                                                    .image
                                            }
                                            alt={`${item.title} image`}
                                            className="scale-[0.65] translate-y-1"
                                        />
                                    </div>
                                    <div className="flex-grow bg-n_dark_blue md:rounded-t-lg rounded-t-2xl flex flex-col px-5 md:py-5 py-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-white md:text-xs font-semibold">
                                                {item.title}
                                            </span>
                                            <button>
                                                <span className="sr-only">
                                                    more
                                                </span>
                                                <img
                                                    src={EllipsisIcon}
                                                    alt="more"
                                                    className="md:scale-50 scale-75"
                                                />
                                            </button>
                                        </div>
                                        <div className="flex md:flex-col flex-row items-center md:items-start md:justify-normal justify-between">
                                            <span className="text-white text-3xl font-thin pt-3 pb-2">
                                                {
                                                    item.timeframes[timeSpan]
                                                        .current
                                                }
                                                hrs
                                            </span>
                                            <span className="text-n_desaturated_blue md:text-xs text-sm">
                                                Last{" "}
                                                {timeSpan === "daily"
                                                    ? "day"
                                                    : timeSpan === "monthly"
                                                    ? "month"
                                                    : "week"}{" "}
                                                -{" "}
                                                {
                                                    item.timeframes[timeSpan]
                                                        .previous
                                                }
                                                hrs
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </AnimatePresence>
        </Fragment>
    );
}
