import { CarObject } from '../types/apiTypes'

export type State = {
  carsPage: number,
  cars: CarObject[],
  carsCount: number,
  view?: string,
}
