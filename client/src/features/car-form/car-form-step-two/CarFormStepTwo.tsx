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
                        <option value="BMW">BMW</option>
                        <option value="Mercedes">Mercedes</option>
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
                        <option value="SUV">SUV</option>
                        <option value="Sedan">Sedan</option>
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
            </div>
        </div>
    );
};

export default CarFormStepTwo;