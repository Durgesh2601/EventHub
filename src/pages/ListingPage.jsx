import { PageHeader } from "@ant-design/pro-layout";
import { Tabs, List, Button } from "antd";
import { Link } from "react-router-dom";
import { EVENT_STATUSES } from "../constants";
import { getFilteredEventsByKey } from "../utils/helpers";
import { useEventContext } from "../context/EventContext";
import EventCard from "../components/EventComponents/EventCard";

const EventListingPage = () => {
  const { events, removeEvent } = useEventContext();

  const upcomingEvents = getFilteredEventsByKey(
    events,
    EVENT_STATUSES.UPCOMING
  );
  const pastEvents = getFilteredEventsByKey(events, EVENT_STATUSES.PAST);

  const handleDeleteEvent = (event) => {
    removeEvent(event?.id);
  };

  const createEventButton = (
    <Link to="/create-event">
      <Button type="primary">Create Event</Button>
    </Link>
  );

  const tabItems = [
    {
      key: "1",
      label: "Upcoming",
      children: (
        <List
          dataSource={upcomingEvents}
          renderItem={(event) => (
            <EventCard event={event} onDeleteEvent={handleDeleteEvent} />
          )}
        />
      ),
    },
    {
      key: "2",
      label: "Past",
      children: (
        <List
          dataSource={pastEvents}
          renderItem={(event) => (
            <EventCard event={event} onDeleteEvent={handleDeleteEvent} />
          )}
        />
      ),
    },
  ];

  return (
    <div
      style={{
        overflowY: "auto",
        maxHeight: "calc(100vh - 64px)",
        marginTop: "5rem",
      }}
    >
      <PageHeader
        title="Event Listing"
        subTitle="Explore and manage your events"
      />
      <div
        style={{
          padding: "20px",
          overflowY: "auto",
          maxHeight: "calc(100vh - 64px)",
        }}
      >
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
