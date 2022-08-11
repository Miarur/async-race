import './index.css'
import {renderMain} from './components/renders/renders';


import { addCarObj } from './components/listeners/addCarObj';
import { addRandomCars } from './components/listeners/addRandomCars';
import { updateDeleteCarObj } from './components/listeners/updateDeleteCar';
import { pagination } from './components/listeners/pagination';

const RENDER_HEADER =  await renderMain();

const listeners = async () => {
  await addCarObj();
  await addRandomCars(); 
  await updateDeleteCarObj(); 
  await pagination(); 
}

listeners();

