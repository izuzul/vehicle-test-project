import { useObserver } from "mobx-react";
import "./App.css";
import { useVehicleStore } from "./vehicleContext";
import { VehicleForm } from "./VehicleForm";
import React from "react";

function App() {
  const vehicleStore = useVehicleStore();

  return useObserver(() => (
    <div className="App">
      <h2>React App</h2>
      <VehicleForm />
      <div className="list">
        <ul>
          {vehicleStore.vehicleModel.map((vehicle) => (
            <li key={vehicle.id}>
              {vehicle.name}
              <button
                className="del-btn"
                onClick={() => vehicleStore.removeVehicle(vehicle.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ));
}

export default App;
