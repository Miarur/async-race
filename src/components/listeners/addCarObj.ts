import { createCar } from "../../api/api";

export const addCarObj = async () => {
  const createCarBtn = document.querySelector('.button.create-car') as HTMLButtonElement;
  const inputName = document.getElementById('input-create-name') as HTMLInputElement; 
  const inputColor = document.getElementById('input-create-color') as HTMLInputElement; 
  console.log(createCarBtn);
  createCarBtn?.addEventListener('click', async () => { 
    const car = {
      name: inputName.value,
      color: inputColor.value,
    }
    await createCar(car); 
  });
}