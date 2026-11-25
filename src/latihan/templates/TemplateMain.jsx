import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AtomIcon from "../atoms/AtomIcon";

const TemplateMain = ({ children }) => {
    return (
        <>
            <div className="flex min-h-screen bg-gray-100">
                <aside className="bg-black text-white">
                    <div className="text-center p-2 text-md sm:text-5xl">LOGO</div>
                    <nav>
                        <div className="flex justify-center">
                            <div className="border p-2">
                                <HomeIcon />
                            </div>
                            <div className="border py-2 px-10 hidden sm:block">Menu 1</div>
                        </div>
                        <div className="flex justify-center">
                            <div className="border p-2">
                                <AtomIcon.Overview />
                            </div>
                            <div className="border py-2 px-10 hidden sm:block">Menu 2</div>
                        </div>
                    </nav>
                </aside>
                <main className="flex-1 p-2">{children}</main>
            </div>
        </>
    );
};

export default TemplateMain;
