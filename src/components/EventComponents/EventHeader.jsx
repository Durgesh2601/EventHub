import { Col, Row, Typography, Button, Divider } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";

const { Title } = Typography;

const EventHeader = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(ROUTES.LISTING_PAGE);
  };

  return (
    <>
      <Row justify="space-between" align="middle" className="form-header">
        <Col>
          <Title level={3}>Create Event</Title>
        </Col>
        <Col xs={24} sm={6} md={6} lg={4}>
          <Button
            icon={<ArrowLeftOutlined />}
            style={{ width: "100%" }}
            onClick={handleGoBack}
          >
            Go Back
          </Button>
        </Col>
      </Row>
      <Divider />
    </>
  );
};

export default EventHeader;
