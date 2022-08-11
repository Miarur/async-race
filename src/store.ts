import { State} from "./types/storeTypes";
import { getCars} from "./api/api";

const { cars: carList, totalCount: countCars } = await getCars(1, 7); 

export const store: State = {
  carsPage: 1, 
  cars: carList,
  carsCount: countCars,
  view: 'garage',
}

