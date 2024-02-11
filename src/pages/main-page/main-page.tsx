import { Layout } from 'antd';
import { Header, Content, Sidebar } from './components';
import './style.css';

export const MainPage = () => {
    return (
        <Layout hasSider id="mainLayout" style={{minHeight: '100vh'}}>
            <Sidebar />
            <Layout>
                <Header />
                <Content />
            </Layout>
        </Layout>
    );
};
