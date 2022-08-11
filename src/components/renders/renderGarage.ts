import { store } from "../../store";
import { renderCar } from "./renderCarObject";

export const renderGarage = () => `
  <div class='garage__body'>
    <h1>Garage ( ${store.carsCount} )</h1>
    <h2>Page #${store.carsPage}</h2>
    <ul class="garage__list">
      <li>${store.cars.map(item => {
        return renderCar(item)
      }).join('')}</li>
    </ul>
  </div>
`;
