const baseUrl = 'http://127.0.0.1:3000';
const garage = `${baseUrl}/garage`; 
const engine = `${baseUrl}/engine`; 
const winners = `${baseUrl}/winners`; 


type QueryParams = {
  key?: string,
  value?: string | number,
};

type CarObject = {
  name: string,
  color: string,
};

// ([{key:'_page', value: 0}, {key: '_limit', value: 1}]);
export const generateQueryString = (queryParams: QueryParams[]) => queryParams.length
  ? `?${queryParams.map(item => `${item.key}=${item.value}`).join('&')}`
  : '';

export const getCars = async(queryParams: QueryParams[]) => {
  const response = await fetch(`${garage}${generateQueryString(queryParams)}`); 
  const cars = await response.json(); 
  console.log(cars);  
  console.log(`total count => ${Number(response.headers.get('X-Total-Count'))}`);
  return cars;
};

export const getCar = async(id: number) => {
  const response = await fetch(`${garage}/${id}`);
  const car = await response.json();
  return car; 
};

export const createCar = async(carObj: CarObject) => {
  const response = await fetch(`${garage}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(carObj)
  });
  const carItem = await response.json();
  return carItem; 
};

export const updateCar = async(id: number, carObj: CarObject) => {
  const response = await fetch(`${garage}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(carObj)
  });
  const carItem = await response.json();
  return carItem; 
};

export const deleteCar = async(id: number) => {
  const response = await fetch(`${garage}/${id}`, {
    method: 'DELETE',
  });
  const carItem = await response.json();
  return carItem; 
}


export const getWinners = async(queryParams: QueryParams[]) => {
  const response = await fetch(`${winners}${generateQueryString(queryParams)}`); 
  const totalWinners = await response.json(); 
  console.log(totalWinners);  
  console.log(`total count => ${Number(response.headers.get('X-Total-Count'))}`);
  return totalWinners;
};