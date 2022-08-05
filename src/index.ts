import './index.css'
import {
  generateQueryString, 
  getCars, 
  getCar, 
  createCar, 
  updateCar, 
  deleteCar, 
  getWinners, 
  getWinner, 
  createWinner, 
  deleteWinner, 
  updateWinner} from './api/api';
import {renderMain, renderCarImage} from './renders'

const main = async () => {
  const cars = await getCars([{key:'_page', value: 0}]); 
  const winners = await getWinners([{key:'_page', value: 0}])
};

main();
renderMain();
renderCarImage();
