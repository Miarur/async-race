import { generateRandomCars } from "../../utils";
import { createCar } from "../../api/api";
import { updateStore } from "../pagination/pagination";
import { renderGarage } from "../renders/renderGarage";

export const addRandomCars = async () => {
  const app = document.getElementById('app') as HTMLElement; 
  const generateBtn = document.getElementById('generate') as HTMLButtonElement; 
  generateBtn.addEventListener('click', async () => {
    const generatedCars = generateRandomCars(100); 
    generatedCars.map((item) => {
       createCar(item);  
    })
    await updateStore();
    app.innerHTML = `${renderGarage()}`;
  })  
}