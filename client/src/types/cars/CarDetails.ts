import { CarOwner } from './CarOwner'

export type CarDetails = {
    id: number,
    title: string,
    price: number,
    images: string[],
    carYear: number,
    fuelType: string,
    gearbox: string,
    date: string,
    city: string,
    brand: string,
    color: string,
    carModel: string,
    bodywork: string,
    description: string,
    doors: number,
    seats: number,
    horsepower: number,
    kilometers: number,
    user: CarOwner,
    isFavorite: boolean 
}