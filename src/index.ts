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
import {renderMain, renderCarImage, renderCar} from './renders'


const main = async () => {
  const cars = await getCars([{key:'_page', value: 0}]); 
  const winners = await getWinners([{key:'_page', value: 0}]);
  const RENDER_MAIN =  renderMain();
  const RENDER_CAR =  renderCar();


};
main();
