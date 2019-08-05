import React from "react";
import styled from "styled-components";
import {
  Modal,
  CreateBookingContainer,
  CreateBookingForm,
  H1,
  Input,
  Select,
  PrimaryButton,
  CityStateContainer
} from "../styledComponents";
import { dogWalkType, houseKeepingType } from "../../constants";

const CreateBookingButton = styled(PrimaryButton)`
  float: right;
`;

export default function CreateBooking({ onSubmit, onOutsideClick }) {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    bookingType: dogWalkType,
    bookingDate: "",
    bookingTime: ""
  });

  function onChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formattedBooking = {
      ...formState,
      bookingDateTime: `${formState.bookingDate} ${formState.bookingTime}:00`
    };
    delete formattedBooking.bookingDate;
    delete formattedBooking.bookingTime;
    onSubmit(formattedBooking);
  }

  const {
    name,
    email,
    streetAddress,
    city,
    state,
    zipCode,
    bookingType,
    bookingDate,
    bookingTime
  } = formState;
  return (
    <Modal id="create-booking-modal">
      <CreateBookingContainer>
        <H1>Create Booking</H1>
        <CreateBookingForm id="create-booking-form" onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="name">Name</label>
              <Input
                onChange={onChange}
                type="text"
                name="name"
                required
                id="name"
                value={name}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Input
                onChange={onChange}
                type="email"
                name="email"
                required
                id="email"
                value={email}
              />
            </div>
            <div>
              <label htmlFor="street-address">Street Address</label>
              <Input
                onChange={onChange}
                type="text"
                name="streetAddress"
                required
                id="street-address"
                value={streetAddress}
              />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <Input
                onChange={onChange}
                type="text"
                name="city"
                required
                id="city"
                value={city}
              />
            </div>
            <CityStateContainer>
              <div>
                <label htmlFor="state">State</label>
                <Input
                  onChange={onChange}
                  small
                  type="text"
                  name="state"
                  maxLength="2"
                  required
                  id="state"
                  value={state}
                />
              </div>
              <div>
                <label htmlFor="zip-code">Zip Code</label>
                <Input
                  onChange={onChange}
                  small
                  type="number"
                  max="99999"
                  required
                  id="zip-code"
                  name="zipCode"
                  value={zipCode}
                />
              </div>
            </CityStateContainer>
          </fieldset>
          <fieldset>
            <div>
              <label htmlFor="booking-type">Booking Type</label>
              <Select
                name="bookingType"
                required
                id="booking-type"
                value={bookingType}
                onChange={onChange}
              >
                <option value={dogWalkType}>Dog Walk</option>
                <option value={houseKeepingType}>Housekeeping</option>
              </Select>
            </div>
            <div>
              <label htmlFor="booking-date">Booking Date</label>
              <Input
                onChange={onChange}
                type="date"
                min={new Date().toISOString().split("T")[0]}
                required
                name="bookingDate"
                id="booking-date"
                value={bookingDate}
              />
            </div>
            <div>
              <label htmlFor="booking-time">Booking Time</label>
              <Input
                onChange={onChange}
                type="time"
                name="bookingTime"
                required
                id="booking-time"
                value={bookingTime}
              />
            </div>
          </fieldset>
        </CreateBookingForm>
        <CreateBookingButton type="submit" form="create-booking-form">
          Create Booking
        </CreateBookingButton>
      </CreateBookingContainer>
    </Modal>
  );
}
