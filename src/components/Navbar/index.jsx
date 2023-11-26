import { Layout, Typography } from "antd";

const { Header } = Layout;
const { Title } = Typography;

const Navbar = () => {
  return (
    <Layout>
      <Header>
        <Title level={4}>EventHub</Title>
      </Header>
    </Layout>
  );
};

export default Navbar;
