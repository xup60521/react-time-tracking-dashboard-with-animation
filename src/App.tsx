import { HashRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";


export default function App() {
    return (
        <HashRouter>
            <main className="w-full min-h-screen bg-n_very_dark_blue flex md:items-center justify-center py-16 px-6">
                <div className="flex md:flex-row flex-col md:h-[22.25rem] w-full md:w-fit">
                    <Nav />
                    <div className="h-full md:w-[37.5rem] relative">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <Dashboard
                                        timeSpan="daily"
                                        key="route"
                                        // setAllowNavigation={setAllowNavigation}
                                    />
                                }
                            />
                            <Route
                                path="/weekly"
                                element={
                                    <Dashboard
                                        timeSpan="weekly"
                                        key="route"
                                        // setAllowNavigation={setAllowNavigation}
                                    />
                                }
                            />
                            <Route
                                path="/monthly"
                                element={
                                    <Dashboard
                                        timeSpan="monthly"
                                        key="route"
                                        // setAllowNavigation={setAllowNavigation}
                                    />
                                }
                            />
                        </Routes>
                    </div>
                </div>
            </main>
        </HashRouter>
    );
}
