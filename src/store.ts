import { getCars, getWinners, CarObject} from "./api/api";

const { cars: carList, totalCount: countCars } = await getCars([{key:'_page', value: 1}, {key: '_limit', value: 5}]); 

type State = {
  carsPage: number,
  cars: CarObject[],
  carsCount: number,
}

export const store: State = {
  carsPage: 1, 
  cars: carList,
  carsCount: countCars,
}