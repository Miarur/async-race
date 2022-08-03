

const baseUrl = 'http://127.0.0.1:3000'; 
const path = {
  garage: '/garage',
  winners: '/winners'
};

type QueryParams = {
  key?: string,
  value?: string | number,
}

type CarObject = {
  name: string,
  color: string,
  id?: number
}

// ([{key:'_page', value: 0}, {key: '_limit', value: 1}]);
const generateQueryString = (queryParams: QueryParams[]) => queryParams.length
  ? `?${queryParams.map(item => `${item.key}=${item.value}`).join('&')}`
  : '';

const getCars = async(queryParams: QueryParams[]) => {
  const response = await fetch(`${baseUrl}${path.garage}${generateQueryString(queryParams)}`); 
  const cars = await response.json(); 
  console.log(cars);  
  console.log(`total count => ${Number(response.headers.get('X-Total-Count'))}`);
  return cars;
}

const getCar = async(id: number) => {
  const response = await fetch(`${baseUrl}${path.garage}/${id}`);
  const car = await response.json();
  return car; 
}


const createCar = async(carObj: CarObject) => {
  const response = await fetch(`${baseUrl}${path.garage}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(carObj)
  });
  const carItem = await response.json();
  return carItem; 
}




const main = async () => {
  const car = await createCar({
    name: 'Audi',
    color: 'black',
  });
  console.log(car); 
  const cars = await getCars([{key:'_page', value: 0}])
}

main();