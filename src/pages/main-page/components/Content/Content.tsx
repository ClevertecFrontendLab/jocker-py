import { Button, Card, Layout, Typography } from 'antd';
import {
    AndroidFilled,
    AppleFilled,
    CalendarOutlined,
    HeartFilled,
    IdcardOutlined,
} from '@ant-design/icons';
import './style.css';
import { colors } from '../../../../constants.ts';

const contentDescription = [
    {
        id: 0,
        text: 'С CleverFit ты сможешь:',
    },
    {
        id: 1,
        text: '— планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;',
    },
    {
        id: 2,
        text: '— отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами;',
    },
    {
        id: 3,
        text: '— создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;',
    },
    {
        id: 4,
        text: '— выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.',
    },
];

const cards = [
    {
        id: 0,
        icon: <HeartFilled />,
        title: 'Расписать тренировки',
        action: 'Тренеровки',
        href: '/',
    },
    {
        id: 1,
        icon: <CalendarOutlined />,
        title: 'Назначить календарь',
        action: 'Календарь',
        href: '/',
    },
    { id: 2, icon: <IdcardOutlined />, title: 'Заполнить профиль', action: 'Профиль', href: '/' },
];

export const Content = () => {
    return (
        <Layout.Content id='content'>
            <ul className='content_list'>
                {contentDescription.map((item) => (
                    <li key={item.id} className='content_list__item'>
                        {item.text}
                    </li>
                ))}
            </ul>

            <div className='content_application'>
                <Typography.Title level={4} id='content_application__title'>
                    CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не
                    откладывай на завтра — начни тренироваться уже сегодня!
                </Typography.Title>
                <div className='content_application__list'>
                    {cards.map(({ id, icon, title, action, href }) => (
                        <Card
                            key={id}
                            actions={[
                                <Button
                                    type='link'
                                    href={href}
                                    icon={icon}
                                    style={{
                                        width: '100%',
                                        textAlign: 'center',
                                        padding: '12px',
                                        color: colors.blue.ocean,
                                    }}
                                >
                                    {action}
                                </Button>,
                            ]}
                        >
                            {title}
                        </Card>
                    ))}
                </div>
            </div>
            <div className='content_additional'>
                <Button type='link' href={'./'} id="footerReview">
                    Смотреть отзывы
                </Button>
                <Card
                    id="footerCard"
                    bordered={false}
                    actions={[
                        <>
                            <Button
                                id="footerAndroid"
                                type='text'
                                href='./'
                                icon={<AndroidFilled width='14px' height='14px' />}
                            >
                                Android OS
                            </Button>
                            <Button
                                id="footerApple"
                                type='text'
                                href='./'
                                icon={<AppleFilled width='14px' height='14px' />}
                            >
                                Apple iOS
                            </Button>
                        </>,
                    ]}
                >
                    <Button type='link' href='./' id="footer__phone">
                        Скачать на телефон
                    </Button>
                    <Typography.Text id="footer__pro">Доступно в PRO-тарифе</Typography.Text>
                </Card>
            </div>
        </Layout.Content>
    );
};
