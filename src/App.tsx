import { HashRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";

export default function App() {
    return (
        <HashRouter>
            <main className="w-full min-h-screen bg-n_very_dark_blue flex items-center justify-center">
                <div className="flex h-[22.25rem]">
                    <Nav />
                    <div className="h-full w-[37.5rem] relative">
                        <Routes>
                            <Route
                                path="/"
                                element={<Dashboard timeSpan="daily" />}
                            />
                            <Route
                                path="/weekly"
                                element={<Dashboard timeSpan="weekly" />}
                            />
                            <Route
                                path="/monthly"
                                element={<Dashboard timeSpan="monthly" />}
                            />
                        </Routes>
                    </div>
                </div>
            </main>
        </HashRouter>
    );
}
