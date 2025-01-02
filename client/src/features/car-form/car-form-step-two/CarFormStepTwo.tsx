import React from 'react';
import { useFormContext, FieldError } from 'react-hook-form';
import styles from './CarFormStepTwo.module.css';
import sharedCarFormStyles from '../CarForm.module.css';

const CarFormStepTwo = () => {
    const { register, formState: { errors } } = useFormContext();

    const renderErrorMessage = (error: FieldError | undefined) => {
        return error && typeof error.message === 'string' ? error.message : '';
    };

    return (
        <div className="second-step">
            <div className="st-h">
                <p className={sharedCarFormStyles.stepP}>We need More Info About Your Car</p>
            </div>
            <div className={sharedCarFormStyles.fields}>
                <div className={sharedCarFormStyles.field}>
                    <label>Car Brand</label>
                    <select {...register('carBrand', { required: 'Car brand is required' })}>
                        <option value="1">BEMVE</option>
                    </select>
                </div>
                <div className={sharedCarFormStyles.field}>
                    <label>Car Model</label>
                    <input 
                        type="text" 
                        {...register('carModel', { required: 'Car model is required' })} 
                        placeholder="Model" 
                    />
                </div>
                <div className={sharedCarFormStyles.field}>
                    <label>Car Year</label>
                    <input 
                        type="number" 
                        {...register('carYear', { required: 'Car year is required', min: 1900, max: new Date().getFullYear() })} 
                        placeholder="Year" 
                    />
                    
                </div>
                <div className={sharedCarFormStyles.field}>
                    <label>Fuel Type</label>
                    <select {...register('fuelType', { required: 'Fuel type is required' })}>
                        <option value="Diesel">Diesel</option>
                        <option value="Gasoline">Gasoline</option>
                        <option value="GPL">GPL</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Electric">Electric</option>
                        <option value="Other..">Other..</option>
                    </select>
                   
                </div>
                <div className={sharedCarFormStyles.field}>
                    <label>Gearbox</label>
                    <select {...register('gearbox', { required: 'Gearbox is required' })}>
                        <option value="Auto">Auto</option>
                        <option value="Manual">Manual</option>
                    </select>
                </div>
                <div className={sharedCarFormStyles.field}>
                    <label>Bodywork</label>
                    <select {...register('bodywork', { required: 'Bodywork is required' })}>
                        <option value="sedan">Sedan</option>
                        <option value="hatchback">Hatchback</option>
                        <option value="suv">SUV</option>
                        <option value="coupe">Coupe</option>
                        <option value="convertible">Convertible</option>
                        <option value="station_wagon">Station Wagon</option>
                        <option value="pickup">Pickup</option>
                        <option value="van">Van</option>
                        <option value="minivan">Minivan</option>
                        <option value="crossover">Crossover</option>
                        <option value="roadster">Roadster</option>
                        <option value="limousine">Limousine</option>
                    </select>
                </div>
                <div className={sharedCarFormStyles.field}>
                    <label>How Many Doors?</label>
                    <input 
                        type="number" 
                        {...register('doors', { required: 'Number of doors is required', min: 2, max: 5 })} 
                        placeholder="Doors" 
                    />
                </div>
                <div className={sharedCarFormStyles.field}>
                    <label>How Many Seats?</label>
                    <input 
                        type="number" 
                        {...register('seats', { required: 'Number of seats is required', min: 2, max: 8 })} 
                        placeholder="Seats" 
                    />
                
                </div>
                <div className={sharedCarFormStyles.field}>
                    <label>Horsepower</label>
                    <input 
                        type="number" 
                        {...register('horsepower', { required: 'Horsepower is required', min: 50, max: 1000 })} 
                        placeholder="Horsepower" 
                    />
                    
                </div>
                <div className={sharedCarFormStyles.field}>
                    <label>How Many KM?</label>
                    <input 
                        type="number" 
                        {...register('kilometers', { required: 'Kilometers are required', min: 0 })} 
                        placeholder="KM" 
                    />
                </div>
                <div className={sharedCarFormStyles.field}>
                    <label>Car Color</label>
                    <select {...register('color', { required: 'Car color is required' })}>
                        <option value="1">Red</option>
                        <option value="black">Black</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="silver">Silver</option>
                        <option value="gray">Gray</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                        <option value="orange">Orange</option>
                        <option value="brown">Brown</option>
                        <option value="gold">Gold</option>
                        <option value="purple">Purple</option>
                    </select>
                    
                </div>
            </div>
        </div>
    );
};

export default CarFormStepTwo;