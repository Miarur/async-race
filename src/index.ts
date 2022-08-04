import './index.css'
import {generateQueryString, getCars, getCar, createCar, updateCar, deleteCar} from './api/api';
import {renderMain} from './renders'

const main = async () => {
  const cars = await getCars([{key:'_page', value: 0}])
};

main();
renderMain();
