import { createSlice } from "@reduxjs/toolkit";

const fullName = window.sessionStorage.getItem("fullName")
  ? window.sessionStorage.getItem("fullName")
  : "";

const address = window.sessionStorage.getItem("address")
  ? window.sessionStorage.getItem("address")
  : "";

const phone = window.sessionStorage.getItem("phone")
  ? window.sessionStorage.getItem("phone")
  : "";

const handle_Customer_Info_In_SessionStorage = (fullName, address, phone) => {
  window.sessionStorage.setItem("fullName", fullName);
  window.sessionStorage.setItem("address", address);
  window.sessionStorage.setItem("phone", phone);
};

const initialState = {
  fullName: fullName,
  address: address,
  phone: phone,
};

export const customerInfo = createSlice({
  name: "customerInfo",
  initialState: initialState,
  reducers: {
    passingCustomerInfo: (state, action) => {
      state.fullName = action.payload.fullName;
      state.address = action.payload.address;
      state.phone = action.payload.phone;
      handle_Customer_Info_In_SessionStorage(
        state.fullName,
        state.address,
        state.phone
      );
    },
    // change customer name
    changeName: (state, action) => {
      state.fullName = action.payload.nameEdited;
      handle_Customer_Info_In_SessionStorage(
        state.fullName,
        state.address,
        state.phone
      );
    },
    // change customer address
    changeAddress: (state, action) => {
      state.address = action.payload.addressEdited;
      handle_Customer_Info_In_SessionStorage(
        state.fullName,
        state.address,
        state.phone
      );
    },
    // change customer phone
    changePhone: (state, action) => {
      state.phone = action.payload.phoneEdited;
      handle_Customer_Info_In_SessionStorage(
        state.fullName,
        state.address,
        state.phone
      );
    },
    // remove personal info
    removePersonalInfo: (state) => {
      state.fullName = "";
      state.address = "";
      state.phone = "";
      handle_Customer_Info_In_SessionStorage(
        state.fullName,
        state.address,
        state.phone
      );
    },
  },
});

export const {
  passingCustomerInfo,
  changeName,
  changeAddress,
  changePhone,
  removePersonalInfo,
} = customerInfo.actions;
export default customerInfo.reducer;
