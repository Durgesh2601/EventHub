import { PageHeader } from "@ant-design/pro-layout";
import { Tabs, List, Button, message } from "antd";
import { Link } from "react-router-dom";
import { ACTION_MSGS, EVENT_STATUSES, ROUTES } from "../constants";
import { getFilteredEventsByKey } from "../utils/helpers";
import { useEventContext } from "../context/EventContext";
import EventCard from "../components/EventComponents/EventCard";

const EventListingPage = () => {
  const { events, removeEvent } = useEventContext();
  const { UPCOMING, PAST } = EVENT_STATUSES;

  const upcomingEvents = getFilteredEventsByKey(events, UPCOMING.value);
  const pastEvents = getFilteredEventsByKey(events, PAST.value);

  const handleDeleteEvent = (event) => {
    removeEvent(event?.id);
    message.success(ACTION_MSGS.REMOVE_EVENT);
  };

  const createEventButton = (
    <Link to={ROUTES.CREATE_EVENT}>
      <Button type="primary">Create Event</Button>
    </Link>
  );

  const tabItems = [
    {
      key: "1",
      label: UPCOMING.label,
      children: (
        <div className="card-row">
          <List
            dataSource={upcomingEvents}
            renderItem={(event) => (
              <EventCard event={event} onDeleteEvent={handleDeleteEvent} />
            )}
          />
        </div>
      ),
    },
    {
      key: "2",
      label: PAST.label,
      children: (
        <div className="card-row">
          <List
            dataSource={pastEvents}
            renderItem={(event) => (
              <EventCard event={event} onDeleteEvent={handleDeleteEvent} />
            )}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="card-row main-container">
      <PageHeader
        title="Event Listing"
        subTitle="Explore and manage your events"
      />
      <div className="tab-container">
        <Tabs
          defaultActiveKey="1"
          items={tabItems}
          tabBarExtraContent={createEventButton}
          type="card"
          animated={{
            inkBar: true,
            tabPane: true,
          }}
        />
      </div>
    </div>
  );
};

export default EventListingPage;
