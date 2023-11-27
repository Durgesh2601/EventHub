import { Row, Col, Typography, Popconfirm, List, Card } from "antd";
import {
  CalendarOutlined,
  DeleteOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { getFormattedDate } from "../../utils/helpers";

const { Title, Text } = Typography;

const EventCard = ({ event, onDeleteEvent }) => {
  return (
    <List.Item>
      <Card
        hoverable
        title={
          <Row justify="space-between" align="middle">
            <Col>
              <Title level={5}>
                <CalendarOutlined />{" "}
                {`${getFormattedDate(event.dateTime[0])} to ${getFormattedDate(
                  event.dateTime[1]
                )}`}
              </Title>
            </Col>
            <Col>
              <Popconfirm
                title="Delete the event"
                description="Are you sure to delete this event?"
                icon={
                  <QuestionCircleOutlined
                    style={{
                      color: "#ff5e5e",
                    }}
                  />
                }
                onConfirm={() => onDeleteEvent(event)}
              >
                <DeleteOutlined
                  style={{ fontSize: "1.2rem", color: "#ff5e5e" }}
                />
              </Popconfirm>
            </Col>
          </Row>
        }
        style={{ width: "100%" }}
      >
        <Title level={5}>{event?.eventName}</Title>
        {event?.location && (
          <Row>
            <Text strong>Location : {event?.location}</Text>
          </Row>
        )}
        {event?.description && <Text>{event?.description}</Text>}
      </Card>
    </List.Item>
  );
};

export default EventCard;
