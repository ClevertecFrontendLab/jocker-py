import {FC} from "react";
import {
    collapsedLogotype, collapsedMobileLogotype,
    styledLogotype,
    styledMobileLogotype
} from "./style.ts";
import {useScreenWidth} from "@hooks/useScreenWidth.tsx";

type LogotypeProps = {
    collapsed: boolean;
};

export const Logotype: FC<LogotypeProps> = ({ collapsed }) => {
    const { isSmall } = useScreenWidth();

    const logo = {
        mobile: {
            style: collapsed ? collapsedMobileLogotype : styledMobileLogotype,
            path: './logoFullMobile.svg',
        },
        desktop: {
            style: collapsed ? collapsedLogotype : styledLogotype,
            path: collapsed ? './logoShort.svg' : './logoFull.svg'
        }
    }

    return (
            <img style={isSmall ? logo.mobile.style : logo.desktop.style } src={isSmall ? logo.mobile.path : logo.desktop.path } alt='Logo' />
    );
};
