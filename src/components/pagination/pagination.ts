import { store } from "../../store";
import { getCars } from "../../api/api";

export const updateStore = async () => {
  const { cars, totalCount } = await getCars(store.carsPage);
  store.cars = cars; 
  store.carsCount = totalCount; 

  if(store.carsPage * 7 < store.carsCount) {
    (document.getElementById('next') as HTMLButtonElement).disabled = false; 
  } else {
    (document.getElementById('next') as HTMLButtonElement).disabled = true; 
  }

  if(store.carsPage > 1) {
    (document.getElementById('prev') as HTMLButtonElement).disabled = false; 
  } else {
    (document.getElementById('prev') as HTMLButtonElement).disabled = true; 
  }
}