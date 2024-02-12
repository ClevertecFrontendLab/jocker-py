import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import {FC} from 'react';
import {
    descktopArrow,
    greyIcon,
    mobileArrow,
} from '@pages/main-page/components/Sidebar/Arrow/style.ts';
import { useScreenWidth } from '@hooks/useScreenWidth.tsx';

type ArrowProps = {
    collapsed: boolean;
    onChange: (value: boolean) => void;
};
export const Arrow: FC<ArrowProps> = ({ collapsed, onChange }) => {
    const { isSmall } = useScreenWidth();

    return (
        <div
            style={isSmall ? mobileArrow : descktopArrow}
            onClick={() => onChange(!collapsed)}
            data-test-id={isSmall ? 'sider-switch-mobile' : 'sider-switch'}
        >
            {collapsed ? (
                <MenuUnfoldOutlined style={greyIcon} />
            ) : (
                <MenuFoldOutlined style={greyIcon} />
            )}
        </div>
    );
};
