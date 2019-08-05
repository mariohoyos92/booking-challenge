import styled from "styled-components";

export const AppContainer = styled.div`
  overflow-y: ${props => (props.modalIsOpen ? "hidden" : "auto")};
  height: ${props => props.modalIsOpen && "100vh"};
`;

export const AppHeader = styled.header`
  height: 44px;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const PrimaryButton = styled.button`
  background-color: #f29648;
  font-size: 14px;
  width: 128px;
  height: 29px;
  border-radius: 4px;
  box-shadow: 0 1 2 0 #000000;
  justify-self: flex-end;
`;

export const BookingContainer = styled.section`
  background-color: #d8d8d8;
  min-height: calc(100vh - 54px);
  padding: 10px;
`;

export const H1 = styled.h1`
  font-weight: normal;
  margin: 0;
  font-size: 24px;
  color: #404040;
`;

export const BookingContainerHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const BookingsTable = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  padding: 10px;
`;

export const TableHeading = styled.tr`
  th {
    padding: 10px;
    font-size: 14px;
    letter-spacing: 1.12px;
    font-weight: normal;
    color: #404040;
  }
`;

export const Booking = styled.tr`
  font-size: 12px;
  padding: 10px;
  background-color: #f5f5f5;
  border-collapse: collapse;
  border-bottom: 1px solid #979797;
  td {
    border: none;
    padding: 10px;
    word-wrap: break-word;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CreateBookingContainer = styled.div`
  background-color: white;
  width: 622px;
  padding: 15px;
  border-radius: 4px;
`;

export const CreateBookingForm = styled.form`
  display: flex;
  width: auto;
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  fieldset {
    display: flex;
    flex-direction: column;
    position: relative;
    button {
    }
  }
  div {
    margin: 10px 0;
  }
  label {
    display: block;
  }
`;

export const Input = styled.input`
  width: ${props => (props.small ? "121px" : "264px")};
  height: 33px;
  font-size: 14px;
  font-family: "Helvetica";
`;

export const CityStateContainer = styled.div`
  display: "flex";
  justify-content: "space-between";
`;

export const Select = styled.select`
  width: ${props => (props.small ? "132px" : "264px")};
  height: 33px;
`;

export const BookingsActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  label {
    padding-right: 5px;
  }
  min-width: 25vw;
  max-width: 50vw;
`;
