import { State} from "./types/storeTypes";
import { getCars} from "./api/api";

const { cars: carList, totalCount: countCars } = await getCars(1, 7); 

export const store: State = {
  carsPage: 1, 
  cars: carList,
  carsCount: countCars,
  view: 'garage',
}

// export const locationResolver = async (location: string)  => {
//   await new Promise(r => setTimeout(r, 1000));
//   const app =  document.getElementById('#app') as HTMLElement; 
//   console.log(app)
//   switch(location) {
//     case "#/winners/":
//       await new Promise(r => setTimeout(r, 1000));
//       app.innerHTML = `${renderWinners()}`;
//     break;

//     case "#/garage/":
//       await new Promise(r => setTimeout(r, 1000));
//       app.innerHTML = `${renderMain()}`;
//     break;
//   }
// };


// window.addEventListener('load', () => {
//   const location = window.location.hash;
//   console.log(location) 
//   if(location) {
//     locationResolver(location)
//   }
// })

