import OverviewSVG from "../../assets/icons/Overview.svg?react";

const AtomIcon = {
    Overview: ({ size = 24, color = "currentColor", ...props }) => (
        <OverviewSVG width={size} height={size} stroke={color} {...props} />
    ),
};

export default AtomIcon;
