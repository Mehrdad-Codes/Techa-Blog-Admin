import { Layout } from "antd";

import SideBar from "../../components/SideBar";
import Header from "./Header";
import Content from "./Content";

const MainLayout = ({ children }) => {
    return (
        <Layout className="h-screen">
            <SideBar />
            <Layout>
                <Layout.Header className="bg-white px-5 md:px-10">
                    <Header />
                </Layout.Header>
                <Layout.Content
                    className="overflow-y-auto px-5 md:px-10"
                >
                    <Content>
                        {children}
                    </Content>
                </Layout.Content>
            </Layout>
        </Layout>
    );
}

export default MainLayout;