const MOCK_EVENTS = [
  {
    eventName: "Birthday Party",
    dateTime: ["2023-11-28T18:26:49.997Z", "2023-11-29T16:24:16.997Z"],
    description: "Celebrate with friends and family!",
    location: "Ludhiana",
    id: "b888461f-7569-47a0-9642-fd5545e8955a",
  },
  {
    eventName: "Conference",
    dateTime: ["2023-12-05T09:00:00.000Z", "2023-12-07T17:00:00.000Z"],
    description: "Tech conference on the latest trends.",
    location: "Tech Center, City",
    id: "c4229e82-6cbb-4d52-9a57-822fd97904e3",
  },
  {
    eventName: "Hiking Trip",
    dateTime: ["2023-12-10T10:00:00.000Z", "2023-12-10T18:00:00.000Z"],
    description: "Explore nature and enjoy the outdoors.",
    location: "Mountain Trail",
    id: "a7388909-3e6f-4a7a-8c7a-71ee1e748eef",
  },
  {
    eventName: "Product Launch",
    dateTime: ["2023-12-15T15:30:00.000Z", "2023-12-15T18:00:00.000Z"],
    description: "Introducing our latest product.",
    location: "Company Headquarters",
    id: "8e365c3c-6051-4a71-944e-3e70d9c31ee8",
  },
  {
    eventName: "Dinner with Friends",
    dateTime: ["2023-11-20T19:00:00.000Z", "2023-11-20T22:00:00.000Z"],
    description: "Enjoy good food and company.",
    location: "Local Restaurant",
    id: "3155a7ac-d15a-41cb-9d1b-6833ee5a12f2",
  },
  {
    eventName: "Webinar",
    dateTime: ["2023-11-15T14:00:00.000Z", "2023-11-15T16:00:00.000Z"],
    description: "Learn about the future of web development.",
    location: "Online",
    id: "65a27e29-e546-4d38-bfae-b7de7e1b0a45",
  },
  {
    eventName: "Movie Night",
    dateTime: ["2023-11-10T20:00:00.000Z", "2023-11-10T23:00:00.000Z"],
    description: "Watch a blockbuster together.",
    location: "Home",
    id: "7b4aa064-6327-4a1d-bba5-d37ed94e41a2",
  },
];

const EVENT_STATUSES = {
  UPCOMING: {
    key: "upcoming",
    label: "Upcoming",
  },
  PAST: {
    key: "past",
    label: "Past",
  },
};

const EVENT_KEYS = {
  eventName: "eventName",
  DATETime: "dateTime",
  STATUS: "status",
};

const ROUTES = {
  CREATE_EVENT: "/create-event",
  LISTING_PAGE: "/",
};

const ACTION_MSGS = {
  ADD_EVENT: "Event added successfully!",
  REMOVE_EVENT: "Event removed successfully!",
  UPDATE_EVENT: "Event updated successfully!",
  ERROR_MSG: "Something went wrong. Please try again!",
};

export { MOCK_EVENTS, EVENT_STATUSES, EVENT_KEYS, ROUTES, ACTION_MSGS };
