import './index.css'
import {generateQueryString, getCars, getCar, createCar, updateCar, deleteCar, getWinners, getWinner} from './api/api';
import {renderMain, renderCarImage} from './renders'

const main = async () => {
  const cars = await getCars([{key:'_page', value: 0}]); 
  const winners = await getWinners([{key:'_page', value: 0}])
  const winner = await getWinner(1);
};

main();
renderMain();
renderCarImage();
