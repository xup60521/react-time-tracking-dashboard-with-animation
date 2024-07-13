import { data, getColorAndImage } from "@/utils";
import EllipsisIcon from "@/assets/images/icon-ellipsis.svg";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useState } from "react";

export default function Dashboard({
    timeSpan,
}: {
    timeSpan: "daily" | "weekly" | "monthly";
}) {
    const [open, setOpen] = useState(true);
    return (
        <Fragment>
            <button
                className="text-white fixed top-0 left-0"
                onClick={() => setOpen(!open)}
            >
                toggle
            </button>
            <AnimatePresence>
                {open && (
                    <div
                        className="w-full h-full absolute px-4 grid grid-cols-3 grid-rows-2 gap-4"
                        key={timeSpan}
                    >
                        {data.map((item, index) => {
                            return (
                                <div
                                    className="relative"
                                    key={`${timeSpan} ${index} upperdiv`}
                                >
                                    <motion.div
                                        key={`${timeSpan} ${index}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            transition: { delay: 0.05 * (index + 1) + 0.2 },
                                        }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ delay: 0.05 * index }}
                                        className={`${
                                            getColorAndImage(item.title)
                                                .className
                                        } rounded-lg absolute w-full h-full flex flex-col overflow-hidden`}
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
                                        <div className="flex-grow bg-n_dark_blue rounded-lg flex flex-col p-5">
                                            <div className="flex items-center justify-between">
                                                <span className="text-white text-xs font-semibold">
                                                    {item.title}
                                                </span>
                                                <button>
                                                    <span className="sr-only">
                                                        more
                                                    </span>
                                                    <img
                                                        src={EllipsisIcon}
                                                        alt="more"
                                                        className="scale-50"
                                                    />
                                                </button>
                                            </div>
                                            <span className="text-white text-3xl font-thin pt-3 pb-2">
                                                {
                                                    item.timeframes[timeSpan]
                                                        .current
                                                }
                                                hrs
                                            </span>
                                            <span className="text-n_desaturated_blue text-xs">
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
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </AnimatePresence>
        </Fragment>
    );
}
