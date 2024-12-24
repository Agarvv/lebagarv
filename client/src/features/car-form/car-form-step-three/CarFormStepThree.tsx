import React from 'react';
import { useFormContext, FieldError } from 'react-hook-form';
import styles from './CarFormStepThree.module.css';
import sharedCarFormStyles from '../CarForm.module.css';

const CarFormStepThree = () => {
    const { register, formState: { errors } } = useFormContext();

    const renderErrorMessage = (error: FieldError | undefined) => {
        return error && typeof error.message === 'string' ? error.message : '';
    };

    return (
        <div className="third-step">
            <div className="ts-h">
                <p className={sharedCarFormStyles.stepP}>We Are Almost Done!</p>
                <div className={sharedCarFormStyles.field}>
                    <label>Description</label>
                    <textarea 
                        {...register('description', { required: 'Description is required' })} 
                        placeholder="Describe your car"
                    />
                    
                </div>
                <div className={sharedCarFormStyles.field}>
                  <label>Price</label> 
                  <input 
                   type="number"
                   placeholder="Price"
                  />
                </div> 
            </div>
        </div>
    );
};

export default CarFormStepThree;