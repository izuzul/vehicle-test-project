import { useLocalStore } from "mobx-react";
import React from "react";
import { createVehicleStore } from "./vehicleStore";

const VehicleContext = React.createContext(null);

export const VehicleProvider = ({children}) => {
    const vehicleStore = useLocalStore(createVehicleStore);
  return <VehicleContext.Provider value={vehicleStore}>
      {children}
  </VehicleContext.Provider>;
};

export const useVehicleStore = () => React.useContext(VehicleContext)