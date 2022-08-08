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
import { store, locationResolver} from './store';


const renderPage = async () => {
  const RENDER_HEADER =  await renderMain();
};

renderPage()




