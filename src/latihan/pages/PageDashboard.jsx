import React from "react";
import TemplateMain from "../templates/TemplateMain";
import AtomCard from "../atoms/AtomCard";

const PageDashboard = () => {
    return (
        <TemplateMain>
            <div className="grid gap-6 sm:grid-cols-12 sm:grid-rows-3">
                <AtomCard className="sm:col-span-4 sm:row-span-2 bg-white">Dashboard 1</AtomCard>
                <AtomCard className="sm:col-span-4 bg-white">Dashboard 2</AtomCard>
                <AtomCard className="sm:col-span-4 bg-white">Dashboard 3</AtomCard>
                <AtomCard className="sm:col-span-8 bg-white">Dashboard 4</AtomCard>
            </div>
        </TemplateMain>
    );
};

export default PageDashboard;
