import React from "react";
import axios from "axios";
import logo from "./assets/logo.svg";
import CreateBooking from "./components/CreateBooking/CreateBooking";
import BookingsList from "./components/BookingsList/BookingsList";
import { AppContainer, AppHeader } from "./components/styledComponents";

const apiBaseUrl = "http://localhost:3001/api";

function App() {
  const [bookings, setBookings] = React.useState([]);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [filterType, setFilterType] = React.useState("");

  React.useEffect(() => {
    const getBookings = async () => {
      const { data } = await axios.get(`${apiBaseUrl}/getBookings`);
      return setBookings(data);
    };
    getBookings();
  }, []);

  function onFilterChange(e) {
    setFilterType(e.target.value);
  }

  function handleClickOutsideOfModal(e) {
    if (e.target.id === "create-booking-modal" && modalIsOpen) {
      setModalIsOpen(false);
    }
  }

  async function onSubmit(form) {
    const { data } = await axios.post(`${apiBaseUrl}/createBooking`, form);
    setBookings(data);
    setModalIsOpen(false);
  }
  return (
    <AppContainer onClick={handleClickOutsideOfModal}>
      <AppHeader>
        <img src={logo} alt="logo" />
      </AppHeader>
      <BookingsList
        onFilterChange={onFilterChange}
        bookings={bookings}
        filterType={filterType}
        onClickCreateBooking={() => setModalIsOpen(true)}
      />
      {modalIsOpen ? <CreateBooking onSubmit={onSubmit} /> : null}
    </AppContainer>
  );
}

export default App;
