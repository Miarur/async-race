import  { store } from '../../store';
import { renderTable } from '../renders/renders';
import { renderGarage } from '../renders/renderGarage';
import { updateStore } from '../pagination/pagination';

export const renderViews = async () => {
  
  const viewWinners = document.querySelector('.winners') as HTMLButtonElement;
  const viewGarage = document.querySelector('.garage') as HTMLButtonElement;
  const app = document.getElementById('app') as HTMLElement; 

  viewWinners?.addEventListener('click', (event: Event) => { 
    event.preventDefault(); 
    store.view = 'winners'; 
    app.innerHTML = `${renderTable()}`; 
    updateStore(); 
  });  

  viewGarage?.addEventListener('click', (event: Event) => {
    event.preventDefault();
    store.view = 'garage'; 
    app.innerHTML = `${renderGarage()}`; 
    updateStore(); 
  });  
}