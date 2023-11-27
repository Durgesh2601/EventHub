import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import EventForm from "../components/EventComponents";
import { useEventContext } from "../context/EventContext";

const CreateEvent = () => {
  const navigate = useNavigate();
  const { addEvent } = useEventContext();

  const handleCreateEvent = (values) => {
    const newEvent = {
      ...values,
      dateTime: values.dateTime.map((date) => date.format("YYYY-MM-DD HH:mm")),
      id: uuid(),
    };
    addEvent(newEvent);
    message.success("Event created successfully!");
    navigate(`/`);
  };

  const handleFinishFailed = (errorInfo) => {
    console.error("Failed:", errorInfo);
  };

  return (
    <div>
      <EventForm
        onFinish={handleCreateEvent}
        onFinishFailed={handleFinishFailed}
      />
    </div>
  );
};

export default CreateEvent;
