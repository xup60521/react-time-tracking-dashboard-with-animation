import { data, getColorAndImage } from "@/utils";
import EllipsisIcon from "@/assets/images/icon-ellipsis.svg"

export default function Dashboard({
    timeSpan,
}: {
    timeSpan: "daily" | "weekly" | "monthly";
}) {
    return (
        <div className="w-full h-full absolute px-4 grid grid-cols-3 grid-rows-2 gap-4">
            {data.map((item, index) => {
                return (
                    <div
                        key={`${timeSpan} ${index}`}
                        className={`${
                            getColorAndImage(item.title).className
                        } rounded-lg relative flex flex-col`}
                    >
                        <div className="h-8 flex justify-end overflow-hidden items-center">
                            <img
                                src={getColorAndImage(item.title).image}
                                alt={`${item.title} image`}
                                className="scale-[0.65] translate-y-1"
                            />
                        </div>
                        <div className="flex-grow bg-n_dark_blue rounded-lg flex flex-col">
                            <div className="flex items-center justify-between">
                                <span className="text-white">{item.title}</span>
                                <button>
                                    <span className="sr-only">more</span>
                                    <img src={EllipsisIcon} alt="more" />
                                </button>
                            </div>
                            <span className="text-white">{item.timeframes[timeSpan].current}hrs</span>
                            <span className="text-n_desaturated_blue">Last {timeSpan === "daily" ? "day" : timeSpan === "monthly" ? "month" : "week"} - {item.timeframes[timeSpan].previous}hrs</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
