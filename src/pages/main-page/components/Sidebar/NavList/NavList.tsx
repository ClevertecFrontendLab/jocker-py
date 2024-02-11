import { Menu } from 'antd';
import { CalendarOutlined, HeartFilled, IdcardOutlined, TrophyFilled } from '@ant-design/icons';
import {
    blueIcon,
    styledNavList,
    whiteIcon,
} from '@pages/main-page/components/Sidebar/NavList/style.ts';
import { colors } from '../../../../../constants.ts';
import './style.css';
import { useScreenWidth } from '@hooks/useScreenWidth.tsx';
import { useMemo } from 'react';

const items = [
    {
        label: 'Календарь',
        title: 'Календарь',
        key: 'Календарь',
        icon: <CalendarOutlined style={whiteIcon} />,
    },
    {
        label: 'Тренировки',
        title: 'Тренировки',
        key: 'Тренировки',
        icon: <HeartFilled style={blueIcon} />,
    },
    {
        label: 'Достижения',
        title: 'Достижения',
        key: 'Достижения',
        icon: <TrophyFilled style={blueIcon} />,
    },
    {
        label: 'Профиль',
        title: 'Профиль',
        key: 'Профиль',
        icon: <IdcardOutlined style={whiteIcon} twoToneColor={colors.blue.standard} />,
    },
];

export const NavList = () => {
    const { isSmall } = useScreenWidth();

    const menuItems = useMemo(() => {
        if (isSmall) {
            return items.map(({ title, label, key }) => ({ title, label, key }));
        }
        return items;
    }, [isSmall]);

    return <Menu id='navList' items={menuItems} style={styledNavList} />;
};
