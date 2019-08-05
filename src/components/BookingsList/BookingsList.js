import React from "react";
import {
  PrimaryButton,
  H1,
  BookingContainer,
  BookingContainerHeader,
  BookingsTable,
  TableHeading,
  Booking,
  BookingsActionsContainer
} from "../styledComponents";
import { dogWalkType, houseKeepingType } from "../../constants";

export default function BookingsList({
  bookings,
  onFilterChange,
  onClickCreateBooking,
  filterType
}) {
  function renderBookings() {
    return bookings
      .filter(booking =>
        filterType ? booking.bookingType === filterType : true
      )
      .map(
        ({
          bookingDateTime,
          name,
          bookingId,
          email,
          streetAddress,
          city,
          state,
          zipCode,
          bookingType
        }) => {
          const date = new Date(bookingDateTime);
          return (
            <Booking key={`${name}-${bookingId}`}>
              <td>{name}</td>
              <td>{email}</td>
              <td>
                <div>{`${streetAddress}`}</div>
                <div>{`${city}, ${state}, ${zipCode}`}</div>
              </td>
              <td>
                {bookingType === houseKeepingType
                  ? "Housekeping"
                  : bookingType === dogWalkType
                  ? "Dog Walk"
                  : null}
              </td>
              <td align="right">{`${date.toLocaleDateString()} ${date.toLocaleTimeString(
                [],
                {
                  hour: "2-digit",
                  minute: "2-digit"
                }
              )}`}</td>
            </Booking>
          );
        }
      );
  }

  return (
    <BookingContainer>
      <BookingContainerHeader>
        <H1>Bookings</H1>
        <BookingsActionsContainer>
          <div>
            <label>Filter</label>
            <select defaultValue="" onChange={onFilterChange}>
              <option value="">None</option>
              <option value={dogWalkType}>Dog Walk</option>
              <option value={houseKeepingType}>Housekeeping</option>
            </select>
          </div>
          <PrimaryButton type="button" onClick={onClickCreateBooking}>
            Create Booking
          </PrimaryButton>
        </BookingsActionsContainer>
      </BookingContainerHeader>
      <BookingsTable>
        <thead>
          <TableHeading>
            <th align="left">Customer</th>
            <th align="left">Email</th>
            <th align="left">Address</th>
            <th align="left">Booking Type</th>
            <th align="right">Booking Date/Time</th>
          </TableHeading>
        </thead>
        <tbody>{renderBookings()}</tbody>
      </BookingsTable>
    </BookingContainer>
  );
}
