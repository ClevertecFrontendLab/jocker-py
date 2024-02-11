import { Breadcrumb, Button, Layout, Typography } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import './style.css';
import { useScreenWidth } from '@hooks/useScreenWidth.tsx';

export const Header = () => {
    const { isLarge, isSmall } = useScreenWidth();

    return (
        <Layout.Header id='header'>
            <Breadcrumb routes={[{ breadcrumbName: 'Главная', path: './' }]} />
            <div id='headerContent'>
                <Typography.Text id='headerTitle'>
                    Приветствуем тебя в CleverFit — приложении, <br /> которое поможет тебе добиться
                    своей мечты!
                </Typography.Text>
                <Button
                    type='text'
                    icon={
                        isLarge ? (
                            <SettingOutlined style={{ marginRight: '2px' }} />
                        ) : isSmall ? (
                            <Button shape='circle' icon={<SettingOutlined />} style={{position: "relative", top: '-5px'}}/>
                        ) : null
                    }
                >
                    {isSmall ? '' : 'Настройки'}
                </Button>
            </div>
        </Layout.Header>
    );
};
