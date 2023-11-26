import { createContext, useContext, useState } from "react";
import { MOCK_EVENTS } from "../constants";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState(MOCK_EVENTS);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const removeEvent = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
  };

  const updateEvent = (eventTitle, updatedEvent) => {
    const updatedEvents = events.map((event) =>
      event.title === eventTitle ? updatedEvent : event
    );
    setEvents(updatedEvents);
  };

  return (
    <EventContext.Provider
      value={{ events, addEvent, removeEvent, updateEvent }}
    >
      {children}
    </EventContext.Provider>
  );
};

// a custom hook to use the context
export const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEventContext must be used within an EventProvider");
  }
  return context;
};
