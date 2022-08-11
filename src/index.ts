import './index.css'
import { 
  getCars,
  getCar, 
  createCar, 
  updateCar, 
  deleteCar, 
}
from './api/api';
import {CarObject } from './types/apiTypes';
import {renderGarage, renderMain, updateStore} from './renders'

import {store} from './store';



const RENDER_HEADER =  renderMain();
const createCarBtn = document.querySelector('.button.create-car') as HTMLButtonElement; 
const updateCarBtn = document.querySelector('.button.update-car') as HTMLButtonElement; 
const garageList = document.querySelector('.garage__list');
const inputName = document.getElementById('input-create-name') as HTMLInputElement; 
const inputColor = document.getElementById('input-create-color') as HTMLInputElement;
let updateCarNameInput = document.getElementById('input-update-name') as HTMLInputElement; 
let updateCarColorInput = document.getElementById('input-update-color') as HTMLInputElement;  
let selectedCar: CarObject; 

const main = document.querySelector('.main') as HTMLElement; 
const app = document.getElementById('app') as HTMLElement; 

console.log(app);


console.log(store)


const listens = async () => {

  createCarBtn?.addEventListener('click', async () => { 
    const car = {
      name: inputName.value,
      color: inputColor.value,
    }
    await createCar(car);
    
  });
  
  
  main?.addEventListener('click', async (event: Event) => {
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
      console.log(app); 
      app.innerHTML = `${renderGarage()}`;
    }
  })

}


listens();

