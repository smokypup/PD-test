import React, { createContext, useContext, useReducer } from "react";

const DeviceContext = createContext();

const initialState = {
  deviceIds: [],
};

const deviceReducer = (state, action) => {
  switch (action.type) {
    case "ADD_DEVICE":
      return { ...state, deviceIds: [...state.deviceIds, action.payload] };
    case "REMOVE_DEVICE":
      return {
        ...state,
        deviceIds: state.deviceIds.filter((id) => id !== action.payload),
      };
    default:
      return state;
  }
};

const DeviceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(deviceReducer, initialState);

  return (
    <DeviceContext.Provider value={{ state, dispatch }}>
      {children}
    </DeviceContext.Provider>
  );
};

const useDeviceContext = () => {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error("useDeviceContext must be used within a DeviceProvider");
  }
  return context;
};

export { DeviceProvider, useDeviceContext };
