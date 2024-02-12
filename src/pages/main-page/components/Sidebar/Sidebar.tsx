import { useCallback, useState } from 'react';
import { Layout } from 'antd';
import './style.css';
import { sizes } from '../../../../constants.ts';
import { Logotype } from './Logotype';
import { NavList } from './NavList';
import { Logout } from './Logout';
import { Arrow } from '@pages/main-page/components/Sidebar/Arrow';
import { useScreenWidth } from '@hooks/useScreenWidth.tsx';

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(true);

    const { isSmall } = useScreenWidth();

    const handleChangeCollapsed = useCallback(
        (value: boolean) => {
            setCollapsed(value);
        },
        [setCollapsed],
    );

    return (
        <>
            <Layout.Sider
                id='sidebar'
                width={isSmall ? sizes.sidebar.mobile.full : sizes.sidebar.desktop.full}
                collapsedWidth={
                    isSmall ? sizes.sidebar.mobile.collapsed : sizes.sidebar.desktop.collapsed
                }
                collapsed={collapsed}
            >
                <Logotype collapsed={collapsed} />
                <NavList />
                <Logout collapsed={collapsed} />
                <Arrow collapsed={collapsed} onChange={handleChangeCollapsed} />
            </Layout.Sider>
        </>
    );
};
