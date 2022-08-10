import './index.css'
import {
  generateQueryString, 
  getCars, 
  getCar, 
  createCar, 
  updateCar, 
  deleteCar, 
  engineStartStop,
  engineState,
  getWinners, 
  getWinner, 
  createWinner, 
  deleteWinner, 
  updateWinner} from './api/api';
import {renderMain, renderGarage, renderWinners} from './renders'
import { store } from './store';


const RENDER_HEADER =  renderMain();
const createCarBtn = document.querySelector('.button.create-car'); 
const inputName = document.getElementById('input-create-name') as HTMLInputElement; 
const inputColor = document.getElementById('input-create-color') as HTMLInputElement; 
console.log(inputName.value)



createCarBtn?.addEventListener('click', ()=> { 
  const car = {
    name: inputName.value,
    color: inputColor.value,
  }
  createCar(car)
});