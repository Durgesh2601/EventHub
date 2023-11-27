import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import EventForm from "../components/EventComponents";
import { useEventContext } from "../context/EventContext";
import { ACTION_MSGS, ROUTES } from "../constants";

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
    message.success(ACTION_MSGS.ADD_EVENT);
    navigate(ROUTES.LISTING_PAGE);
  };

  const handleFinishFailed = (errorInfo) => {
    console.error("Failed:", errorInfo);
    message.error(ACTION_MSGS.ERROR_MSG);
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
