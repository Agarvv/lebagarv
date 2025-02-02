import React from 'react';
import { useFormContext } from 'react-hook-form';
import sharedCarFormStyles from '../CarForm.module.css';

const CarFormStepTwo = () => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="second-step">
            <div className="st-h">
                <p className={sharedCarFormStyles.stepP}>We need More Info About Your Car</p>
            </div>
            <div className={sharedCarFormStyles.fields}>
                <div className={sharedCarFormStyles.field}>
                    <label>Car Brand</label>
                    <select {...register('carBrand', { required: 'Car brand is required' })}>
                        <option value="">Select Brand</option>
                                                <option value={1}>BEMVE</option>
                        <option value={2}>Porke</option>
                        <option value={3}>Mermeledes</option>
                    </select>
                    {errors.carBrand?.message && <small className="formError">{String(errors.carBrand.message)}</small>}
                </div>

                <div className={sharedCarFormStyles.field}>
                    <label>Car Model</label>
                    <input 
                        type="text" 
                        {...register('carModel', { required: 'Car model is required' })} 
                        placeholder="Model" 
                    />
                    {errors.carModel?.message && <small className="formError">{String(errors.carModel.message)}</small>}
                </div>

                <div className={sharedCarFormStyles.field}>
                    <label>Car Year</label>
                    <input 
                        type="number" 
                        {...register('carYear', { 
                            required: 'Car year is required', 
                            min: { value: 1900, message: 'Year must be >= 1900' }, 
                            max: { value: new Date().getFullYear(), message: 'Year cannot exceed current year' } 
                        })} 
                        placeholder="Year" 
                    />
                    {errors.carYear?.message && <small className="formError">{String(errors.carYear.message)}</small>}
                </div>

                <div className={sharedCarFormStyles.field}>
                    <label>Fuel Type</label>
                    <select {...register('fuelType', { required: 'Fuel type is required' })}>
                        <option value="">Select Fuel Type</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Gasoline">Gasoline</option>
                        <option value="GPL">GPL</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Electric">Electric</option>
                        <option value="Other..">Other..</option>
                    </select>
                    {errors.fuelType?.message && <small className="formError">{String(errors.fuelType.message)}</small>}
                </div>

                <div className={sharedCarFormStyles.field}>
                    <label>Gearbox</label>
                    <select {...register('gearbox', { required: 'Gearbox is required' })}>
                        <option value="">Select Gearbox</option>
                        <option value="Auto">Auto</option>
                        <option value="Manual">Manual</option>
                    </select>
                    {errors.gearbox?.message && <small className="formError">{String(errors.gearbox.message)}</small>}
                </div>

                <div className={sharedCarFormStyles.field}>
                    <label>Bodywork</label>
                    <select {...register('bodywork', { required: 'Bodywork is required' })}>
                        <option value="">Select Bodywork</option>
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
                    {errors.bodywork?.message && <small className="formError">{String(errors.bodywork.message)}</small>}
                </div>

                <div className={sharedCarFormStyles.field}>
                    <label>How Many Doors?</label>
                    <input 
                        type="number" 
                        {...register('doors', { 
                            required: 'Number of doors is required', 
                            min: { value: 2, message: 'Must have at least 2 doors' }, 
                            max: { value: 5, message: 'Cannot exceed 5 doors' } 
                        })} 
                        placeholder="Doors" 
                    />
                    {errors.doors?.message && <small className="formError">{String(errors.doors.message)}</small>}
                </div>

                <div className={sharedCarFormStyles.field}>
                    <label>How Many Seats?</label>
                    <input 
                        type="number" 
                        {...register('seats', { 
                            required: 'Number of seats is required', 
                            min: { value: 2, message: 'Must have at least 2 seats' }, 
                            max: { value: 8, message: 'Cannot exceed 8 seats' } 
                        })} 
                        placeholder="Seats" 
                    />
                    {errors.seats?.message && <small className="formError">{String(errors.seats.message)}</small>}
                </div>

                <div className={sharedCarFormStyles.field}>
                    <label>Horsepower</label>
                    <input 
                        type="number" 
                        {...register('horsepower', { 
                            required: 'Horsepower is required', 
                            min: { value: 50, message: 'Must have at least 50 HP' }, 
                            max: { value: 1000, message: 'Cannot exceed 1000 HP' } 
                        })} 
                        placeholder="Horsepower" 
                    />
                    {errors.horsepower?.message && <small className="formError">{String(errors.horsepower.message)}</small>}
                </div>

                <div className={sharedCarFormStyles.field}>
                    <label>How Many KM?</label>
                    <input 
                        type="number" 
                        {...register('kilometers', { 
                            required: 'Kilometers are required', 
                            min: { value: 0, message: 'Cannot be less than 0' } 
                        })} 
                        placeholder="KM" 
                    />
                    {errors.kilometers?.message && <small className="formError">{String(errors.kilometers.message)}</small>}
                </div>

                <div className={sharedCarFormStyles.field}>
                    <label>Car Color</label>
                    <select {...register('color', { required: 'Car color is required' })}>
                        <option value="">Select Color</option>
                        <option value={1}>Red</option>
                        <option value={2}>Black</option>
                        <option value={3}>Red</option>
                        <option value={4}>Blue</option>
                        <option value={5}>Silver</option>
                        <option value={6}>Gray</option>
                        <option value={7}>Yellow</option>
                        <option value={8}>Green</option>
                        <option value={9}>Orange</option>
                        <option value={10}>Brown</option>
                        <option value={11}>Gold</option>
                        <option value={12}>Purple</option>
                    </select>
                    {errors.color?.message && <small className="formError">{String(errors.color.message)}</small>}
                </div>
            </div>
        </div>
    );
};

export default CarFormStepTwo;