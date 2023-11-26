import { Routes, Route } from "react-router";
import ListingPage from "./pages/ListingPage";
import CreateEvent from "./pages/CreateEvent";
import Navbar from "./components/Navbar";
import { EventProvider } from "./context/EventContext";

function App() {
  return (
    <EventProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListingPage />} />
        <Route path="/create-event" element={<CreateEvent />} />
      </Routes>
    </EventProvider>
  );
}

export default App;
