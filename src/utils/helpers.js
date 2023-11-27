import { EVENT_STATUSES } from "../constants";

const getFilteredEventsByKey = (events, key) => {
  const currentDate = getCurrentDate();
  switch (key) {
    case EVENT_STATUSES.UPCOMING.key:
      return events?.filter((event) => event?.dateTime?.[0] > currentDate);
    case EVENT_STATUSES.PAST.key:
      return events?.filter((event) => event?.dateTime?.[1] <= currentDate);
    default:
      return events;
  }
};

const getCurrentDate = () => {
  const now = new Date();
  return now.toISOString().split("T")[0]; // Get the current date in 'YYYY-MM-DD' format
};

const getFormattedDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  // Create a Date object from the given string
  const date = new Date(dateString);
  // Format the date using the options
  const formattedDate = date.toLocaleString("en-US", options);
  return formattedDate;
};

export { getFilteredEventsByKey, getCurrentDate, getFormattedDate };
