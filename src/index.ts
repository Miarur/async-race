import {generateQueryString, getCars, getCar, createCar, updateCar, deleteCar} from './api/api';

const main = async () => {
  const updateCarObj = await deleteCar(6);
  const cars = await getCars([{key:'_page', value: 0}])
};

main();