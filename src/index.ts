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
import {renderMain, renderGarage} from './renders'


const main = async () => {
  // const cars = await getCars([{key:'_page', value: 0}, {key: '_limit', value: 5}]);
  // console.log(cars);
  // const winners = await getWinners([{key:'_page', value: 0}]);
  const RENDER_MAIN =  renderMain();
  const RENDER_CAR =  renderGarage();
};



main();

