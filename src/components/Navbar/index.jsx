import { Layout, Typography } from "antd";

const { Header } = Layout;
const { Title } = Typography;

const Navbar = () => {
  return (
    <Layout>
      <Header className="header-navbar">
        <Title level={4}>EventHub</Title>
      </Header>
    </Layout>
  );
};

export default Navbar;
