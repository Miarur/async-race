import { store } from "../../store";
import { updateStore } from "../pagination/pagination";
import { renderGarage } from "../renders/renderGarage";

export const pagination = async () => {
  const main = document.querySelector('.main') as HTMLElement; 
  const app = document.getElementById('app') as HTMLElement; 
  main.addEventListener('click', async (event: Event) => {
    const target = event.target as HTMLButtonElement; 
    if(target.classList.contains('pagination-next')) {
      switch (store.view) {
        case 'garage': 
          store.carsPage++;
          console.log('store')
          await updateStore(); 
          app.innerHTML = `${renderGarage()}`;
          break;
      }
    }

    if(target.classList.contains('pagination-prev')) {
      switch (store.view) {
        case 'garage': 
          store.carsPage--;
          console.log('store')
          await updateStore(); 
          app.innerHTML = `${renderGarage()}`;
          break;
      }
    }
  })
}