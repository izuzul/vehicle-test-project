import React from "react";
import { useVehicleStore } from "./vehicleContext";

export const VehicleForm = () => {
  const [vehicleText, setVehicleText] = React.useState("");
  const vehicleStore = useVehicleStore();

  return (
    <div className="form">
      <input
        className="input"
        value={vehicleText}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            if (e.target.value !== "") {
              vehicleStore.vehicleMake(vehicleText);
              setVehicleText("");
            }
          }
        }}
        onChange={(e) => {
          setVehicleText(e.target.value);
        }}
        type="text"
      ></input>
      <button
        className="btn"
        onClick={() => {
          if (vehicleText !== "") {
            vehicleStore.vehicleMake(vehicleText);
          }
        }}
      >
        Add Vehicle
      </button>
    </div>
  );
};
