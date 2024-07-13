import Avatar from "@/assets/images/image-jeremy.png";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <HashRouter>
            <main className="w-full min-h-screen bg-n_very_dark_blue flex items-center justify-center">
                <div className="flex h-[22.25rem]">
                    <div className="grid grid-rows-3 bg-n_dark_blue w-44 rounded-lg overflow-hidden">
                        <div className="row-span-2 bg-p_blue rounded-lg flex flex-col px-5 py-6">
                            <img
                                src={Avatar}
                                alt="avatar"
                                className="size-12 rounded-full ring-2 ring-white"
                            />
                            <div className="py-6">
                                <span className="text-[10px] text-n_desaturated_blue">
                                    Report for
                                </span>
                                <h1 className="text-white text-2xl font-thin -my-1 tracking-wider">
                                    Jaremy Robson
                                </h1>
                            </div>
                        </div>
                        <div className="row-span-1 flex flex-col justify-between items-start text-xs p-5 text-n_desaturated_blue">
                            <NavLink
                                to={"/"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-white"
                                        : "transition hover:text-white"
                                }
                            >
                                Daily
                            </NavLink>
                            <NavLink
                                to="/weekly"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-white"
                                        : "transition hover:text-white"
                                }
                            >
                                Weekly
                            </NavLink>
                            <NavLink
                                to="/monthly"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-white"
                                        : "transition hover:text-white"
                                }
                            >
                                Monthly
                            </NavLink>
                        </div>
                    </div>
                    <div className="bg-black h-full w-[37.5rem]">
                        <Routes>
                            <Route path="/" element={<p>daily</p>} />
                            <Route path="/weekly" element={<p>weekly</p>} />
                            <Route path="/monthly" element={<p>monthly</p>} />
                        </Routes>
                    </div>
                </div>
            </main>
        </HashRouter>
    );
}
