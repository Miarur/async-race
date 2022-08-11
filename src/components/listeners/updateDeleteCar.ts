import { CarObject } from "../../types/apiTypes";
import { updateCar, getCar, deleteCar } from "../../api/api";
import { updateStore } from "../pagination/pagination";
import { renderGarage } from "../renders/renderGarage";

export const updateDeleteCarObj = () => {
  const main = document.querySelector('.main') as HTMLElement; 
  const app = document.getElementById('app') as HTMLElement; 
  const updateCarBtn = document.querySelector('.button.update-car') as HTMLButtonElement; 
  let updateCarNameInput = document.getElementById('input-update-name') as HTMLInputElement; 
  let updateCarColorInput = document.getElementById('input-update-color') as HTMLInputElement;  
  let selectedCar: CarObject;   

  main.addEventListener('click', async (event: Event) => {
    const target = event.target as HTMLButtonElement;
    if(target.classList.contains('select-button')) {
      selectedCar = await getCar(Number(target.id.split('select-car-')[1]));
      updateCarNameInput.disabled = false; 
      updateCarColorInput.disabled = false; 
    }

    updateCarBtn.addEventListener('click', async () => {
      selectedCar.name = updateCarNameInput.value;
      selectedCar.color = updateCarColorInput.value;
      updateCar(Number(target.id.split('select-car-')[1]), selectedCar) 
    })

    if(target.classList.contains('remove-button')) {
      selectedCar = await getCar(Number(target.id.split('remove-car-')[1]));
      let car = Number(selectedCar.id);
      await deleteCar(car);
      await updateStore();
      app.innerHTML = `${renderGarage()}`;
    }
  })
}; 