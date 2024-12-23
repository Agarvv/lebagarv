import React from 'react';
import { useFormContext } from 'react-hook-form';

const CarFormStepTwo = () => {
    const { register } = useFormContext();

    return (
        <div className="second-step">
            <div className="st-h">
                <p className="step-p">We need More Info About Your Car</p>
            </div>
            <div className="fields">
                <div className="field">
                    <label>Car Brand</label>
                    <select {...register('carBrand')}>
                        <option value="BEMVE">BEMVE</option>
                    </select>
                </div>
                <div className="field">
                    <label>Car Model</label>
                    <input type="text" {...register('carModel')} placeholder="Model" />
                </div>
                <div className="field">
                    <label>Car Year</label>
                    <input type="number" {...register('carYear')} placeholder="Year" />
                </div>
                <div className="field">
                    <label>Fuel Type</label>
                    <select {...register('fuelType')}>
                        <option value="Diesel">Diesel</option>
                        <option value="Gasoline">Gasoline</option>
                        <option value="GPL">GPL</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Electric">Electric</option>
                        <option value="Other..">Other..</option>
                    </select>
                </div>
                <div className="field">
                    <label>Gearbox</label>
                    <select {...register('gearbox')}>
                        <option value="Auto">Auto</option>
                        <option value="Manual">Manual</option>
                    </select>
                </div>
                <div className="field">
                    <label>Bodywork</label>
                    <select {...register('bodywork')}>
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
                <div className="field">
                    <label>How Many Doors?</label>
                    <input type="number" {...register('doors')} placeholder="Doors" />
                </div>
                <div className="field">
                    <label>How Many Seats?</label>
                    <input type="number" {...register('seats')} placeholder="Seats" />
                </div>
                <div className="field">
                    <label>Horsepower</label>
                    <input type="number" {...register('horsepower')} placeholder="Horsepower" />
                </div>
                <div className="field">
                    <label>How Many KM?</label>
                    <input type="number" {...register('kilometers')} placeholder="KM" />
                </div>
                <div className="field">
                    <label>Car Color</label>
                    <select {...register('color')}>
                        <option value="white">White</option>
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