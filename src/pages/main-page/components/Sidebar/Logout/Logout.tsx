import { FC } from 'react';
import {
    collapsedLogout,
    collapsedMobileLogout,
    mobileLogout,
    styledLogout
} from '@pages/main-page/components/Sidebar/Logout/style.ts';
import { useScreenWidth } from '@hooks/useScreenWidth.tsx';

type LogoutProps = {
    collapsed: boolean;
};


export const Logout: FC<LogoutProps> = ({ collapsed }) => {
    const { isSmall } = useScreenWidth();

    const style = {
        collapsed: isSmall ? collapsedMobileLogout : collapsedLogout,
        full: isSmall ? mobileLogout : styledLogout,
    }

    return (
        <div style={collapsed ? style.collapsed : style.full}>
            {!isSmall && <img src={'./exit.svg'} alt='exit' />}
            {!collapsed && <span>Выход</span>}
        </div>
    );
};
