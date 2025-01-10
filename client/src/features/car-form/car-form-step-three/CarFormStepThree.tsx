import React from 'react';
import { useFormContext } from 'react-hook-form';
import sharedCarFormStyles from '../CarForm.module.css';

const CarFormStepThree = () => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="third-step">
            <div className="ts-h">
                <p className={sharedCarFormStyles.stepP}>We Are Almost Done!</p>
            </div>

            <div className={sharedCarFormStyles.field}>
                <label>Description</label>
                <textarea 
                    {...register('description', { required: 'Description is required' })} 
                    placeholder="Describe your car"
                />
                {errors.description?.message && <small className="formError">{String(errors.description.message)}</small>}
            </div>

            <div className={sharedCarFormStyles.field}>
                <label>Price</label>
                <input 
                    type="number"
                    placeholder="Price"
                    {...register('price', { required: 'Price is required' })}
                />
                {errors.price?.message && <small className="formError">{String(errors.price.message)}</small>}
            </div>

            <div className={sharedCarFormStyles.field}>
                <label>City</label>
                <input 
                    type="text"
                    placeholder="City"
                    {...register('city', { required: 'City is required' })}
                />
                {errors.city?.message && <small className="formError">{String(errors.city.message)}</small>}
            </div>
        </div>
    );
};

export default CarFormStepThree;