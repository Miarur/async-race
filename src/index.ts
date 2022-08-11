import './index.css'
import {renderMain, renderTable} from './components/renders/renders';


import { addCarObj } from './components/listeners/addCarObj';
import { addRandomCars } from './components/listeners/addRandomCars';
import { updateDeleteCarObj } from './components/listeners/updateDeleteCar';
import { pagination } from './components/listeners/pagination';
import { renderViews } from './components/listeners/renderViews';
const RENDER_HEADER =  await renderMain();


// if(!localStorage.getItem('view')) {
//   localStorage.setItem('view', 'winners');  
// }
 
// let view = await JSON.parse(localStorage.getItem('view')); 

const viewWinners = document.querySelector('.winners') as HTMLButtonElement;
const viewGarage = document.querySelector('.garage') as HTMLButtonElement;
const app = document.getElementById('app') as HTMLElement; 

const listeners = async () => {
  await addCarObj();
  await addRandomCars(); 
  await updateDeleteCarObj(); 
  await pagination(); 
  await renderViews();
}

listeners();