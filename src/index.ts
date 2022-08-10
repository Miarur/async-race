import './index.css'
import { 
  getCar, 
  createCar, 
  updateCar, 
  deleteCar, 
}
from './api/api';
import {CarObject } from './types/apiTypes';
import {renderMain} from './renders'



const RENDER_HEADER =  renderMain();

const createCarBtn = document.querySelector('.button.create-car') as HTMLButtonElement; 
const updateCarBtn = document.querySelector('.button.update-car') as HTMLButtonElement; 
const garageList = document.querySelector('.garage__list');
const inputName = document.getElementById('input-create-name') as HTMLInputElement; 
const inputColor = document.getElementById('input-create-color') as HTMLInputElement;
let updateCarNameInput = document.getElementById('input-update-name') as HTMLInputElement; 
let updateCarColorInput = document.getElementById('input-update-color') as HTMLInputElement;  
let selectedCar: CarObject; 
console.log(inputName.value)


const listens = async () => {

  createCarBtn?.addEventListener('click', async () => { 
    const car = {
      name: inputName.value,
      color: inputColor.value,
    }
    createCar(car)
  });
  
  
  garageList?.addEventListener('click', async (event: Event) => {
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

  })


}


listens();

