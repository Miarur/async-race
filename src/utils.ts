const randomColor = () => {
  return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}


const names = ['Toyota', 'Ford', 'Chevrolet', 'Nissan', 'Hyundai', 'KIA', 'Mercedes-Benz	', 'BMW', 'Opel', 'Mazda', 'Volkswagen']; 
const models = ['Camry', 'GT500', 'Corvette', 'GR-R', 'M3', 'M5', 'E220', 'E500', 'GLS', 'CLS', 'RX-3', 'MX-5', 'Juke'];

const randomName  = () => {
  const name = names[Math.floor(Math.random() * names.length)]; 
  const model = models[Math.floor(Math.random() * models.length)]; 
  return `${name} ${model}`
}

export const generateRandomCars = (count: number) => {
  return new Array(count).fill(1).map(_ => ({name: randomName(), color: randomColor()}));
}
