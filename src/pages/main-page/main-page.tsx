import { Layout } from 'antd';
import { Content, Header, Sidebar } from './components';
import './style.css';

export const MainPage = () => (
    <Layout hasSider id='mainLayout' style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
            <Header />
            <Content />
        </Layout>
    </Layout>
);
