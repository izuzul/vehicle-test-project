import { nanoid } from "nanoid";

export function createVehicleStore() {
  return {
    vehicleModel: [],
    vehicleMake(name) {
      this.vehicleModel.push({
        name,
        id: nanoid(),
      });
    },
    removeVehicle(id) {
      this.vehicleModel = this.vehicleModel.filter(
        (Vehicle) => Vehicle.id !== id
      );
    },
  };
}
