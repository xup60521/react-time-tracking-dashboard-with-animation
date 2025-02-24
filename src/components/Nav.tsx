import { NavLink } from "react-router-dom";
import Avatar from "@/assets/images/image-jeremy.png";
import { useEffect, useState } from "react";

export default function Nav() {
    const [allowNavigation, setAllowNavigation] = useState(true)
    useEffect(()=>{
        if (!allowNavigation) {
            setTimeout(() => {
                setAllowNavigation(true)
            }, 1000);
        }
    }, [allowNavigation])
    return (
        <div className="md:grid md:grid-rows-3 bg-n_dark_blue md:w-44 md:rounded-lg rounded-2xl">
            <div className="row-span-2 bg-p_blue md:rounded-lg rounded-2xl flex md:flex-col md:gap-0 gap-6 items-center md:items-start px-5 md:py-6 py-8">
                <img
                    src={Avatar}
                    alt="avatar"
                    className="md:size-12 size-14 rounded-full ring-2 ring-white"
                />
                <div className="md:py-6 md:translate-y-0 -translate-y-1">
                    <span className="text-[10px] text-n_desaturated_blue">
                        Report for
                    </span>
                    <h1 className="text-white text-2xl font-thin -my-1 tracking-wider">
                        Jaremy Robson
                    </h1>
                </div>
            </div>
            <div className={`row-span-1 flex md:flex-col md:justify-between justify-around items-start md:text-xs md:p-5 py-4 text-n_desaturated_blue ${!allowNavigation && "cursor-wait"}`}>
                <NavLink
                    onClick={() => setAllowNavigation(false)}
                    to={"/"}
                    className={({ isActive }) =>
                        isActive ? "text-white" : `transition hover:text-white ${!allowNavigation && "pointer-events-none"}`
                    }
                >
                    Daily
                </NavLink>
                <NavLink
                    onClick={() => setAllowNavigation(false)}
                    to="/weekly"
                    className={({ isActive }) =>
                        isActive ? "text-white" : `transition hover:text-white ${!allowNavigation && "pointer-events-none"}`
                    }
                >
                    Weekly
                </NavLink>
                <NavLink
                    onClick={() => setAllowNavigation(false)}
                    to="/monthly"
                    className={({ isActive }) =>
                        isActive ? "text-white" : `transition hover:text-white ${!allowNavigation && "pointer-events-none"}`
                    }
                >
                    Monthly
                </NavLink>
            </div>
        </div>
    );
}
