import EventForm from "../components/EventForm";

const CreateEvent = () => {
    
  const handleCreateEvent = (values) => {
    console.log("Success:", values);
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
