export type QueryParams = {
  key?: string,
  value?: string | number,
};

export type CarObject = {
  name: string,
  color: string,
  id?: number,
};

export type CarWinner = {
  wins: number,
  time: number,
  id?: number,
}

export interface IResponseCars {
  cars: CarObject[],
  totalCount: number,
}