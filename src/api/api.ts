import { QueryParams, CarObject, CarWinner, IResponseCars } from '../types/apiTypes';

const baseUrl = 'http://127.0.0.1:3000';
const garage = `${baseUrl}/garage`; 
const engine = `${baseUrl}/engine`; 
const winners = `${baseUrl}/winners`; 

// ([{key:'_page', value: 0}, {key: '_limit', value: 1}]);
export const generateQueryString = (queryParams: QueryParams[]) => queryParams.length
  ? `?${queryParams.map(item => `${item.key}=${item.value}`).join('&')}`
  : '';

export const getCars = async(queryParams: QueryParams[]): Promise<IResponseCars> => {
  const response = await fetch(`${garage}${generateQueryString(queryParams)}`); 
  return {
    cars: await response.json(), 
    totalCount: Number(response.headers.get('X-Total-Count')),
  };
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

export const getWinner = async(id: number) => {
  const response = await fetch(`${winners}/${id}`);
  const itemWinner = await response.json();
  return itemWinner; 
};

export const createWinner = async(winner: CarWinner) => {
  const response = await fetch(`${winners}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(winner)
  });
  const itemWinner = await response.json();
  return itemWinner; 
};

export const deleteWinner = async(id: number) => {
  const response = await fetch(`${winners}/${id}`, {
    method: 'DELETE',
  });
  const itemWinner = await response.json();
  return itemWinner; 
}

export const updateWinner = async(id: number, winner: CarWinner) => {
  const response = await fetch(`${winners}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(winner)
  });
  const itemWinner = await response.json();
  return itemWinner; 
};

export const engineStartStop = async(id: number, status: 'started'|'stopped') => {
  const response = await fetch(`${engine}?id=${id}&status=${status}`, {method: 'PATCH'});
  const engineState = await response.json();
  return engineState; 
};

export const engineState = async(id: number, status: 'drive') => {
  const response = await fetch(`${engine}?id=${id}&status=${status}`, {method: 'PATCH'});
  const engineState = await response.json();
  return engineState; 
};