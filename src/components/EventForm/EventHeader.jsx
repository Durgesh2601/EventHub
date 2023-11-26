import { Col, Row, Typography, Button, Divider } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const EventHeader = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(`/`);
  };

  return (
    <>
      <Row justify="space-between" align="middle" className="form-header">
        <Col>
          <Title level={3}>Create Event</Title>
        </Col>
        <Col span={2}>
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
