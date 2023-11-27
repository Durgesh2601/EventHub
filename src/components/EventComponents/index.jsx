import { Form, Input, DatePicker, Button, Col, Row, Space, Image } from "antd";
import PlaceHolderImg from "../../assets/placeholder.png";
import EventHeader from "./EventHeader";

const { RangePicker } = DatePicker;

const EventForm = ({ onFinish, onFinishFailed }) => {
  return (
    <>
      <EventHeader />
      <Space direction="vertical" className="form-container">
        <Form
          layout="vertical"
          onFinishFailed={onFinishFailed}
          onFinish={onFinish}
          style={{ width: "100%" }}
        >
          <Row justify="space-between">
            <Col xs={23} sm={23} md={10}>
              <Form.Item
                label="Event Name"
                name="eventName"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Event Date & Time"
                name="dateTime"
                rules={[
                  {
                    required: true,
                    message: "Please select the event date and time!",
                  },
                ]}
              >
                <RangePicker
                  showTime={{ format: "HH:mm" }}
                  format="YYYY-MM-DD HH:mm"
                  style={{ width: "100%" }}
                />
              </Form.Item>

              <Form.Item label="Description" name="description">
                <Input.TextArea />
              </Form.Item>
              <Form.Item label="Add Event Location" name="location">
                <Input />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%", marginTop: "1rem" }}
                >
                  Create Event
                </Button>
              </Form.Item>
            </Col>
            <Col xs={0} sm={0} md={11}>
              <Image
                src={PlaceHolderImg}
                alt="img"
                preview={false}
                className="placeholder-img"
                height={'95%'}
              />
            </Col>
          </Row>
        </Form>{" "}
      </Space>
    </>
  );
};

export default EventForm;
