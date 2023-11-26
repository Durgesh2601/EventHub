import { EVENT_STATUSES } from "../constants";

const getFilteredEventsByKey = (events, key) => {
  const currentDate = getCurrentDate();
  switch (key) {
    case EVENT_STATUSES.UPCOMING:
      return events?.filter((event) => event?.date > currentDate);
    case EVENT_STATUSES.PAST:
      return events?.filter((event) => event?.date <= currentDate);
    default:
      return events;
  }
};

const getCurrentDate = () => {
  const now = new Date();
  return now.toISOString().split("T")[0]; // Get the current date in 'YYYY-MM-DD' format
};

export { getFilteredEventsByKey, getCurrentDate };
